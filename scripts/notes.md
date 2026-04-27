# MJML Validation Quirks

## How `endingTag` affects validation

`mjml-parser-xml` builds a list of all registered components where `component.endingTag === true`. When the parser encounters such a tag, it enters a mode where all descendant open-tags are skipped — their content is stored as a raw string on the parent node, not as parsed AST children:

```js
// mjml-parser-xml: inside onopentag
if (inEndingTag > 0) {
  return;  // child tags are swallowed, never added to the AST
}
```

If a container component has `endingTag: true`, everything inside it — `<mj-column>`, child `labor-*` components, and their attributes — never appears in the AST. The MJML validator never sees those nodes and never checks their attributes or nesting.

All container components in this library explicitly set `endingTag: false` in the `@MJMLCustomComponent` decorator. MJML's built-in validator then handles both attribute checking and nesting rules for all `labor-*` components via the registrations made by `registerComponent()` and `registerDependencies()`.

**Note:** The `@MJMLCustomComponent` decorator defaults to `endingTag: true` when the option is omitted. Always explicitly set `endingTag: false` for any component that wraps child MJML components.

### Rendering children in container components

When `endingTag: false`, `this.props.content` is not populated. Container components must use `this.renderChildren(null, { rawXML: true })` to serialize their AST children back to MJML XML for embedding in a `renderMJML()` string template.

Components that delegate entirely to a parent class (`MjWrapper`, etc.) do not need a custom `render()` — they inherit `renderChildren()` from the base class.

### `mj-class` resolution in `renderMJML()`

`mj-class` attributes are resolved at instantiation time via `applyAttributes()`, which reads `globalDatas.classes` — a closure inside `mjml2html`. When a component needs to forward `mj-class` to a wrapped standard component, pass a node object to `renderMJML()` instead of a string template. This triggers `this.context.processing(node, this.context)` directly, which runs `applyAttributes()` against the live class map:

```typescript
return this.renderMJML({
  tagName: 'mj-section',
  attributes: {
    'mj-class': this.getAttribute('section-bg-class'),
    // ...
  },
  children: this.props.children,
} as any)
```

## Validation in strict mode

Passing `validationLevel: 'strict'` to `mjml2html` makes any validation error throw a `ValidationError` exception instead of being collected in `result.errors`. Both `compile-previews.ts` and `validate-all.ts` wrap `mjml2html` in `try/catch` to handle this and report errors uniformly.

## Why we generate web-types.json

PhpStorm (and other JetBrains IDEs) provide attribute auto-complete in HTML-like files via the [web-types](https://github.com/JetBrains/web-types) standard. The MJML Support plugin activates this for `.mjml` files. By pointing `"web-types": "./web-types.json"` in `package.json` at our generated file, PhpStorm learns about every `labor-*` tag: its attributes, their types and defaults, and which child tags it accepts.

Without this file, none of the custom `labor-*` tags appear in auto-complete. Standard `mj-*` tags are covered by the MJML Support plugin's own built-in definitions — the plugin ships with a hardcoded schema for all standard components and does not read web-types for them. Web-types is only consulted for tags the plugin does not already know about, which is why our custom `labor-*` components need it but `mj-section`, `mj-column`, etc. do not.

The file is generated from the live component registry (the same `components` map and `dependencies` map populated by the decorators), so it always reflects the current state of the codebase. Run `npm run generate-web-types` after adding or changing a component's attributes or allowed children, then commit the updated `web-types.json`.

**Known limitation:** PhpStorm's XML content model validator treats the web-types `elements` list as a strict content model and flags any child tag not listed there as "Element X is not allowed here". This error comes from IntelliJ's core XML highlighter and cannot be suppressed via inspection profiles — it has no inspection ID and Alt+Enter produces no quick-fix. It is a false positive caused by web-types being designed for completion scope, not validation. Nesting rules are enforced at compile time via `npm run preview` (`validationLevel: 'strict'`).
