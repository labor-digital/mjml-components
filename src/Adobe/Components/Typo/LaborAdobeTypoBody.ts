import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import { md5 } from 'js-md5'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-body',
  attributes: {
    'on-background': { type: 'boolean', default: false },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.body.paddingBottom },
    'padding-top': { type: 'unit(px,%)' },
  },
  allowedParentTags: ['mj-column', 'labor-adobe-actioncard'],
  allowedChildTags: [],
})

class LaborAdobeTypoBody extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontWeight: AdobeRedStyleMapping.typographies.body.fontWeight,
    fontSize: AdobeRedStyleMapping.typographies.body.fontSize,
    lineHeight: AdobeRedStyleMapping.typographies.body.lineHeight,
    color: AdobeRedStyleMapping.colors.body.hex,
    linkColor: AdobeRedStyleMapping.typographies.body.linkColor,
    linkColorBlue: AdobeRedStyleMapping.typographies.body.linkColor,
    onBackgroundColor: AdobeRedStyleMapping.colors.white.hex,
  }

  constructor(initialDatas = {}) {
    super(initialDatas)
    this.setCustomStyles = false
    if (!this.attributes['css-class']) {
      this.setCustomStyles = true
      const cssClass = 'labor-adobe-typo-body-' + md5(this.getContent())
      this.attributes['css-class'] = cssClass
    }
  }

  componentHeadStyle = (breakpoint) => {
    if (!this.setCustomStyles) return ''
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'
    return `
      .${this.attributes['css-class']} .labor-adobe-typo-body-ul {
        padding-left: 20px;
        margin-top: 0;
        margin-bottom: 0;
      }
      .${this.attributes['css-class']} a {
        text-decoration: ${onBackground ? 'underline' : 'none'} !important;
        color: ${
          onBackground
            ? LaborAdobeTypoBody.additionalAttributes.onBackgroundColor
            : LaborAdobeTypoBody.additionalAttributes.linkColor
        } !important;
      }
      .${this.attributes['css-class']} a:hover {
        text-decoration: ${onBackground ? 'none' : 'underline'} !important;
        cursor: pointer;
      }
      .${this.attributes['css-class']} .labor-adobe-typo-body-link-alt {
        text-decoration: underline !important;
        color: ${
          onBackground
            ? LaborAdobeTypoBody.additionalAttributes.onBackgroundColor
            : LaborAdobeTypoBody.additionalAttributes.color
        } !important;
      }
      .${this.attributes['css-class']} .labor-adobe-typo-body-link-alt:hover {
        text-decoration: none !important;
        cursor: pointer;
      }
    `
  }

  render() {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'

    const attrs = {
      'font-size': LaborAdobeTypoBody.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoBody.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoBody.additionalAttributes.fontWeight,
      'color': onBackground
        ? LaborAdobeTypoBody.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoBody.additionalAttributes.color,
      'padding-bottom': this.getAttribute('padding-bottom'),
      'padding-top': this.getAttribute('padding-top'),
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
