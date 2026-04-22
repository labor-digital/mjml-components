import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-caption',
  attributes: {
    'on-background': { type: 'boolean', default: false },
    'font-style': { type: 'enum(regular,italic)', default: 'italic' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.caption.paddingBottom },
    'padding-top': { type: 'unit(px,%)' },
    'padding-left': { type: 'unit(px,%)' },
    'padding-right': { type: 'unit(px,%)' },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeTypoCaption extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontWeight: AdobeRedStyleMapping.typographies.caption.fontWeight,
    fontSize: AdobeRedStyleMapping.typographies.caption.fontSize,
    lineHeight: AdobeRedStyleMapping.typographies.caption.lineHeight,
    color: AdobeRedStyleMapping.typographies.caption.color,
    linkColor: AdobeRedStyleMapping.typographies.caption.linkColor,
    onBackgroundColor: AdobeRedStyleMapping.colors.white.hex,
  }

  headStyle = (breakpoint) => {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'
    return `
      .labor-adobe-typo-caption-link {
        text-decoration: underline !important;
        color: ${
          onBackground
            ? LaborAdobeTypoCaption.additionalAttributes.onBackgroundColor
            : LaborAdobeTypoCaption.additionalAttributes.linkColor
        } !important;
      }
      .labor-adobe-typo-caption-link:hover {
        text-decoration: none !important;
        cursor: pointer;
      }
    `
  }

  render() {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'

    const attrs = {
      'font-weight': LaborAdobeTypoCaption.additionalAttributes.fontWeight,
      'font-size': LaborAdobeTypoCaption.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoCaption.additionalAttributes.lineHeight,
      'font-style': this.getAttribute('font-style') || 'italic',
      'color': onBackground
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
