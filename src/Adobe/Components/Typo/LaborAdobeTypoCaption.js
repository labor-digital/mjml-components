import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-typo-caption'],
  'labor-adobe-typo-caption': [],
})

export default class LaborAdobeTypoCaption extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
    'padding-left': 'unit(px,%)',
    'padding-right': 'unit(px,%)',
    'font-style': 'enum(regular,italic)',
  }

  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': styleMapping.spacings.vertical.px0,
    'padding-left': styleMapping.spacings.horizontal.px0,
    'padding-right': styleMapping.spacings.horizontal.px0,
    'font-style': 'italic',
  }

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
