import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-typo-legal',
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
      default: styleMapping.typographies.legal.paddingBottom,
    },
    'css-class': {
      type: 'string',
      default: 'labor-adobe-typo-legal',
    },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

export class LaborAdobeTypoLegal extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options

  static additionalAttributes = {
    fontWeight: styleMapping.typographies.legal.fontWeight,
    fontSize: styleMapping.typographies.legal.fontSize,
    lineHeight: styleMapping.typographies.legal.lineHeight,
    color: styleMapping.typographies.legal.color,
    onBackgroundColor: styleMapping.colors.white.hex,
  }

  headStyle = (breakpoint) => `
    .labor-adobe-typo-legal a {
      text-decoration: underline;
      color: ${LaborAdobeTypoLegal.additionalAttributes.color};
    }
    .labor-adobe-typo-legal a:hover {
      text-decoration: none !important;
      cursor: pointer;
    }
  `

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoLegal.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoLegal.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoLegal.additionalAttributes.fontWeight,
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoLegal.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoLegal.additionalAttributes.color,
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
