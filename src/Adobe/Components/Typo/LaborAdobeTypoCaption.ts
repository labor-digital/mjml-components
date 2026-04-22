import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-caption',
  attributes: {
    'on-background': {
      type: 'boolean',
      default: false,
    },
    'font-style': {
      type: 'enum(regular,italic)',
      default: 'italic',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: styleMapping.typographies.caption.paddingBottom,
    },
    'padding-top': {
      type: 'unit(px,%)',
    },
    'padding-left': {
      type: 'unit(px,%)',
    },
    'padding-right': {
      type: 'unit(px,%)',
    },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeTypoCaption extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontWeight: styleMapping.typographies.caption.fontWeight,
    fontSize: styleMapping.typographies.caption.fontSize,
    lineHeight: styleMapping.typographies.caption.lineHeight,
    color: styleMapping.typographies.caption.color,
    linkColor: styleMapping.typographies.caption.linkColor,
    onBackgroundColor: styleMapping.colors.white.hex,
  }

  headStyle = (breakpoint) => `
    .labor-adobe-typo-caption-link {
      text-decoration: underline !important;
      color: ${
        this.getAttribute('on-background')
          ? LaborAdobeTypoCaption.additionalAttributes.onBackgroundColor
          : LaborAdobeTypoCaption.additionalAttributes.linkColor
      } !important;
    }
    .labor-adobe-typo-caption-link:hover {
      text-decoration: none !important;
      cursor: pointer;
    }
  `

  render() {
    const attrs = {
      'font-weight': LaborAdobeTypoCaption.additionalAttributes.fontWeight,
      'font-size': LaborAdobeTypoCaption.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoCaption.additionalAttributes.lineHeight,
      'font-style': this.getAttribute('font-style'),
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoCaption.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoCaption.additionalAttributes.color,
      'padding-bottom': this.getAttribute('padding-bottom'),
      'padding-top': this.getAttribute('padding-top'),
      'padding-left': this.getAttribute('padding-left'),
      'padding-right': this.getAttribute('padding-right'),
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
