import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-adobe-typo-displaytwo'],
  'labor-adobe-typo-displaytwo': [],
})

export default class LaborAdobeTypoDisplaytwo extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'type': 'enum(normal,quiet,bold)',
    'responsive': 'boolean',
    'padding-bottom': 'unit(px,%)',
    'tone': 'enum(white, light, 300, 400, 500, 600, 700, 800, dark, black)'
  }

  static defaultAttributes = {
    'on-background': false,
    'type': 'normal',
    'responsive': false,
    'padding-bottom': '0px',
    'tone': 'black'
  }

  static fontWeights = {
    normal: 600,
    quiet: 400,
    bold: 800,
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
      @media only screen and (max-width:${breakpoint}) {
        .labor-adobe-typo-displaytwo-responsive {
          font-size: 40px !important;
          line-height: 46px !important;
        }
      }
    `

  render() {
    const attrs = {
      'font-size': '45px',
      'line-height': '50px',
      'font-weight': LaborAdobeTypoDisplaytwo.fontWeights[this.getAttribute('type')],
      'color': this.getAttribute('on-background') ? '#ffffff' : LaborAdobeTypoDisplaytwo.tones[this.getAttribute('tone')],
      'padding-bottom': this.getAttribute('padding-bottom'),
      'align': this.getAttribute('align'),
    }

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        <div ${this.htmlAttributes({
          class: this.getAttribute('responsive') ? 'labor-adobe-typo-displaytwo-responsive' : '',
        })}>${this.getContent()}</div>
      </mj-text>
    `)
  }
}
