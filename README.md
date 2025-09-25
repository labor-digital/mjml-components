# LABOR - MJML Components

This package contains a number of custom mjml components. //

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

## Documentation

- Media queries should use max-width, not min-width, to prevent issues with Outlook desktop.
