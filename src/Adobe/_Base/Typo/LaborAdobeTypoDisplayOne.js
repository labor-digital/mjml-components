import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping;

registerDependencies({
  'mj-column': ['labor-adobe-typo-display-one'],
  'labor-adobe-typo-display-one': [],
});

export default class LaborAdobeTypoDisplayOne extends BodyComponent {

  static endingTag = true;

  static allowedAttributes =  {
    'on-background': 'boolean',
    'type': 'enum(normal,quiet)',
    'responsive': 'boolean',
    'padding-bottom': 'unit(px,%)',
  };
  static defaultAttributes = {
    'on-background': false,
    'type': 'normal',
    'responsive': false,
    'padding-bottom': styleMapping.spacings.vertical.px0,
  };

  static additionalAttributes = {
    fontSize: styleMapping.typographies.displayOne.fontSize,
    lineHeight: styleMapping.typographies.displayOne.lineHeight,
    fontWeight: {
      normal: styleMapping.typographies.displayOne.fontWeight,
      quiet: styleMapping.typographies.displayOne.fontWeight,
    },
    letterSpacing: styleMapping.typographies.displayOne.letterSpacing,
    color: styleMapping.typographies.displayOne.color,
    onBackgroundColor: styleMapping.colors.white.hex
  };

  // todophilipp
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
      'font-size': LaborAdobeTypoDisplayOne.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDisplayOne.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoDisplayOne.additionalAttributes.fontWeight[this.getAttribute('type')],
      'letter-spacing': LaborAdobeTypoDisplayOne.additionalAttributes.letterSpacing,
      'color': this.getAttribute('on-background') ? LaborAdobeTypoDisplayOne.additionalAttributes.onBackgroundColor : LaborAdobeTypoDisplayOne.additionalAttributes.color,
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
