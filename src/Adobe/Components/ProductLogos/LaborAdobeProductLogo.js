import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeProductLogoMapping from '../../Mapping/AdobeProductLogoMapping'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-product-logo'],
  'labor-adobe-product-logo': [],
})

export default class LaborAdobeProductLogo extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    heightRegular: '35px',
    heightAlt: '30px',
    paddingBottomRegular: styleMapping.spacings.custom.px24,
    paddingBottomAlt: styleMapping.spacings.custom.px5,
  }

  static allowedAttributes = {
    'product': 'string',
    'product-color': 'enum(gray,black,white)',
    'product-type': 'enum(regular,alt)',

    'product-src-overwrite': 'string',
    'product-height-overwrite': 'unit(px)',
    'product-width-overwrite': 'unit(px)',

    'padding-bottom': 'unit(px)',
    'padding-top': 'unit(px)',
  }

  static defaultAttributes = {
    'product': 'express',
    'product-color': 'gray',
    'product-type': 'regular',

    'padding-bottom': LaborAdobeProductLogo.additionalAttributes.paddingBottomRegular,
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

      let targetHeight = 0;

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
