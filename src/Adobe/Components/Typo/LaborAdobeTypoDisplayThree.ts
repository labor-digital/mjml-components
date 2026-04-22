import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-display-three',
  attributes: {
    'on-background': { type: 'boolean', default: false },
    'type': { type: 'enum(normal,quiet)', default: 'normal' },
    'padding-top': { type: 'unit(px,%)' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.displayThree.paddingBottom },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeTypoDisplayThree extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontSize: AdobeRedStyleMapping.typographies.displayThree.fontSize,
    lineHeight: AdobeRedStyleMapping.typographies.displayThree.lineHeight,
    fontWeight: AdobeRedStyleMapping.typographies.displayThree.fontWeight,
    onBackgroundColor: AdobeRedStyleMapping.colors.white.hex,
    color: AdobeRedStyleMapping.typographies.displayThree.color,
  }

  render() {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'
    const displayType = this.getAttribute('type') || 'normal'

    const attrs = {
      'font-size': LaborAdobeTypoDisplayThree.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDisplayThree.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoDisplayThree.additionalAttributes.fontWeight[displayType],
      'color': onBackground
        ? LaborAdobeTypoDisplayThree.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoDisplayThree.additionalAttributes.color,
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
