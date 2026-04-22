import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-display-two',
  attributes: {
    'on-background': { type: 'boolean', default: false },
    'type': { type: 'enum(normal,quiet)', default: 'normal' },
    'padding-top': { type: 'unit(px,%)' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.displayTwo.paddingBottom },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeTypoDisplayTwo extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontSize: AdobeRedStyleMapping.typographies.displayTwo.fontSize,
    lineHeight: AdobeRedStyleMapping.typographies.displayTwo.lineHeight,
    fontWeight: AdobeRedStyleMapping.typographies.displayTwo.fontWeight,
    onBackgroundColor: AdobeRedStyleMapping.colors.white.hex,
    color: AdobeRedStyleMapping.typographies.displayTwo.color,
  }

  render() {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'
    const displayType = this.getAttribute('type') || 'normal'

    const attrs = {
      'font-size': LaborAdobeTypoDisplayTwo.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDisplayTwo.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoDisplayTwo.additionalAttributes.fontWeight[displayType],
      'color': onBackground
        ? LaborAdobeTypoDisplayTwo.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoDisplayTwo.additionalAttributes.color,
      'font-family': "'adobe-clean-display', 'adobe-clean', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
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
