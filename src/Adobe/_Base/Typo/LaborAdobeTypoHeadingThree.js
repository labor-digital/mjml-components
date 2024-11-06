import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping;

registerDependencies({
  'mj-column': ['labor-adobe-typo-heading-three'],
  'labor-adobe-typo-heading-three': [],
});

export default class LaborAdobeTypoHeadingThree extends BodyComponent {

  static endingTag = true;

  static allowedAttributes = {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
  };

  static defaultAttributes = {
    'on-background': false
  };

  static additionalAttributes = {
    fontSize: styleMapping.typographies.headingThree.fontSize,
    lineHeight: styleMapping.typographies.headingThree.lineHeight,
    fontWeight: styleMapping.typographies.headingThree.fontWeight,
    letterSpacing: styleMapping.typographies.headingThree.letterSpacing,
    color: styleMapping.typographies.headingThree.color,
    onBackgroundColor: styleMapping.colors.white.hex
  };

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoHeadingThree.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoHeadingThree.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoHeadingThree.additionalAttributes.fontWeight,
      'letter-spacing': LaborAdobeTypoHeadingThree.additionalAttributes.letterSpacing,
      'color': this.getAttribute('on-background') ? LaborAdobeTypoHeadingThree.additionalAttributes.onBackgroundColor : LaborAdobeTypoHeadingThree.additionalAttributes.color,
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
