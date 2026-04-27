// Auto-discovers and requires all Labor* component files from src/, registering
// them into the mjml-core and mjml-validator registries as a side effect.
// Import this module once before using any registry (buildAttrRegistry,
// buildNestingRegistries, mjml2html, etc.).

import path from 'path'
import { globSync } from 'glob'

const libDir = path.resolve(__dirname, '..', 'lib')
for (const file of globSync('**/Labor*.js', { cwd: libDir, absolute: true })) {
  require(file)
}
