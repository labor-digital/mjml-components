import fs from 'fs'
import path from 'path'
import mjml2html from 'mjml'
import { globSync } from 'glob'
import './register-components'

const rootDir = path.resolve(__dirname, '..')
const srcDir = path.resolve(rootDir, 'src')
const previewsDir = path.resolve(rootDir, 'previews')

const mjmlFiles = [
  ...globSync('index.mjml', { cwd: srcDir }),
  ...globSync('Adobe/**/*.mjml', { cwd: srcDir }),
]

if (fs.existsSync(previewsDir)) {
  fs.rmSync(previewsDir, { recursive: true, force: true })
}
fs.mkdirSync(previewsDir)

type ErrorEntry = { type: 'mjml'; message: string }
type FileReport = { file: string; errors: ErrorEntry[] }

const report: FileReport[] = []
let totalErrors = 0

for (const file of mjmlFiles) {
  const fullPath = path.join(srcDir, file)
  const data = fs.readFileSync(fullPath, 'utf8')
  const parsed = path.parse(file)
  const errors: ErrorEntry[] = []

  try {
    const result = mjml2html(data, { validationLevel: 'strict' })
    for (const err of result.errors ?? [])
      errors.push({ type: 'mjml', message: (err as any).formattedMessage || (err as any).message || JSON.stringify(err) })

    if (!errors.length) {
      const outPath = path.join(previewsDir, parsed.name + '.html')
      fs.writeFileSync(outPath, result.html)
      console.log(`Compiled: ${file} -> ${parsed.name}.html`)
    }
  } catch (e: any) {
    errors.push({ type: 'mjml', message: e.message || String(e) })
  }

  if (errors.length) {
    console.error(`\n${errors.length} error(s) in ${file}:`)
    for (const { message } of errors) console.error(`  - ${message}`)
    report.push({ file, errors })
    totalErrors += errors.length
  }
}

fs.writeFileSync(
  path.join(rootDir, 'errors.json'),
  JSON.stringify({ totalErrors, files: report }, null, 2),
)

if (totalErrors) {
  console.error(`\nPreview compilation finished with ${totalErrors} error(s). See errors.json for details.`)
  process.exit(1)
} else {
  console.log('\nAll previews compiled successfully.')
}
