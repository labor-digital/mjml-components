import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-gwa-typo-legal'],
  'labor-gwa-typo-legal': [],
})

export default class LaborGwaTypoLegal extends BodyComponent {
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
      'font-size': '11px',
      'line-height': '18px',
      'font-weight': 400,
      'color': this.getAttribute('on-background') ? '#ffffff' : '#959595',
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
