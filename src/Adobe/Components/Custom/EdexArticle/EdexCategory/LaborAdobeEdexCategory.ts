import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import { md5 } from 'js-md5'
import AdobeRedStyleMapping from '../../../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-edex-category',
  attributes: {
    'on-background': { type: 'boolean', default: false },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.spacings.vertical.px40 },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeEdexCategory extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontWeight: AdobeRedStyleMapping.typographyFontWeight.medium,
    fontSize: AdobeRedStyleMapping.typographyFontSize.size18,
    color: AdobeRedStyleMapping.labor.colors.edexCategory.hex,
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
