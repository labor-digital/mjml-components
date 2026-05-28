# LABOR - MJML Components

A library of custom MJML 4.7.x components for Adobe-branded email projects, published as `@labor-digital/mjml-components`.

## Installation

```bash
npm install @labor-digital/mjml-components
```

## Setup

Components must be registered with MJML before use. Import and register them in your build setup:

### Register all components

```js
import { registerComponent } from 'mjml-core'
import * as Components from '@labor-digital/mjml-components'

Object.values(Components).filter(Boolean).forEach(c => registerComponent(c))
```

### Register specific components

```js
import { registerComponent } from 'mjml-core'
import { LaborAdobeHeader, LaborAdobeFooter } from '@labor-digital/mjml-components'

registerComponent(LaborAdobeHeader)
registerComponent(LaborAdobeFooter)
```

## Available Components

### Adobe Components

| Component | Tag |
|---|---|
| `LaborAdobeSection` | `labor-adobe-section` |
| `LaborAdobeHeader` | `labor-adobe-header` |
| `LaborAdobeFooter` | `labor-adobe-footer` |
| `LaborAdobeFooterBand` | `labor-adobe-footer-band` |
| `LaborAdobeFooterImageBand` | `labor-adobe-footer-image-band` |
| `LaborAdobeButton` | `labor-adobe-button` |
| `LaborAdobeLink` | `labor-adobe-link` |
| `LaborAdobeHeroCardImmersiveOne` | `labor-adobe-hero-card-immersive-one` |
| `LaborAdobeHeroCardImmersiveTwo` | `labor-adobe-hero-card-immersive-two` |
| `LaborAdobeHeroCardImmersiveThree` | `labor-adobe-hero-card-immersive-three` |
| `LaborAdobeHeroCardSimpleOne` | `labor-adobe-hero-card-simple-one` |
| `LaborAdobeHeroCardSimpleTwo` | `labor-adobe-hero-card-simple-two` |
| `LaborAdobeHeroCardSplitOne` | `labor-adobe-hero-card-split-one` |
| `LaborAdobeHeroCardSplitTwo` | `labor-adobe-hero-card-split-two` |
| `LaborAdobePod` | `labor-adobe-pod` |
| `LaborAdobePodStandard` | `labor-adobe-pod-standard` |
| `LaborAdobePodStandardFullWidth` | `labor-adobe-pod-standard-full-width` |
| `LaborAdobePodNoImage` | `labor-adobe-pod-no-image` |
| `LaborAdobePodApplication` | `labor-adobe-pod-application` |
| `LaborAdobePodZFormation` | `labor-adobe-pod-z-formation` |
| `LaborAdobeActionCard` | `labor-adobe-action-card` |
| `LaborAdobeAvatar` | `labor-adobe-avatar` |
| `LaborAdobeEdexArticle` | `labor-adobe-edex-article` |
| `LaborAdobeEdexCategory` | `labor-adobe-edex-category` |
| `LaborAdobeTwoColImgTextSection` | `labor-adobe-two-col-img-text-section` |
| `LaborAdobeProductLogo` | `labor-adobe-product-logo` |
| `LaborAdobeTypoBody` | `labor-adobe-typo-body` |
| `LaborAdobeTypoCaption` | `labor-adobe-typo-caption` |
| `LaborAdobeTypoDetail` | `labor-adobe-typo-detail` |
| `LaborAdobeTypoDisplayOne` | `labor-adobe-typo-display-one` |
| `LaborAdobeTypoDisplayTwo` | `labor-adobe-typo-display-two` |
| `LaborAdobeTypoDisplayThree` | `labor-adobe-typo-display-three` |
| `LaborAdobeTypoHeadingOne` | `labor-adobe-typo-heading-one` |
| `LaborAdobeTypoHeadingTwo` | `labor-adobe-typo-heading-two` |
| `LaborAdobeTypoHeadingThree` | `labor-adobe-typo-heading-three` |
| `LaborAdobeTypoHeadingFour` | `labor-adobe-typo-heading-four` |
| `LaborAdobeTypoLegal` | `labor-adobe-typo-legal` |

### Labor Components

| Component | Tag |
|---|---|
| `LaborBgWrapper` | `labor-bg-wrapper` |
| `LaborResponsiveImage` | `labor-responsive-image` |
| `LaborRoundedButton` | `labor-rounded-button` |

## Development

### Build

```bash
npm run build        # compile TypeScript → lib/
npm run watch        # watch mode
```

### Previews

HTML previews are compiled from `.mjml` source files in `src/` to `previews/`. Any compilation errors are written to `tests/errors.json`.

```bash
npm run preview   # compile all component previews
```

### Testing

This project uses [Playwright](https://playwright.dev/) for visual and snapshot regression testing. `npm run test` builds the project, compiles previews and validation fixtures, then runs all Playwright tests.

```bash
npm run test
```

Three test suites run:
- **Preview Snapshots** — full-page screenshots at two viewports (`chromium-xs` 400×700, `chromium-lg` 1024×768)
- **HTML Snapshots** — normalized HTML output compared against baselines
- **Validation Snapshots** — expected MJML validation errors compared against baselines

Baseline snapshots are stored in `tests/test-snapshots/`. After any intentional change, update them with:

```bash
npm run test -- --update-snapshots
```

## Notes

- Media queries must use `max-width` (not `min-width`) to avoid layout issues in Outlook desktop.
- Rounded buttons and some components include VML conditional comments for Outlook compatibility.

## MJML Internals

### `endingTag` and validation

`mjml-parser-xml` skips all descendant tags of any component registered with `endingTag: true` — their content is stored as a raw string, never parsed into AST children. This means the MJML validator never sees those nodes and never checks their attributes or nesting.

All container components in this library explicitly set `endingTag: false` in the `@MJMLCustomComponent` decorator. Always do the same for any component that wraps child MJML components — the decorator defaults to `endingTag: true` when the option is omitted.

### Rendering children in container components

When `endingTag: false`, `this.props.content` is not populated. Container components must use `this.renderChildren(null, { rawXML: true })` to serialize their AST children back to MJML XML for embedding in a `renderMJML()` string template.

Components that delegate entirely to a parent class (`MjWrapper`, etc.) do not need a custom `render()` — they inherit `renderChildren()` from the base class.

### `mj-class` resolution in `renderMJML()`

`mj-class` attributes are resolved at instantiation time via `applyAttributes()`, which reads `globalDatas.classes` — a closure inside `mjml2html`. When a component needs to forward `mj-class` to a wrapped standard component, pass a node object to `renderMJML()` instead of a string template:

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

This triggers `this.context.processing(node, this.context)` directly, which runs `applyAttributes()` against the live class map.

### Validation levels

`validationLevel: 'strict'` causes any validation error to throw a `ValidationError` instead of being collected in `result.errors`. `compile-previews.ts` wraps `mjml2html` in `try/catch` to handle this uniformly.

### IDE auto-complete (web-types)

PhpStorm and other JetBrains IDEs provide attribute auto-complete for `.mjml` files via the [web-types](https://github.com/JetBrains/web-types) standard. The `web-types.json` in this repo is generated from the live component registry and teaches the IDE about every `labor-*` tag — its attributes, types, defaults, and allowed children.

Run `npm run generate-web-types` after adding or changing a component's attributes or allowed children, then commit the updated file.

**Note:** PhpStorm's XML content model validator may flag child tags as "Element X is not allowed here" — this is a false positive from IntelliJ's core XML highlighter that cannot be suppressed. Nesting rules are enforced at compile time via `npm run preview`.
