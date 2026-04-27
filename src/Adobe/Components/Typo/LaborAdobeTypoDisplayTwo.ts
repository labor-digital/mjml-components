import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-typo-display-two',
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
      default: styleMapping.typographies.displayTwo.paddingBottom,
    },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

export class LaborAdobeTypoDisplayTwo extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options

  static additionalAttributes = {
    fontSize: styleMapping.typographies.displayTwo.fontSize,
    lineHeight: styleMapping.typographies.displayTwo.lineHeight,
    fontWeight: styleMapping.typographies.displayTwo.fontWeight,
    onBackgroundColor: styleMapping.colors.white.hex,
    color: styleMapping.typographies.displayTwo.color,
  }

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoDisplayTwo.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDisplayTwo.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoDisplayTwo.additionalAttributes.fontWeight[this.getAttribute('type')],
      'color': this.getAttribute('on-background')
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
