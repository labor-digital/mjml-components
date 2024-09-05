import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeComponentMapping from '../../_Styles/AdobeComponentMapping'

const mapping = AdobeComponentMapping.LaborAdobeTypoDetail;
registerDependencies(mapping.dependencies);

export default class LaborAdobeTypoDetail extends BodyComponent {

  static endingTag = mapping.endingTag;

  static allowedAttributes = mapping.allowedAttributes;
  static defaultAttributes = mapping.defaultAttributes;

  headStyle = (breakpoint) => `
    .labor-adobe-typo-detail-link {
        text-decoration: underline !important;
        color: ${this.getAttribute('on-background') ? mapping.additionalAttributes.onBackgroundColor : mapping.additionalAttributes.linkColor } !important;
    }
    .labor-adobe-typo-detail-link:hover {
        text-decoration: none !important;
        cursor: pointer;
    }
  `

  render() {
    const attrs = {
      'font-size': mapping.additionalAttributes.fontSize,
      'line-height': mapping.additionalAttributes.lineHeight,
      'font-weight':  mapping.additionalAttributes.fontWeight,
      'color': this.getAttribute('on-background') ? mapping.additionalAttributes.onBackgroundColor : mapping.additionalAttributes.color,
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
