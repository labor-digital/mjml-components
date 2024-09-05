import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import { md5 } from 'js-md5'
import AdobeComponentMapping from '../../_Styles/AdobeComponentMapping'

const mapping = AdobeComponentMapping.LaborAdobeTypoBody;
registerDependencies(mapping.dependencies);

export default class LaborAdobeTypoBody extends BodyComponent {

  static endingTag = mapping.endingTag;

  static allowedAttributes = mapping.allowedAttributes;
  static defaultAttributes = mapping.defaultAttributes;

  constructor(initialDatas = {}) {
    super(initialDatas)
    this.setCustomStyles = false
    if(!this.attributes['css-class']) {
      this.setCustomStyles = true
      this.attributes['css-class'] = "labor-adobe-typo-body-" + md5(this.getContent())
    }
  }

  componentHeadStyle = (breakpoint) => this.setCustomStyles ? `
    .${this.attributes['css-class']} .labor-adobe-typo-body-ul {
      padding-left: 20px;
      margin-top: 0;
      margin-bottom: 0;
    }
    .${this.attributes['css-class']} .labor-adobe-typo-body-link {
        text-decoration: underline !important;
        color: ${this.getAttribute('on-background') ? mapping.additionalAttributes.onBackgroundColor : mapping.additionalAttributes.tone} !important;
    }
    .${this.attributes['css-class']} .labor-adobe-typo-body-link-blue {
        text-decoration: none !important;
        color: ${this.getAttribute('on-background') ? mapping.additionalAttributes.onBackgroundColor : mapping.additionalAttributes.linkColor} !important;
    }
    .${this.attributes['css-class']} .labor-adobe-typo-body-link:hover {
        text-decoration: none !important;
        cursor: pointer;
    }
    .${this.attributes['css-class']} .labor-adobe-typo-body-link-blue:hover {
        text-decoration: underline !important;
        cursor: pointer;
    }
  ` : ``

  render() {
    const attrs = {
      'font-size': mapping.additionalAttributes.fontSize,
      'line-height': mapping.additionalAttributes.lineHeight,
      'font-weight': mapping.additionalAttributes.fontWeight,
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
