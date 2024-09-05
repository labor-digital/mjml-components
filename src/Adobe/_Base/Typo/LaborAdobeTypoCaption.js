import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeComponentMapping from '../../_Styles/AdobeComponentMapping'

const mapping = AdobeComponentMapping.LaborAdobeTypoCaption;
registerDependencies(mapping.dependencies);

export default class LaborAdobeTypoCaption extends BodyComponent {

  static endingTag = mapping.endingTag;

  static allowedAttributes = mapping.allowedAttributes;
  static defaultAttributes = mapping.defaultAttributes;

  headStyle = (breakpoint) => `
    .labor-adobe-typo-caption-link {
        text-decoration: underline !important;
        color: ${this.getAttribute('on-background') ? mapping.additionalAttributes.onBackgroundColor : mapping.additionalAttributes.linkColor} !important;
    }
    .labor-adobe-typo-caption-link:hover {
        text-decoration: none !important;
        cursor: pointer;
    }
  `

  render() {
    const attrs = {
      'font-weight': mapping.additionalAttributes.fontWeight,
      'font-size': mapping.additionalAttributes.fontSize,
      'line-height': mapping.additionalAttributes.lineHeight,
      'font-style': mapping.additionalAttributes.fontStyle,
      'color': this.getAttribute('on-background') ? mapping.additionalAttributes.onBackgroundColor : mapping.additionalAttributes.color,
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
