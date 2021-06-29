import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-adobe-typo-headingthree'],
  'labor-adobe-typo-headingthree': [],
})

export default class LaborAdobeTypoHeadingthree extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': '0px',
  }

  render() {
    const attrs = {
      'font-size': '22px',
      'line-height': '29px',
      'font-weight': 600,
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
