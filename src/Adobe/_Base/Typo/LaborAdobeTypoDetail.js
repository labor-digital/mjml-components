import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-adobe-typo-detail'],
  'labor-adobe-typo-detail': [],
})

export default class LaborAdobeTypoDetail extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'type': 'enum(normal,light)',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': '0px',
  }

  static fontWeights = {
    normal: 600,
    light: 400,
  }

  render() {
    const attrs = {
      'font-size': '11px',
      'line-height': '17px',
      'font-weight': LaborAdobeTypoDetail.fontWeights[this.getAttribute('type')],
      'color': this.getAttribute('on-background') ? '#ffffff' : '#505050',
      'padding-bottom': this.getAttribute('padding-bottom'),
      'align': this.getAttribute('align'),
    }

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent().toUpperCase()}
      </mj-text>
    `)
  }
}
