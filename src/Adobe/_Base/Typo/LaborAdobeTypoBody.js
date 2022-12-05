import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-adobe-typo-body'],
  'labor-adobe-typo-body': [],
})

export default class LaborAdobeTypoBody extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
    'tone': 'enum(white, light, 300, 400, 500, 600, 700, 800, dark, black)'
  }

  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': '0px',
    'tone': '800'
  }

  static tones = {
    'white': '#FFFFFF',
    'light': '#F5F5F5',
    '300': '#EAEAEA',
    '400': '#D3D3D3',
    '500': '#BCBCBC',
    '600': '#959595',
    '700': '#747474',
    '800': '#505050',
    'dark': '#2C2C2C',
    'black': '#000000'
  }

  headStyle = (breakpoint) => `
    .labor-adobe-typo-body-ul {
      padding-left: 20px;
      margin-top: 0;
      margin-bottom: 0;
    }
    .labor-adobe-typo-body-link {
        text-decoration: underline !important;
        color: ${this.getAttribute('on-background') ? '#ffffff' : LaborAdobeTypoBody.tones[this.getAttribute('tone')]} !important;
    }
    .labor-adobe-typo-body-link-blue {
        text-decoration: none !important;
        color: ${this.getAttribute('on-background') ? '#ffffff' : '#1473E6'} !important;
    }
    .labor-adobe-typo-body-link:hover {
        text-decoration: none !important;
        cursor: pointer;
    }
    .labor-adobe-typo-body-link-blue:hover {
        text-decoration: underline !important;
        cursor: pointer;
    }
  `

  render() {
    const attrs = {
      'font-size': '18px',
      'line-height': '26px',
      'font-weight': 400,
      'color': this.getAttribute('on-background') ? '#ffffff' : LaborAdobeTypoBody.tones[this.getAttribute('tone')],
      'padding-bottom': this.getAttribute('padding-bottom'),
      'align': this.getAttribute('align'),
    }
    if (this.getAttribute('color')) attrs['color'] = this.getAttribute('color')

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </mj-text>
    `)
  }
}
