# Component refactoring guide

Reference for bringing existing components in line with the conventions established during the `feature/decorator-refactor` branch.

---

## The core problem: decorator defaults are unreliable

`getAttribute()` can return `undefined` when the caller omits an attribute, even if a `default` is declared in the `@MJMLCustomComponent` decorator. Never rely solely on the decorator default to prevent `undefined` from reaching the rendered MJML. Runtime normalization in `render()` is always required as a safety net.

---

## Two categories of attributes

Every attribute falls into exactly one category. Choosing the wrong one is the most common mistake.

### 1. Always-emitted attributes

The attribute is always written into the child component tag, even when the caller does not provide a value. An empty string is an acceptable output.

Examples: `headline`, `image-alt`, `header-title`, `cta-href`, `image-src`.

**Decorator:** declare a `default` matching the intended fallback (usually `''` for strings, a style-mapping value for units).

**In `render()`:** include in the `attrs` normalization block with an explicit `|| fallback`.

```typescript
const attrs = {
  headline: this.getAttribute('headline') || '',
  imageAlt: this.getAttribute('image-alt') || '',
  paddingBottom: this.getAttribute('padding-bottom') || AdobeRedStyleMapping.spacings.custom.px0,
}
```

Use `attrs.x` directly in template strings — no further null checks needed.

### 2. Conditionally-included attributes

The attribute must be entirely absent from the child component tag when the caller does not provide a value. Passing an empty string is not equivalent to omitting the attribute.

Examples: `image-src-mobile`, `product-height-overwrite`, `product-width-overwrite`.

**Decorator:** no `default`.

**In `render()`:** build a pre-computed attribute string variable before the template.

```typescript
const imageSrcMobile = this.getAttribute('image-src-mobile')
const imageSrcMobileAttr = imageSrcMobile ? `src-mobile="${imageSrcMobile}"` : ''

const productHeightOverwrite = this.getAttribute('product-height-overwrite')
const productHeightOverwriteAttr = productHeightOverwrite ? `product-height-overwrite="${productHeightOverwrite}"` : ''
```

Interpolate as `${imageSrcMobileAttr}` — the variable is either the full `key="value"` string or an empty string.

---

## Refactoring checklist

Work through the file in this order.

### Decorator block

- [ ] Remove `const styleMapping = AdobeRedStyleMapping` alias. Use `AdobeRedStyleMapping` directly in the decorator.
- [ ] Collapse multi-line attribute declarations to single-line: `'attr-name': { type: '...', default: '...' }`.
- [ ] For always-emitted string attributes: ensure `default: ''` (or a meaningful fallback) is present.
- [ ] For conditionally-included attributes: remove any `default` (including `default: ''`).

### `render()` method

- [ ] Add an `attrs` block at the top collecting all always-emitted attributes, each with `|| fallback`.
  - The fallback value must match the decorator `default` — both are needed.
- [ ] For each conditionally-included attribute, add a pre-computed `xAttr` variable.
- [ ] Replace all inline `this.getAttribute(...)` calls in the template with `attrs.x` or `${xAttr}`.
- [ ] Remove any `?? ''` or `|| ''` inside the template strings — normalization belongs in `attrs`, not the template.
- [ ] Change `let header = ...` to `const header = ...` wherever the variable is assigned once via a ternary.

### Boolean attributes

`getAttribute()` may return either the boolean `true` or the string `'true'` depending on how MJML processes the attribute. Comparing with `=== true` alone will silently fail when the string form is returned. Always normalize to cover both:

```typescript
onBackground: this.getAttribute('on-background') === true || this.getAttribute('on-background') === 'true',
```

The double-check is safe for the `false` case too: `undefined`, `false`, and `'false'` all produce `false` without a special branch.

### Attribute strings in templates

Always quote attribute values: `additional-padding-bottom="${attrs.headerPaddingBottom}"`, not `additional-padding-bottom=${...}`.

---

## Full pattern example

```typescript
import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-example',
  attributes: {
    // Always-emitted — has default
    'section-bg-class': { type: 'string', default: 'content-bg' },
    'headline':         { type: 'string', default: '' },
    'image-src':        { type: 'string', default: '' },
    'image-alt':        { type: 'string', default: '' },
    'padding-bottom':   { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.custom.px0 },

    // Conditionally-included — no default
    'image-src-mobile':        { type: 'string' },
    'product-height-overwrite': { type: 'unit(px)' },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobeExample extends BodyComponent {
  static endingTag = true

  render() {
    // Always-emitted: normalize once, use attrs.x in templates
    const attrs = {
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      headline:       this.getAttribute('headline') || '',
      imageSrc:       this.getAttribute('image-src') || '',
      imageAlt:       this.getAttribute('image-alt') || '',
      paddingBottom:  this.getAttribute('padding-bottom') || AdobeRedStyleMapping.spacings.custom.px0,
    }

    // Conditionally-included: read once, then build attribute string
    const imageSrcMobile = this.getAttribute('image-src-mobile')
    const imageSrcMobileAttr = imageSrcMobile ? `src-mobile="${imageSrcMobile}"` : ''

    const productHeightOverwrite = this.getAttribute('product-height-overwrite')
    const productHeightOverwriteAttr = productHeightOverwrite ? `product-height-overwrite="${productHeightOverwrite}"` : ''

    return this.renderMJML(`
      <labor-adobe-section
        padding-bottom="${attrs.paddingBottom}"
        section-bg-class="${attrs.sectionBgClass}"
      >
        <mj-column>
          <labor-adobe-typo-display-one>${attrs.headline}</labor-adobe-typo-display-one>
          <labor-responsive-image
            src="${attrs.imageSrc}"
            ${imageSrcMobileAttr}
            ${productHeightOverwriteAttr}
            alt="${attrs.imageAlt}"
          />
        </mj-column>
      </labor-adobe-section>
    `)
  }
}
```
