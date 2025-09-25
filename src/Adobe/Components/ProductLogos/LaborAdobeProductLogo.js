import { registerDependencies } from 'mjml-validator'
import MjImage from 'mjml-image'
import AdobeProductLogoMapping from '../../Mapping/AdobeProductLogoMapping'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-column': ['labor-adobe-product-logo'],
  'labor-adobe-product-logo': [],
})

export default class LaborAdobeProductLogo extends MjImage {
  static endingTag = true

  static allowedAttributes = {
    'product': 'string',
    'product-color': 'enum(gray,black,white)',
    'product-type': 'enum(regular,alt)',

    'padding-top-overwrite': 'unit(px)',
    'padding-bottom-overwrite': 'unit(px)',

    'product-src-overwrite': 'string',
    'product-height-overwrite': 'unit(px)',
    'product-width-overwrite': 'unit(px)',
  }

  static defaultAttributes = {
    'product': 'express',
    'product-color': 'gray',
    'product-type': 'regular'
  }

  static additionalAttributes = {
    heightRegular: '35px',
    heightAlt: '30px',
    paddingBottomRegular: styleMapping.spacings.custom.px24,
    paddingBottomAlt: styleMapping.spacings.custom.px5,
  }

  renderImage = () => {

    let productLogo = AdobeProductLogoMapping.getLogo(this.getAttribute('product'), this.getAttribute('product-color'));
    if (!productLogo) return '';

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

        return targetHeight;
      }

      // Calulate the ratio of the actual image to the target height which can then be used to calculate the width of the image
      let getImageRatio = () => {
        let cleanTargetHeight = parseInt(getLogoHeight().replace('px', ''))
        let cleanImageHeight = parseInt(productLogo.height)

        return cleanImageHeight / cleanTargetHeight
      }

      let calculateLogoWidth = () => {
        let imageRatio = getImageRatio();
        let logoWidth = parseInt(productLogo.width);
        return Math.floor(logoWidth / imageRatio).toString() + 'px'
      }

      let getPaddingBottom = () => {
        let paddingBottom = 0;

        if(this.getAttribute('padding-bottom-overwrite')) {
          paddingBottom = this.getAttribute('padding-bottom-overwrite');
        } else if(this.getAttribute('product-type') === 'regular') {
          paddingBottom = LaborAdobeProductLogo.additionalAttributes.paddingBottomRegular;
        } else if(this.getAttribute('product-type') === 'alt') {
          paddingBottom = LaborAdobeProductLogo.additionalAttributes.paddingBottomAlt;
        }

        return paddingBottom;
      }

    return `<img
      ${this.htmlAttributes({
        src: this.getAttribute('product-src-overwrite') ?? productLogo.location,
        align: "left",
        width: calculateLogoWidth(),
        height: getLogoHeight(),
        target: "_blank",
        style: {
          'padding-bottom': getPaddingBottom(),
          'padding-top': this.getAttribute('padding-top-overwrite') ?? 0,
        },
        alt: this.getAttribute('product') ? productLogo.name : ''
      })}
    />`;
  }

}
