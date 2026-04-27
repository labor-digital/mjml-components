import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-typo-detail',
  attributes: {
    'on-background': {
      type: 'boolean',
      default: false,
    },
    'type': {
      type: 'enum(normal,light)',
      default: 'normal',
    },
    'padding-top': {
      type: 'unit(px,%)',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: styleMapping.typographies.detail.paddingBottom,
    },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

export class LaborAdobeTypoDetail extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options

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
