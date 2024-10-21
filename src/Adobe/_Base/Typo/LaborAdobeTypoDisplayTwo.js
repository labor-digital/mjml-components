import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping;

registerDependencies({
  'mj-column': ['labor-adobe-typo-display-two'],
  'labor-adobe-typo-display-two': [],
});

export default class LaborAdobeTypoDisplayTwo extends BodyComponent {

  static endingTag = true;

  static allowedAttributes = {
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
    fontSize: styleMapping.typographies.displayTwo.fontSize,
    lineHeight: styleMapping.typographies.displayTwo.lineHeight,
    fontWeight: {
      normal: styleMapping.typographies.displayTwo.fontWeight,
      quiet: styleMapping.typographies.displayTwo.fontWeight,
    },
    letterSpacing: styleMapping.typographies.displayTwo.letterSpacing,
    onBackgroundColor: styleMapping.colors.white.hex,
    color: styleMapping.typographies.displayTwo.color
  };

  // todophilipp
  headStyle = (breakpoint) => `
      @media only screen and (max-width:${breakpoint}) {
        .labor-adobe-typo-displaytwo-responsive {
          font-size: 40px !important;
          line-height: 46px !important;
        }
      }
    `

  render() {
    const attrs = {
      'font-size': LaborAdobeTypoDisplayTwo.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDisplayTwo.additionalAttributes.lineHeight,
      'font-weight': LaborAdobeTypoDisplayTwo.additionalAttributes.fontWeight[this.getAttribute('type')],
      'letter-spacing': LaborAdobeTypoDisplayTwo.additionalAttributes.letterSpacing,
      'color': this.getAttribute('on-background') ? LaborAdobeTypoDisplayTwo.additionalAttributes.onBackgroundColor : LaborAdobeTypoDisplayTwo.additionalAttributes.color,
      'padding-bottom': this.getAttribute('padding-bottom'),
    }

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        <div ${this.htmlAttributes({
          class: this.getAttribute('responsive') ? 'labor-adobe-typo-displaytwo-responsive' : '',
        })}>${this.getContent()}</div>
      </mj-text>
    `)
  }
}
