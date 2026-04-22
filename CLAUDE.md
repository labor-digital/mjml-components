# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Build (TypeScript → lib/)
npm run build

# Watch mode
npm run watch

# Generate HTML previews from component scripts
npm run preview

# Format with Prettier (120 char width, single quotes, trailing commas)
npm run prettier-format

# Run all Playwright visual regression tests
npm run test

# Run a single test by filename pattern
npm run test -- -g "adobe_components_cta"

# Update baseline snapshots after intentional visual changes
npm run test -- --update-snapshots

# Interactive UI / headed / debug modes
npm run test:ui
npm run test:headed
npm run test:debug
npm run test:report
```

## Architecture

This is a library of custom MJML 4.7.x components published as `@labor-digital/mjml-components`. Components are written in TypeScript under `src/`, compiled to `lib/` (never edit `lib/` directly).

Two families of components:
- **`src/Labor/`** — Generic reusable components (responsive image, rounded button, background wrapper)
- **`src/Adobe/`** — Adobe-branded components organized by concern: `Components/Sections/`, `Components/Typo/`, `Components/CTA/`, `Components/HeroCards/`, `Components/Footers/`, `Components/ProductLogos/`, plus `Styles/` and `Mapping/` data files

### Component Pattern

All components use the `@MJMLCustomComponent` decorator from `mjml-custom-component-decorator`. The decorator is applied to the class expression assigned to `export default`:

```typescript
import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'

export default @MJMLCustomComponent({
  tag: 'labor-my-component',
  attributes: {
    'some-attr': { type: 'string', default: 'value' },
    'size':      { type: 'unit(px)', },
    'color':     { type: 'color', default: '#fff' },
    'flag':      { type: 'boolean', default: 'false' },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})
class LaborMyComponent extends BodyComponent {
  static endingTag = true   // set when the tag has no child MJML components

  render() {
    return `<div ${this.htmlAttributes({ style: { color: this.getAttribute('color') } })}>
      ${this.getContent()}
    </div>`
  }
}
```

**Base classes to extend:**
- `BodyComponent` — general-purpose body components
- `MjImage` — image-based components (add responsive variants)
- `MjSection` — section-level wrappers

**Key instance methods:**
- `this.getAttribute(name)` — read an attribute value
- `this.htmlAttributes(obj)` — serialize an object to HTML attribute string
- `this.getContent()` — get inner child content
- `this.getStyles()` — return CSS style objects
- `this.headStyle(breakpoint)` — add `<head>` media query styles
- `this.getShorthandAttrValue(attr, side)` — parse shorthand values (e.g. padding top/right/bottom/left)

### Outlook/VML Support

Rounded buttons and some other components include conditional comments for Outlook using VML (`<v:roundrect>`, `<w:anchorlock>`). Always wrap Outlook-specific markup in `<!--[if mso]>...<![endif]-->` and modern markup in `<!--[if !mso]><!-->`...`<!--<![endif]-->`.

### Media Queries

Use `max-width` (not `min-width`) in all media queries to avoid layout issues in Outlook desktop.

### Testing

Tests live in `playwright/snapshots.spec.ts`. The spec discovers every `.html` file in `previews/` (except `index.html`) and takes full-page screenshots at two viewports:
- `chromium-xs` — 400×700 (mobile)
- `chromium-lg` — 1024×768 (desktop)

Snapshots are stored in `playwright/test-snapshots/`. Run `--update-snapshots` after any intentional visual change.

### Registering Components in Consumer Projects

```js
import { registerComponent } from 'mjml-core'
import * as Components from '@labor-digital/mjml-components'

Object.values(Components).filter(Boolean).forEach(c => registerComponent(c))
```

### TypeScript Notes

- `experimentalDecorators: true` is required in `tsconfig.json` for the `@MJMLCustomComponent` decorator syntax
- Babel (with decorators plugin) handles runtime transpilation; tsc handles type-checking and declaration generation
- `strict` mode is disabled
