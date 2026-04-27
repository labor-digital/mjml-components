import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import { md5 } from 'js-md5'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-typo-body',
  attributes: {
    'on-background': {
      type: 'boolean',
      default: false,
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: styleMapping.typographies.body.paddingBottom,
    },
    'padding-top': {
      type: 'unit(px,%)',
    },
  },
  allowedParentTags: ['mj-column', 'labor-adobe-actioncard'],
  allowedChildTags: [],
})

export class LaborAdobeTypoBody extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options

  static additionalAttributes = {
    fontWeight: styleMapping.typographies.body.fontWeight,
    fontSize: styleMapping.typographies.body.fontSize,
    lineHeight: styleMapping.typographies.body.lineHeight,
    color: styleMapping.colors.body.hex,
    linkColor: styleMapping.typographies.body.linkColor,
    linkColorBlue: styleMapping.typographies.body.linkColor,
    onBackgroundColor: styleMapping.colors.white.hex,
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

  componentHeadStyle = (breakpoint) =>
    this.setCustomStyles
      ? `
    .${this.attributes['css-class']} .labor-adobe-typo-body-ul {
      padding-left: 20px;
      margin-top: 0;
      margin-bottom: 0;
    }
    .${this.attributes['css-class']} a {
      text-decoration: ${
        this.getAttribute('on-background')
          ? 'underline'
          : 'none'
      } !important;
      color: ${
        this.getAttribute('on-background')
          ? LaborAdobeTypoBody.additionalAttributes.onBackgroundColor
          : LaborAdobeTypoBody.additionalAttributes.linkColor
      } !important;
    }
    .${this.attributes['css-class']} a:hover {
      text-decoration: ${
        this.getAttribute('on-background')
          ? 'none'
          : 'underline'
      } !important;
      cursor: pointer;
    }
    .${this.attributes['css-class']} .labor-adobe-typo-body-link-alt {
      text-decoration: underline !important;
      color: ${
        this.getAttribute('on-background')
          ? LaborAdobeTypoBody.additionalAttributes.onBackgroundColor
          : LaborAdobeTypoBody.additionalAttributes.color
      } !important;
    }
    .${this.attributes['css-class']} .labor-adobe-typo-body-link-alt:hover {
      text-decoration: none !important;
      cursor: pointer;
    }    
  `
      : ``

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoBody.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoBody.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoBody.additionalAttributes.fontWeight,
      'color': this.getAttribute('on-background')
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
