import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-adobe-typo-displaythree'],
  'labor-adobe-typo-displaythree': [],
})

export default class LaborAdobeTypoDisplaythree extends BodyComponent {
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
    quiet_small: 400,
    bold: 800,
    black: 900,
  }

  render() {
    const attrs = {
      'font-size':
        this.getAttribute('type') && this.getAttribute('type') == 'quiet_small' ? '38px' : '40px',
      'line-height': '46px',
      'font-weight': LaborAdobeTypoDisplaythree.fontWeights[this.getAttribute('type')],
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
