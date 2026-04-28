import fs from 'fs'
import path from 'path'
import mjml2html from 'mjml'
import { globSync } from 'glob'
import './register-components'

const isValidation = process.argv.includes('--validation')

const rootDir = path.resolve(__dirname, '..')
const srcDir = path.resolve(rootDir, 'src')
const outputDir = path.resolve(rootDir, isValidation ? 'validation-errors' : 'previews')

const mjmlFiles = isValidation
  ? globSync('Adobe/**/*--validation.mjml', { cwd: srcDir })
  : [
      ...globSync('index.mjml', { cwd: srcDir }),
      ...globSync('Adobe/**/*.mjml', { cwd: srcDir }).filter(f => !f.includes('--validation')),
    ]

if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true })
}
fs.mkdirSync(outputDir)

type ErrorEntry = { tagName: string; message: string }
type FileReport = { file: string; errors: ErrorEntry[] }

const report: FileReport[] = []
let totalErrors = 0

for (const file of mjmlFiles) {
  const fullPath = path.join(srcDir, file)
  const data = fs.readFileSync(fullPath, 'utf8')
  const parsed = path.parse(file)
  const errors: ErrorEntry[] = []

  if (isValidation) {
    // Use soft validation to collect all errors without throwing
    const result = mjml2html(data, { validationLevel: 'soft' })
    for (const err of result.errors ?? [])
      errors.push({ tagName: (err as any).tagName ?? '', message: (err as any).message ?? JSON.stringify(err) })

    const outPath = path.join(outputDir, parsed.name + '.json')
    fs.writeFileSync(outPath, JSON.stringify(errors, null, 2))

    if (errors.length) {
      console.log(`Validated: ${file} -> ${parsed.name}.json (${errors.length} error(s))`)
    } else {
      console.warn(`Warning: ${file} produced no errors — validation files should always contain errors`)
    }

    totalErrors += errors.length
  } else {
    try {
      const result = mjml2html(data, { validationLevel: 'strict' })
      for (const err of result.errors ?? [])
        errors.push({ tagName: (err as any).tagName ?? '', message: (err as any).formattedMessage || (err as any).message || JSON.stringify(err) })

      if (!errors.length) {
        const outPath = path.join(outputDir, parsed.name + '.html')
        fs.writeFileSync(outPath, result.html)
        console.log(`Compiled: ${file} -> ${parsed.name}.html`)
      }
    } catch (e: any) {
      errors.push({ tagName: '', message: e.message || String(e) })
    }

    if (errors.length) {
      console.error(`\n${errors.length} error(s) in ${file}:`)
      for (const { message } of errors) console.error(`  - ${message}`)
      report.push({ file, errors })
      totalErrors += errors.length
    }
  }
}

if (!isValidation) {
  fs.writeFileSync(
    path.join(rootDir, 'errors.json'),
    JSON.stringify({ totalErrors, files: report }, null, 2),
  )
}

if (!isValidation && totalErrors) {
  console.error(`\nPreview compilation finished with ${totalErrors} error(s). See errors.json for details.`)
  process.exit(1)
} else if (isValidation) {
  console.log(`\nValidation compilation finished. ${totalErrors} error(s) across ${mjmlFiles.length} file(s).`)
} else {
  console.log('\nAll previews compiled successfully.')
}
