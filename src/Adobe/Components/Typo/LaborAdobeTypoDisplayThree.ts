import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-display-three',
  attributes: {
    'on-background': {
      type: 'boolean',
      default: false,
    },
    'type': {
      type: 'enum(normal,quiet)',
      default: 'normal',
    },
    'padding-top': {
      type: 'unit(px,%)',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: styleMapping.typographies.displayThree.paddingBottom,
    },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeTypoDisplayThree extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontSize: styleMapping.typographies.displayThree.fontSize,
    lineHeight: styleMapping.typographies.displayThree.lineHeight,
    fontWeight: styleMapping.typographies.displayThree.fontWeight,
    onBackgroundColor: styleMapping.colors.white.hex,
    color: styleMapping.typographies.displayThree.color,
  }

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoDisplayThree.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDisplayThree.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoDisplayThree.additionalAttributes.fontWeight[this.getAttribute('type')],
      'color': this.getAttribute('on-background')
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
