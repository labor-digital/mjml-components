import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-avatar',
  attributes: {
    'src': { type: 'string' },
    'name': { type: 'string', default: '' },
    'on-background': { type: 'boolean', default: false },
    'padding-top': { type: 'unit(px,%)' },
    'padding-bottom': { type: 'unit(px,%)' },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeAvatar extends BodyComponent {
  static endingTag = false

  render() {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'
    const src = this.getAttribute('src')
    const name = this.getAttribute('name') || ''

    const attrs = {
      'font-size': '14px',
      'line-height': '20px',
      'font-style': 'italic',
      'font-weight': 400,
      'text-padding': '0 0 0 20px',
      'color': onBackground ? AdobeRedStyleMapping.colors.white.hex : AdobeRedStyleMapping.colors.gray600.hex,
      'align': 'left',
      'src': src,
    }

    return this.renderMJML(`
      <mj-social align="left" icon-size="73px">
        <mj-social-element
          ${this.htmlAttributes(attrs)}
        >
          ${name}
        </mj-social-element>
      </mj-social>
    `)
  }
}
