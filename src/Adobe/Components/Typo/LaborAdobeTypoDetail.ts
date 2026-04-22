import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-detail',
  attributes: {
    'on-background': { type: 'boolean', default: false },
    'type': { type: 'enum(normal,light)', default: 'normal' },
    'padding-top': { type: 'unit(px,%)' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.detail.paddingBottom },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeTypoDetail extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    fontSize: AdobeRedStyleMapping.typographies.detail.fontSize,
    lineHeight: AdobeRedStyleMapping.typographies.detail.lineHeight,
    color: AdobeRedStyleMapping.typographies.detail.color,
    linkColor: AdobeRedStyleMapping.typographies.detail.linkColor,
    onBackgroundColor: AdobeRedStyleMapping.colors.white.hex,
  }

  headStyle = (breakpoint) => {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'
    return `
      .labor-adobe-typo-detail-link {
        text-decoration: underline !important;
        color: ${
          onBackground
            ? LaborAdobeTypoDetail.additionalAttributes.onBackgroundColor
            : LaborAdobeTypoDetail.additionalAttributes.linkColor
        } !important;
      }
      .labor-adobe-typo-detail-link:hover {
        text-decoration: none !important;
        cursor: pointer;
      }
    `
  }

  render() {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'
    const detailType = this.getAttribute('type') || 'normal'

    const fontWeight = detailType === 'light'
      ? AdobeRedStyleMapping.typographies.detail.fontWeight.light
      : AdobeRedStyleMapping.typographies.detail.fontWeight.normal
    const fontFamily = detailType === 'light'
      ? "'adobe-clean', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
      : "'adobe-clean-display', 'adobe-clean', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"

    const attrs = {
      'font-size': LaborAdobeTypoDetail.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDetail.additionalAttributes.lineHeight,
      'font-weight': fontWeight,
      'color': onBackground
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
