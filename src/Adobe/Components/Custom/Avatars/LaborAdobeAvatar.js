import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'
const styleMapping = AdobeRedStyleMapping


registerDependencies({
  'labor-adobe-avatar': [],
  'mj-column': ['labor-adobe-avatar'],
})

export default class LaborAdobeAvatar extends BodyComponent {
  static endingTag = false

  static allowedAttributes = {
    'src': 'string',
    'name': 'string',
    'on-background': 'boolean',

    'padding-top': 'unit(px,%)',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'name': '',
    'on-background': false,
  }

  render() {
    const attrs = {
      'font-size': '14px',
      'line-height': '20px',
      'font-style': 'italic',
      'font-weight': 400,
      'text-padding': '0 0 0 20px',
      'color': this.getAttribute('on-background') ? styleMapping.colors.white.hex : styleMapping.colors.gray600.hex,
      'align': 'left',
      'src': this.getAttribute('src'),
    }

    return this.renderMJML(`
      <mj-social align="left" icon-size="73px">
        <mj-social-element 
            ${this.htmlAttributes(attrs)}
        >
          ${this.getAttribute('name')}
        </mj-social-element>
      </mj-social>
    `)
  }
}