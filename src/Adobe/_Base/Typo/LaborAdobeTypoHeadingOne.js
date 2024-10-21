import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping;

registerDependencies({
  'mj-column': ['labor-adobe-typo-heading-one'],
  'labor-adobe-typo-heading-one': [],
});

export default class LaborAdobeTypoHeadingOne extends BodyComponent {

  static endingTag = true;

  static allowedAttributes = {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
  };

  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': styleMapping.spacings.vertical.px0,
  };

  static  additionalAttributes = {
    fontSize: styleMapping.typographies.headingOne.fontSize,
    lineHeight: styleMapping.typographies.headingOne.lineHeight,
    fontWeight: styleMapping.typographies.headingOne.fontWeight,
    letterSpacing: styleMapping.typographies.headingOne.letterSpacing,
    color: styleMapping.typographies.headingOne.color,
    onBackgroundColor: styleMapping.colors.white.hex,
  };

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoHeadingOne.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoHeadingOne.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoHeadingOne.additionalAttributes.fontWeight,
      'letter-spacing': LaborAdobeTypoHeadingOne.additionalAttributes.letterSpacing,
      'color': this.getAttribute('on-background') ? LaborAdobeTypoHeadingOne.additionalAttributes.onBackgroundColor : LaborAdobeTypoHeadingOne.additionalAttributes.color,
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
