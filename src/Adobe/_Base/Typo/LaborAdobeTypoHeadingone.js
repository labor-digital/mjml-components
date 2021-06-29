import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-adobe-typo-headingone'],
  'labor-adobe-typo-headingone': [],
})

export default class LaborAdobeTypoHeadingone extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'type': 'enum(normal,quiet,bold)',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'type': 'normal',
    'padding-bottom': '0px',
  }

  static fontWeights = {
    normal: 600,
    quiet: 400,
    bold: 800,
  }

  render() {
    const attrs = {
      'font-size': '36px',
      'line-height': '40px',
      'font-weight': LaborAdobeTypoHeadingone.fontWeights[this.getAttribute('type')],
      'color': this.getAttribute('on-background') ? '#ffffff' : '#000000',
      'padding-bottom': this.getAttribute('padding-bottom'),
      'align': this.getAttribute('align'),
    }

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </mj-text>
    `)
  }
}
