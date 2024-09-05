import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeComponentMapping from '../../_Styles/AdobeComponentMapping'

const mapping = AdobeComponentMapping.LaborAdobeTypoDisplayOne;
registerDependencies(mapping.dependencies);

export default class LaborAdobeTypoDisplayOne extends BodyComponent {

  static endingTag = mapping.endingTag;

  static allowedAttributes = mapping.allowedAttributes;
  static defaultAttributes = mapping.defaultAttributes;

  headStyle = (breakpoint) => `
      @media only screen and (max-width:${breakpoint}) {
        .labor-adobe-typo-display-one-responsive {
          font-size: 45px !important;
          line-height: 50px !important;
        }
      }
    `

  render() {
    const attrs = {
      'font-size': mapping.additionalAttributes.fontSize,
      'line-height': mapping.additionalAttributes.lineHeight,
      'font-weight': mapping.additionalAttributes.fontWeight[this.getAttribute('type')],
      'letter-spacing': mapping.additionalAttributes.letterSpacing,
      'color': this.getAttribute('on-background') ? mapping.additionalAttributes.onBackgroundColor : mapping.additionalAttributes.color,
      'padding-bottom': this.getAttribute('padding-bottom'),
    }

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        <div ${this.htmlAttributes({
          class: this.getAttribute('responsive') ? 'labor-adobe-typo-display-one-responsive' : '',
        })}>${this.getContent()}</div>
      </mj-text>
    `)
  }
}
