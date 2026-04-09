import fs from 'fs'
import path from 'path'
import { registerComponent } from 'mjml-core'
import mjml2html from 'mjml'
import { globSync } from 'glob'

const libDir = path.resolve(__dirname, '..', 'lib')
const srcDir = path.resolve(__dirname, '..', 'src')
const previewsDir = path.resolve(__dirname, '..', 'previews')

const filesToIgnore = [
  'AdobeProductLockupMapping.js',
  'AdobeProductLogoMapping.js',
  'index.js',
  'code-example.js',
  'AdobeRedStyleMapping.js',
  'AdobeComponentMapping.js',
]

const fileTypesToIgnore = ['.style.js']

function filterNonComponent(file: string): boolean {
  const basename = path.basename(file)
  if (filesToIgnore.includes(basename)) return false
  const ext = basename.substring(basename.indexOf('.'))
  if (fileTypesToIgnore.includes(ext)) return false
  return true
}

// 1. Register all compiled components
const jsFiles = globSync('**/*.js', { cwd: libDir })
for (const file of jsFiles) {
  const fullPath = path.join(libDir, file)
  if (filterNonComponent(file)) {
    try {
      const mod = require(fullPath)
      const component = mod.default || mod
      if (component && typeof component === 'function') {
        registerComponent(component)
        console.log(`Registered: ${file}`)
      }
    } catch (e: any) {
      console.log(`Error registering ${file}: ${e.message}`)
    }
  }
}

// 2. Find all .mjml files
const mjmlFiles = [
  ...globSync('index.mjml', { cwd: srcDir }),
  ...globSync('Adobe/**/*.mjml', { cwd: srcDir }),
]

// 3. Compile each .mjml to HTML
if (fs.existsSync(previewsDir)) {
  fs.rmSync(previewsDir, { recursive: true, force: true })
}
fs.mkdirSync(previewsDir)

let hasErrors = false

for (const file of mjmlFiles) {
  const fullPath = path.join(srcDir, file)
  const data = fs.readFileSync(fullPath, 'utf8')
  const parsed = path.parse(file)
  const result = mjml2html(data)

  if (result.errors && result.errors.length) {
    console.error(`\n${result.errors.length} error(s) in ${file}:`)
    for (const err of result.errors) {
      console.error(`  - ${(err as any).formattedMessage || (err as any).message || JSON.stringify(err)}`)
    }
    hasErrors = true
  } else {
    const outPath = path.join(previewsDir, parsed.name + '.html')
    fs.writeFileSync(outPath, result.html)
    console.log(`Compiled: ${file} -> ${parsed.name}.html`)
  }
}

if (hasErrors) {
  console.error('\nPreview compilation finished with errors.')
  process.exit(1)
} else {
  console.log('\nAll previews compiled successfully.')
}
