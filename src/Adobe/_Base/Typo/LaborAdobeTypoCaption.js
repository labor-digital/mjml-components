import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-adobe-typo-caption'],
  'labor-adobe-typo-caption': [],
})

export default class LaborAdobeTypoCaption extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
    'padding-left': 'unit(px,%)',
    'padding-right': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': '0px',
    'padding-left': '0px',
    'padding-right': '0px',
  }

  render() {
    const attrs = {
      'font-size': '14px',
      'line-height': '20px',
      'font-style': 'italic',
      'font-weight': 400,
      'color': this.getAttribute('on-background') ? '#ffffff' : '#959595',
      'padding-bottom': this.getAttribute('padding-bottom'),
      'padding-left': this.getAttribute('padding-left'),
      'padding-right': this.getAttribute('padding-right'),
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
