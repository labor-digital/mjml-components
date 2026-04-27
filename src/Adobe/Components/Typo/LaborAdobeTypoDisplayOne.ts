import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-typo-display-one',
  attributes: {
    'on-background': {
      type: 'boolean',
      default: false,
    },
    'type': {
      type: 'enum(normal,quiet)',
      default: 'normal',
    },
    'responsive': {
      type: 'enum(none,displayTwo,displayThree)',
      default: 'displayTwo',
    },
    'padding-top': {
      type: 'unit(px,%)',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: styleMapping.typographies.displayOne.padding.defaultPaddingBottom,
    },
    'css-class': {
      type: 'string',
      default: 'labor-adobe-typo-display-one-responsive-padding',
    },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

export class LaborAdobeTypoDisplayOne extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options


  static additionalAttributes = {
    // default attributes
    fontSize: styleMapping.typographies.displayOne.fontSize,
    lineHeight: styleMapping.typographies.displayOne.lineHeight,
    fontWeightNormal: styleMapping.typographies.displayOne.fontWeight.normal,
    fontWeightQuiet: styleMapping.typographies.displayOne.fontWeight.quiet,
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

    // DisplayThree attributes
    responsiveThreeMobileFontSize: styleMapping.typographies.displayThree.fontSize,
    responsiveThreeMobileLineHeight: styleMapping.typographies.displayThree.lineHeight,
    responsiveThreeMobileFontWeightNormal: styleMapping.typographies.displayThree.fontWeight.normal,
    responsiveThreeMobileFontWeightQuiet: styleMapping.typographies.displayThree.fontWeight.quiet,
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
      }
    
      .labor-adobe-typo-display-one--responsive-three {
        font-size: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileFontSize};
        line-height: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileLineHeight};
        font-weight: ${
          this.getAttribute('type') === 'quiet'
            ? LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileFontWeightQuiet
            : LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileFontWeightNormal
        };
      }
   }
  `

  constructor(initialData: any = {}) {
    super(initialData);
    this.userAttributes = initialData.attributes || {};
    if(!this.userAttributes['responsive'] || this.userAttributes['responsive'] === 'none' || this.userAttributes['padding-bottom']){
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
      'color': this.getAttribute('on-background')
        ? LaborAdobeTypoDisplayOne.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoDisplayOne.additionalAttributes.color,
      'font-family': "'adobe-clean-display', 'adobe-clean', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
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
