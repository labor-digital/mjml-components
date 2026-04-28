import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeProductLogoMapping from '../../Mapping/AdobeProductLogoMapping'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: "labor-adobe-product-logo",
  attributes: {
    'product': {
      type: 'string',
      default: 'express',
    },
    'product-color': {
      type: 'enum(gray,black,white)',
      default: 'gray',
    },
    'product-type': {
      type: 'enum(regular,alt)',
      default: 'regular',
    },
    'product-src-overwrite': {
      type: 'string',
    },
    'product-height-overwrite': {
      type: 'unit(px)',
    },
    'product-width-overwrite': {
      type: 'unit(px)',
    },
    'padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.custom.px24,
    },
    'padding-top': {
      type: 'unit(px)',
    },
  },
  allowedParentTags: ["mj-column"],
  allowedChildTags: [],
})

export class LaborAdobeProductLogo extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options

  static additionalAttributes = {
    heightRegular: '35px',
    heightAlt: '30px',
    paddingBottomRegular: styleMapping.spacings.custom.px24,
    paddingBottomAlt: styleMapping.spacings.custom.px5,
  }



  render() {

    let productLogo = AdobeProductLogoMapping.getLogo(this.getAttribute('product'), this.getAttribute('product-color'));
    if (!productLogo) return '';



    let calculateLogoWidth = () => {
      let imageRatio = getImageRatio();
      let logoWidth = parseInt(productLogo.width);
      return Math.floor(logoWidth / imageRatio)
    }

    // Return the correct logo height based on the product type and the overwrite attribute
    let getLogoHeight = () => {
      let targetHeight: string = '0';

      if(this.getAttribute('product-height-overwrite')) {
        targetHeight = this.getAttribute('product-height-overwrite');
      } else if(this.getAttribute('product-type') === 'regular') {
        targetHeight = LaborAdobeProductLogo.additionalAttributes.heightRegular;
      } else if(this.getAttribute('product-type') === 'alt') {
        targetHeight = LaborAdobeProductLogo.additionalAttributes.heightAlt;
      }

      return parseInt(targetHeight.replace('px', ''));
    }

    // Calulate the ratio of the actual image to the target height which can then be used to calculate the width of the image
    let getImageRatio = () => {
      let cleanTargetHeight = getLogoHeight();
      let cleanImageHeight = parseInt(productLogo.height)

      return cleanImageHeight / cleanTargetHeight
    }

    let withPx = (value) => {
      return value + 'px';
    }

    return this.renderMJML(`<mj-image
      src="${this.getAttribute('product-src-overwrite') ?? productLogo.location}" 
      align="left"
      width="${withPx(calculateLogoWidth())}"
      height="${withPx(getLogoHeight())}"
      target="_blank" 
      alt="${this.getAttribute('product') ? productLogo.name : ''}"
    />`);

  }

}
