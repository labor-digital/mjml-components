import fs from 'fs'
import path from 'path'
import { components } from 'mjml-core'

// Import all components to populate the mjml-core registry before we read it.
// Must stay in sync with compile-previews.ts.

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

// ---------------------------------------------------------------------------

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8'),
)

type WebTypesAttribute = {
  name: string
  description?: string
  value?: { kind: 'plain'; type?: string }
}

type WebTypesElement = {
  name: string
  attributes: WebTypesAttribute[]
}

function buildAttribute(name: string, type: string, defaultValue: unknown): WebTypesAttribute {
  const descParts: string[] = [type]
  if (defaultValue !== undefined) descParts.push(`default: ${JSON.stringify(defaultValue)}`)

  const attr: WebTypesAttribute = {
    name,
    description: descParts.join(' — '),
  }

  // Boolean attributes always take "true" or "false" as their value in MJML
  if (type === 'boolean') {
    attr.value = { kind: 'plain', type: 'boolean' }
  } else {
    attr.value = { kind: 'plain' }
  }

  return attr
}

function buildElements(): WebTypesElement[] {
  const elements: WebTypesElement[] = []

  for (const [tagName, Cls] of Object.entries(components as Record<string, any>)) {
    if (!tagName.startsWith('labor-')) continue

    const allowed: Record<string, string> = (Cls as any).allowedAttributes ?? {}
    const defaults: Record<string, unknown> = (Cls as any).defaultAttributes ?? {}

    const attributes = Object.entries(allowed).map(([name, type]) =>
      buildAttribute(name, type, defaults[name]),
    )

    elements.push({ name: tagName, attributes })
  }

  return elements.sort((a, b) => a.name.localeCompare(b.name))
}

const webTypes = {
  $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
  name: pkg.name,
  version: pkg.version,
  contributions: {
    html: {
      elements: buildElements(),
    },
  },
}

const outPath = path.resolve(__dirname, '..', 'web-types.json')
fs.writeFileSync(outPath, JSON.stringify(webTypes, null, 2) + '\n')
console.log(`Generated web-types.json with ${webTypes.contributions.html.elements.length} components.`)
