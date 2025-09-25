import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import { md5 } from 'js-md5'
import AdobeRedStyleMapping from '../../../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-edex-category'],
  'labor-adobe-edex-category': [],
})

export default class LaborAdobeEdexCategory extends BodyComponent {
  static endingTag = true
  static allowedAttributes = {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': styleMapping.spacings.vertical.px40,
  }

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
