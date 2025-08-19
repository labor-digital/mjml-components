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
    'padding-bottom': 'unit(px,%)',
    'type': 'enum(normal,light)',
  }
  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': styleMapping.spacings.vertical.px0,
    'type': 'normal',
  }

  static additionalAttributes = {
    lineHeight: styleMapping.typographies.detail.lineHeight,
    color: styleMapping.typographies.detail.color,
    linkColor: styleMapping.typographies.detail.linkColor,
    onBackgroundColor: styleMapping.colors.white.hex,
  }

  fontWeight = 'a'

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
    let fontWeight
    switch (this.getAttribute('type')) {
      case 'light':
        fontWeight = styleMapping.typographies.detail.fontWeight.light
        break
      case 'normal':
        fontWeight = styleMapping.typographies.detail.fontWeight.normal
        break
      default:
        fontWeight = styleMapping.typographies.detail.fontWeight.normal
    }

    const attrs = {
      'font-size': LaborAdobeTypoDetail.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDetail.additionalAttributes.lineHeight,
      'font-weight': fontWeight,
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoDetail.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoDetail.additionalAttributes.color,
      'padding-bottom': this.getAttribute('padding-bottom'),
    }

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent().toUpperCase()}
      </mj-text>
    `)
  }
}
