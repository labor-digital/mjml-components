import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-typo-detail'],
  'labor-adobe-typo-detail': [],
})

export default class LaborAdobeTypoDetail extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'type': 'enum(normal,light)',

    'padding-top': 'unit(px,%)',
    'padding-bottom': 'unit(px,%)',
  }
  static defaultAttributes = {
    'on-background': false,
    'type': 'normal',

    'padding-bottom': styleMapping.typographies.detail.paddingBottom,
  }

  static additionalAttributes = {
    fontSize: styleMapping.typographies.detail.fontSize,
    lineHeight: styleMapping.typographies.detail.lineHeight,
    color: styleMapping.typographies.detail.color,
    linkColor: styleMapping.typographies.detail.linkColor,
    onBackgroundColor: styleMapping.colors.white.hex,
  }

  headStyle = (breakpoint) => `
    .labor-adobe-typo-detail-link {
      text-decoration: underline !important;
      color: ${
        this.getAttribute('on-background')
          ? LaborAdobeTypoDetail.additionalAttributes.onBackgroundColor
          : LaborAdobeTypoDetail.additionalAttributes.linkColor
      } !important;
    }
    .labor-adobe-typo-detail-link:hover {
      text-decoration: none !important;
      cursor: pointer;
    }
  `

  render() {
    let fontWeight = styleMapping.typographies.detail.fontWeight.normal;
    let fontFamily = "'adobe-clean-display', 'adobe-clean', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'";
    switch (this.getAttribute('type')) {
      case 'light':
        fontWeight = styleMapping.typographies.detail.fontWeight.light;
        fontFamily = "'adobe-clean', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'";
        break;
    }

    const attrs = {
      'font-size': LaborAdobeTypoDetail.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDetail.additionalAttributes.lineHeight,
      'font-weight': fontWeight,
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoDetail.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoDetail.additionalAttributes.color,
      'font-family': fontFamily,
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
