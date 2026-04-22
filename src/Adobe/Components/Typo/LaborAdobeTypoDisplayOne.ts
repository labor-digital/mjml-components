import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-typo-display-one',
  attributes: {
    'on-background': { type: 'boolean', default: false },
    'type': { type: 'enum(normal,quiet)', default: 'normal' },
    'responsive': { type: 'enum(none,displayTwo,displayThree)', default: 'displayTwo' },
    'padding-top': { type: 'unit(px,%)' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.typographies.displayOne.padding.defaultPaddingBottom },
    'css-class': { type: 'string', default: 'labor-adobe-typo-display-one-responsive-padding' },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborAdobeTypoDisplayOne extends BodyComponent {

  static endingTag = true

  static additionalAttributes = {
    fontSize: AdobeRedStyleMapping.typographies.displayOne.fontSize,
    lineHeight: AdobeRedStyleMapping.typographies.displayOne.lineHeight,
    fontWeightNormal: AdobeRedStyleMapping.typographies.displayOne.fontWeight.normal,
    fontWeightQuiet: AdobeRedStyleMapping.typographies.displayOne.fontWeight.quiet,
    defaultPaddingBottom: AdobeRedStyleMapping.typographies.displayOne.padding.defaultPaddingBottom,
    color: AdobeRedStyleMapping.typographies.displayOne.color,
    onBackgroundColor: AdobeRedStyleMapping.typographies.displayOne.colorOnBackground,

    responsivePaddingBottomDesktop: AdobeRedStyleMapping.typographies.displayOne.padding.responsivePaddingBottomDesktop,
    responsivePaddingBottomMobile: AdobeRedStyleMapping.typographies.displayOne.padding.responsivePaddingBottomMobile,

    responsiveTwoMobileFontSize: AdobeRedStyleMapping.typographies.displayTwo.fontSize,
    responsiveTwoMobileLineHeight: AdobeRedStyleMapping.typographies.displayTwo.lineHeight,
    responsiveTwoMobileFontWeightNormal: AdobeRedStyleMapping.typographies.displayTwo.fontWeight.normal,
    responsiveTwoMobileFontWeightQuiet: AdobeRedStyleMapping.typographies.displayTwo.fontWeight.quiet,

    responsiveThreeMobileFontSize: AdobeRedStyleMapping.typographies.displayThree.fontSize,
    responsiveThreeMobileLineHeight: AdobeRedStyleMapping.typographies.displayThree.lineHeight,
    responsiveThreeMobileFontWeightNormal: AdobeRedStyleMapping.typographies.displayThree.fontWeight.normal,
    responsiveThreeMobileFontWeightQuiet: AdobeRedStyleMapping.typographies.displayThree.fontWeight.quiet,
  }

  headStyle = (breakpoint) => {
    const displayType = this.getAttribute('type') || 'normal'
    const isQuiet = displayType === 'quiet'
    return `
      .labor-adobe-typo-display-one-responsive-padding {
        padding-bottom: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsivePaddingBottomDesktop} !important;
      }

      .labor-adobe-typo-display-one--responsive-two, .labor-adobe-typo-display-one--responsive-three {
        font-size: ${LaborAdobeTypoDisplayOne.additionalAttributes.fontSize};
        line-height: ${LaborAdobeTypoDisplayOne.additionalAttributes.lineHeight};
        font-weight: ${
          isQuiet
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
            isQuiet
              ? LaborAdobeTypoDisplayOne.additionalAttributes.responsiveTwoMobileFontWeightQuiet
              : LaborAdobeTypoDisplayOne.additionalAttributes.responsiveTwoMobileFontWeightNormal
          };
        }

        .labor-adobe-typo-display-one--responsive-three {
          font-size: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileFontSize};
          line-height: ${LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileLineHeight};
          font-weight: ${
            isQuiet
              ? LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileFontWeightQuiet
              : LaborAdobeTypoDisplayOne.additionalAttributes.responsiveThreeMobileFontWeightNormal
          };
        }
      }
    `
  }

  constructor(initialData: any = {}) {
    super(initialData);
    this.userAttributes = initialData.attributes || {};
    if(!this.userAttributes['responsive'] || this.userAttributes['responsive'] === 'none' || this.userAttributes['padding-bottom']){
      this.attributes['css-class'] = '';
    } else {
      this.attributes['padding-bottom'] = AdobeRedStyleMapping.typographies.displayOne.padding.defaultPaddingBottom;
    }
  }

  render() {
    const _onBackground = this.getAttribute('on-background')
    const onBackground = _onBackground === true || _onBackground === 'true'
    const displayType = this.getAttribute('type') || 'normal'
    const responsive = this.getAttribute('responsive') || 'displayTwo'

    const attrs = {
      'font-size': LaborAdobeTypoDisplayOne.additionalAttributes.fontSize,
      'line-height': LaborAdobeTypoDisplayOne.additionalAttributes.lineHeight,
      'font-weight': displayType === 'quiet'
        ? LaborAdobeTypoDisplayOne.additionalAttributes.fontWeightQuiet
        : LaborAdobeTypoDisplayOne.additionalAttributes.fontWeightNormal,
      'color': onBackground
        ? LaborAdobeTypoDisplayOne.additionalAttributes.onBackgroundColor
        : LaborAdobeTypoDisplayOne.additionalAttributes.color,
      'font-family': "'adobe-clean-display', 'adobe-clean', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'",
    }

    const responsiveClass = responsive === 'displayTwo'
      ? 'labor-adobe-typo-display-one--responsive-two'
      : responsive === 'displayThree'
        ? 'labor-adobe-typo-display-one--responsive-three'
        : ''

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        <div ${this.htmlAttributes({ class: responsiveClass })}>
          ${this.getContent()}
        </div>
      </mj-text>
    `)
  }
}
