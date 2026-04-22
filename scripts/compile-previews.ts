import fs from 'fs'
import path from 'path'
import mjml2html from 'mjml'
import { globSync } from 'glob'
import { buildAttrRegistry, validateAllAttributes } from './custom-validator'

// Adobe Components - Sections
import '../src/Adobe/Components/Sections/LaborAdobeSection'


// Adobe Components - Action Cards
import '../src/Adobe/Components/ActionCards/LaborAdobeActionCard'

// Adobe Components - CTA
import '../src/Adobe/Components/CTA/LaborAdobeButton'
import '../src/Adobe/Components/CTA/LaborAdobeLink'

// Adobe Components - Custom - Avatars
import '../src/Adobe/Components/Custom/Avatars/LaborAdobeAvatar'

// Adobe Components - Custom - EdexArticle
import '../lib/Adobe/Components/Custom/EdexArticle/EdexCategory/LaborAdobeEdexCategory'
import '../lib/Adobe/Components/Custom/EdexArticle/LaborAdobeEdexArticle'

// Adobe Components - Custom - FooterBands
import '../src/Adobe/Components/Custom/FooterBands/LaborAdobeFooterBand'
import '../src/Adobe/Components/Custom/FooterBands/LaborAdobeFooterImageBand'

// Adobe Components - Custom - TwoColImgTextSection
import '../src/Adobe/Components/Custom/TwoColImgTextSection/LaborAdobeTwoColImgTextSection'

// Adobe Components - Footers
import '../src/Adobe/Components/Footers/LaborAdobeFooter'

// Adobe Components - Headers
import '../src/Adobe/Components/Headers/LaborAdobeHeader'

// Adobe Components - HeroCards
import '../src/Adobe/Components/HeroCards/LaborAdobeHeroCardImmersiveOne'
import '../src/Adobe/Components/HeroCards/LaborAdobeHeroCardImmersiveThree'
import '../src/Adobe/Components/HeroCards/LaborAdobeHeroCardImmersiveTwo'
import '../src/Adobe/Components/HeroCards/LaborAdobeHeroCardSimpleOne'
import '../src/Adobe/Components/HeroCards/LaborAdobeHeroCardSimpleTwo'
import '../src/Adobe/Components/HeroCards/LaborAdobeHeroCardSplitOne'
import '../src/Adobe/Components/HeroCards/LaborAdobeHeroCardSplitTwo'

// Adobe Components - Pods
import '../src/Adobe/Components/Pods/LaborAdobePod'
import '../src/Adobe/Components/Pods/LaborAdobePodApplication'
import '../src/Adobe/Components/Pods/LaborAdobePodNoImage'
import '../src/Adobe/Components/Pods/LaborAdobePodStandard'
import '../src/Adobe/Components/Pods/LaborAdobePodStandardFullWidth'
import '../src/Adobe/Components/Pods/LaborAdobePodZFormation'

// Adobe Components - Product Logos
import '../src/Adobe/Components/ProductLogos/LaborAdobeProductLogo'


// Adobe Components - Typo
import '../src/Adobe/Components/Typo/LaborAdobeTypoBody'
import '../src/Adobe/Components/Typo/LaborAdobeTypoCaption'
import '../src/Adobe/Components/Typo/LaborAdobeTypoDetail'
import '../src/Adobe/Components/Typo/LaborAdobeTypoDisplayOne'
import '../src/Adobe/Components/Typo/LaborAdobeTypoDisplayThree'
import '../src/Adobe/Components/Typo/LaborAdobeTypoDisplayTwo'
import '../src/Adobe/Components/Typo/LaborAdobeTypoHeadingFour'
import '../src/Adobe/Components/Typo/LaborAdobeTypoHeadingOne'
import '../src/Adobe/Components/Typo/LaborAdobeTypoHeadingThree'
import '../src/Adobe/Components/Typo/LaborAdobeTypoHeadingTwo'
import '../lib/Adobe/Components/Typo/LaborAdobeTypoLegal'

// Labor Components
import '../src/Labor/LaborBgWrapper'
import '../src/Labor/LaborResponsiveImage'
import '../src/Labor/LaborRoundedButton'

const attrRegistry = buildAttrRegistry()

const srcDir = path.resolve(__dirname, '..', 'src')
const previewsDir = path.resolve(__dirname, '..', 'previews')

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

  const attrErrors = validateAllAttributes(data, attrRegistry)
  if (attrErrors.length) {
    console.error(`\n${attrErrors.length} attribute error(s) in ${file}:`)
    for (const err of attrErrors) console.error(`  - ${err}`)
    hasErrors = true
    continue
  }

  const result = mjml2html(data, {validationLevel: 'strict'})

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
