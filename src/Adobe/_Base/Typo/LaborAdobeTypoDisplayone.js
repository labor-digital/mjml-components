import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-adobe-typo-displayone'],
  'labor-adobe-typo-displayone': [],
})

export default class LaborAdobeTypoDisplayone extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'type': 'enum(normal,quiet,bold)',
    'responsive': 'boolean',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'type': 'normal',
    'responsive': false,
    'padding-bottom': '0px',
  }

  static fontWeights = {
    normal: 600,
    quiet: 400,
    bold: 800,
  }

  headStyle = (breakpoint) => `
      @media only screen and (max-width:${breakpoint}) {
        .labor-adobe-typo-displayone-responsive {
          font-size: 45px !important;
          line-height: 50px !important;
        }
      }
    `

  render() {
    const attrs = {
      'font-size': '60px',
      'line-height': '64px',
      'font-weight': LaborAdobeTypoDisplayone.fontWeights[this.getAttribute('type')],
      'color': this.getAttribute('on-background') ? '#ffffff' : '#000000',
      'padding-bottom': this.getAttribute('padding-bottom'),
      'align': this.getAttribute('align'),
    }

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        <div ${this.htmlAttributes({
          class: this.getAttribute('responsive') ? 'labor-adobe-typo-displayone-responsive' : '',
        })}>${this.getContent()}</div>
      </mj-text>
    `)
  }
}
