# LABOR - MJML Components

xThis package contains a number of custom mjml components. //

## Installation

Install this package using npm:

```
npm install @labor-digital/mjml-components
```

Currently this package only supports `MJML 4.7.*`.

## Setup

Before using the components they need to be registered. This can be done by adding the following code to a gulp task.

### Register specific components

```js
import { registerComponent } from 'mjml-core'
import { LaborResponsiveImage, LaborRoundedButton } from '@labor-digital/mjml-components'

const registerComponents = () => {
  registerComponent(LaborResponsiveImage)
  registerComponent(LaborRoundedButton)
}

exports.build = gulp.series(
  (cb) => {
    registerExternalComponents()
    return cb()
  },
  // do other stuff
)
```

### Register all available components

```js
import { registerComponent } from 'mjml-core'
import * as Components from '@labor-digital/mjml-components'

const registerExternalComponents = () => {
  Object.values(Components)
    .filter((c) => c !== undefined)
    .forEach((component) => registerComponent(component))
}

exports.build = gulp.series(
  (cb) => {
    registerExternalComponents()
    return cb()
  },
  // do other stuff
)
```

## Testing

This project uses [Playwright](https://playwright.dev/) for visual regression testing of MJML component previews.

### Running Tests

The following test scripts are available:

```bash
# Run all tests
npm run test

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests in debug mode
npm run test:debug

# View the test report
npm run test:report
```

### Visual Regression Testing

The test suite automatically generates visual snapshots of all HTML files in the `previews/` directory across four different viewport sizes:

- **xs** (480×700) - Extra small/mobile
- **md** (700×1000) - Medium/tablet
- **lg** (1024×768) - Large/desktop
- **xl** (1920×1080) - Extra large/full HD

Snapshots are stored in `playwright/test-snapshots/` and are used to detect visual regressions when component styles or layouts change.

### Updating Snapshots

When you intentionally change component styles or layouts, update the baseline snapshots:

```bash
npm run test -- --update-snapshots
```

## Documentation

- Media queries should use max-width, not min-width, to prevent issues with Outlook desktop.
