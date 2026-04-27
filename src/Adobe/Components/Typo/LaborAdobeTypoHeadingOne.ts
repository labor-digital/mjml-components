import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-typo-heading-one',
  attributes: {
    'on-background': {
      type: 'boolean',
      default: false,
    },
    'padding-top': {
      type: 'unit(px,%)',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: styleMapping.typographies.headingOne.paddingBottom,
    },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

export class LaborAdobeTypoHeadingOne extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options

  static additionalAttributes = {
    fontSize: styleMapping.typographies.headingOne.fontSize,
    lineHeight: styleMapping.typographies.headingOne.lineHeight,
    fontWeight: styleMapping.typographies.headingOne.fontWeight,
    color: styleMapping.typographies.headingOne.color,
    onBackgroundColor: styleMapping.colors.white.hex,
  }

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoHeadingOne.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoHeadingOne.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoHeadingOne.additionalAttributes.fontWeight,
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoHeadingOne.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoHeadingOne.additionalAttributes.color,
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
