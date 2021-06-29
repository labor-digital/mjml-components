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
      'color': this.getAttribute('on-background') ? '#ffffff' : '#000000',
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
