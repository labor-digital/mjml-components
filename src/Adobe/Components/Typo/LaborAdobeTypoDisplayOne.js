import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-typo-display-one'],
  'labor-adobe-typo-display-one': [],
})

export default class LaborAdobeTypoDisplayOne extends BodyComponent {

  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'type': 'enum(normal,quiet)',

    // In the red figma, in all cases where DisplayOne is used in a pod or hero card, DisplayTwo or DisplayThree is used for the mobile version.
    // Examples: HeroCards (DisplayTwo), Focused - Single Pods (DisplayThree)
    'responsive': 'enum(displayTwo,displayThree)',

    // Only allow padding-bottom to be set if the responsive attribute is not set
    'padding-top': 'unit(px,%)',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'type': 'normal',

    'padding-bottom': styleMapping.typographies.displayOne.padding.defaultPaddingBottom,
    'css-class': 'labor-adobe-typo-display-one-responsive-padding',
  }

  static additionalAttributes = {
    // default attributes
    fontSize: styleMapping.typographies.displayOne.fontSize,
    lineHeight: styleMapping.typographies.displayOne.lineHeight,
    fontWeightNormal: styleMapping.typographies.displayOne.fontWeight.normal,
    fontWeightQuiet: styleMapping.typographies.displayOne.fontWeight.quiet,
    letterSpacing: styleMapping.typographies.displayOne.letterSpacing,
    defaultPaddingBottom: styleMapping.typographies.displayOne.padding.defaultPaddingBottom,
    color: styleMapping.typographies.displayOne.color,
    onBackgroundColor: styleMapping.typographies.displayOne.colorOnBackground,

    // paddings
    responsivePaddingBottomDesktop: styleMapping.typographies.displayOne.padding.responsivePaddingBottomDesktop,
    responsivePaddingBottomMobile: styleMapping.typographies.displayOne.padding.responsivePaddingBottomMobile,

    // DisplayTwo attributes
    responsiveTwoMobileFontSize: styleMapping.typographies.displayTwo.fontSize,
    responsiveTwoMobileLineHeight: styleMapping.typographies.displayTwo.lineHeight,
    responsiveTwoMobileFontWeightNormal: styleMapping.typographies.displayTwo.fontWeight.normal,
    responsiveTwoMobileFontWeightQuiet: styleMapping.typographies.displayTwo.fontWeight.quiet,
    responsiveTwoMobileLetterSpacing: styleMapping.typographies.displayTwo.letterSpacing,

    // DisplayThree attributes
    responsiveThreeMobileFontSize: styleMapping.typographies.displayThree.fontSize,
    responsiveThreeMobileLineHeight: styleMapping.typographies.displayThree.lineHeight,
    responsiveThreeMobileFontWeightNormal: styleMapping.typographies.displayThree.fontWeight.normal,
    responsiveThreeMobileFontWeightQuiet: styleMapping.typographies.displayThree.fontWeight.quiet,
    responsiveThreeMobileLetterSpacing: styleMapping.typographies.displayThree.letterSpacing,
  }

  headStyle = (breakpoint) => `
  
    .labor-adobe-typo-display-one-responsive-padding {
      padding-bottom: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsivePaddingBottomDesktop} !important;
    }
      
    .labor-adobe-typo-display-one--responsive-two, .labor-adobe-typo-display-one--responsive-three {
      font-size: ${LaborAdobeTypoDisplayOne.additionalAttributes.fontSize};
      line-height: ${LaborAdobeTypoDisplayOne.additionalAttributes.lineHeight};
      font-weight: ${
        this.getAttribute('type') === 'quiet'
          ? LaborAdobeTypoDisplayOne.additionalAttributes.fontWeightQuiet
          : LaborAdobeTypoDisplayOne.additionalAttributes.fontWeightNormal
      };
      letter-spacing: ${LaborAdobeTypoDisplayOne.additionalAttributes.letterSpacing};
    } 
    
    @media only screen and (max-width:${breakpoint}) {
    
      .labor-adobe-typo-display-one-responsive-padding {
        padding-bottom: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsivePaddingBottomMobile} !important;
      }
    
      .labor-adobe-typo-display-one--responsive-two {
        font-size: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsiveTwoMobileFontSize};
        line-height: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsiveTwoMobileLineHeight};
        font-weight: ${
          this.getAttribute('type') === 'quiet'
            ? LaborAdobeTypoDisplayOne.additionalAttributes.responsiveTwoMobileFontWeightQuiet
            : LaborAdobeTypoDisplayOne.additionalAttributes.responsiveTwoMobileFontWeightNormal
        };
        letter-spacing: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsiveTwoMobileLetterSpacing};
      }
    
      .labor-adobe-typo-display-one--responsive-three {
        font-size: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileFontSize};
        line-height: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileLineHeight};
        font-weight: ${
          this.getAttribute('type') === 'quiet'
            ? LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileFontWeightQuiet
            : LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileFontWeightNormal
        };
        letter-spacing: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileLetterSpacing};
      }
   }
  `

  constructor(initialData = {}) {
    super(initialData);

    this.userAttributes = initialData.attributes || {};
    if(!this.userAttributes['responsive'] || this.userAttributes['padding-bottom']){
      this.attributes['css-class'] = '';
    } else {
      this.attributes['padding-bottom'] = styleMapping.typographies.displayOne.padding.defaultPaddingBottom;
    }
  }

  render() {

    const attrs = {
      'font-size': LaborAdobeTypoDisplayOne.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDisplayOne.additionalAttributes.lineHeight,
      'font-weight':
        this.getAttribute('type') === 'quiet'
          ? LaborAdobeTypoDisplayOne.additionalAttributes.fontWeightQuiet
          : LaborAdobeTypoDisplayOne.additionalAttributes.fontWeightNormal,
      'letter-spacing': LaborAdobeTypoDisplayOne.additionalAttributes.letterSpacing,
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoDisplayOne.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoDisplayOne.additionalAttributes.color,
      'font-family': "adobe-clean-display, 'adobe-clean', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
    }

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        <div 
          ${this.htmlAttributes({
            class:
              this.getAttribute('responsive') === 'displayTwo'
                ? 'labor-adobe-typo-display-one--responsive-two'
                : this.getAttribute('responsive') === 'displayThree'
                  ? 'labor-adobe-typo-display-one--responsive-three'
                   : '', 
          })}
        >
          ${this.getContent()}
        </div>
      </mj-text>
    `)
  }
}
