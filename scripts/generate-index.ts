import fs from 'fs'
import path from 'path'
import { globSync } from 'glob'

const srcDir = path.resolve(__dirname, '..', 'src')
const indexPath = path.join(srcDir, 'index.ts')

const lines = globSync('**/Labor*.ts', { cwd: srcDir })
  .sort()
  .map(file => {
    const source = fs.readFileSync(path.join(srcDir, file), 'utf8')
    const match = source.match(/^export class (Labor\w+)/m)
    if (!match) return null
    const rel = './' + file.replace(/\.ts$/, '').replace(/\\/g, '/')
    return `export { ${match[1]} } from '${rel}'`
  })
  .filter(Boolean)

fs.writeFileSync(indexPath, lines.join('\n') + '\n')
console.log(`Generated src/index.ts (${lines.length} exports)`)
