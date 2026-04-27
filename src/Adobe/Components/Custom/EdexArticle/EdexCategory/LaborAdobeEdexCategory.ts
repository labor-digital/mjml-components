import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import { md5 } from 'js-md5'
import AdobeRedStyleMapping from '../../../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-edex-category',
  attributes: {
    'on-background': {
      type: 'boolean',
      default: false,
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: styleMapping.spacings.vertical.px40,
    },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

export class LaborAdobeEdexCategory extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options

  static additionalAttributes = {
    fontWeight: styleMapping.typographyFontWeight.medium,
    fontSize: styleMapping.typographyFontSize.size18,
    color: styleMapping.labor.colors.edexCategory.hex,
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

  render() {
    const attrs = {
      'font-size': LaborAdobeEdexCategory.additionalAttributes.fontSize,
      'font-weight': LaborAdobeEdexCategory.additionalAttributes.fontWeight,
      'color': LaborAdobeEdexCategory.additionalAttributes.color,
      'padding-bottom': this.getAttribute('padding-bottom'),
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
