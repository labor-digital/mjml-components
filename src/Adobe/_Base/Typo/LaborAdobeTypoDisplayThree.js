import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping;

registerDependencies({
  'mj-column': ['labor-adobe-typo-display-three'],
  'labor-adobe-typo-display-three': [],
});
export default class LaborAdobeTypoDisplayThree extends BodyComponent {

  static endingTag = true;

  static allowedAttributes = {
    'on-background': 'boolean',
    'type': 'enum(normal,quiet,bold)',
    'padding-bottom': 'unit(px,%)',
  };
  static defaultAttributes = {
    'on-background': false,
    'type': 'normal',
    'padding-bottom': styleMapping.spacings.vertical.px0,
  };

  static additionalAttributes = {
    fontSize: styleMapping.typographies.displayThree.fontSize,
    lineHeight: styleMapping.typographies.displayThree.lineHeight,
    fontWeight: styleMapping.typographies.displayThree.fontWeight,
    letterSpacing: styleMapping.typographies.displayThree.letterSpacing,
    onBackgroundColor: styleMapping.colors.white.hex,
    color: styleMapping.typographies.displayThree.color
  };

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoDisplayThree.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDisplayThree.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoDisplayThree.additionalAttributes.fontWeight[this.getAttribute('type')],
      'letter-spacing': LaborAdobeTypoDisplayThree.additionalAttributes.letterSpacing,
      'color': this.getAttribute('on-background') ? LaborAdobeTypoDisplayThree.additionalAttributes.onBackgroundColor : LaborAdobeTypoDisplayThree.additionalAttributes.color,
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
