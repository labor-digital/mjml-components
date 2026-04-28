import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-avatar',
  attributes: {
    'src': {
      type: 'string',
    },
    'name': {
      type: 'string',
      default: '',
    },
    'on-background': {
      type: 'boolean',
      default: false,
    },
    'padding-top': {
      type: 'unit(px,%)',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
    },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

export class LaborAdobeAvatar extends BodyComponent {
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
      'alt': this.getAttribute('name'), // avatar photo of a person — their name is the appropriate alt text
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