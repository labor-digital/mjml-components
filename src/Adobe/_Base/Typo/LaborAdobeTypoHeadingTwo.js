import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeComponentMapping from '../../_Styles/AdobeComponentMapping'

const mapping = AdobeComponentMapping.LaborAdobeTypoHeadingTwo;
registerDependencies(mapping.dependencies);

export default class LaborAdobeTypoHeadingTwo extends BodyComponent {

  static endingTag = mapping.endingTag;

  static allowedAttributes = mapping.allowedAttributes;
  static defaultAttributes = mapping.defaultAttributes;

  render() {
    const attrs = {
      'font-size': mapping.additionalAttributes.fontSize,
      'line-height': mapping.additionalAttributes.lineHeight,
      'font-weight': mapping.additionalAttributes.fontWeight,
      'letter-spacing': mapping.additionalAttributes.letterSpacing,
      'color': this.getAttribute('on-background') ? mapping.additionalAttributes.onBackgroundColor : mapping.additionalAttributes.color,
      'padding-bottom': this.getAttribute('padding-bottom'),
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
