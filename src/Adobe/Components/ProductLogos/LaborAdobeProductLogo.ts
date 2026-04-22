import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeProductLogoMapping from '../../Mapping/AdobeProductLogoMapping'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

@MJMLCustomComponent({
  tag: "labor-adobe-product-logo",
  attributes: {
    'product': { type: 'string', default: 'express' },
    'product-color': { type: 'enum(gray,black,white)', default: 'gray' },
    'product-type': { type: 'enum(regular,alt)', default: 'regular' },
    'product-src-overwrite': { type: 'string' },
    'product-height-overwrite': { type: 'unit(px)' },
    'product-width-overwrite': { type: 'unit(px)' },
    'padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.custom.px24 },
    'padding-top': { type: 'unit(px)' },
  },
  allowedParentTags: ["mj-column"],
  allowedChildTags: [],
})

export class LaborAdobeProductLogo extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    heightRegular: '35px',
    heightAlt: '30px',
    paddingBottomRegular: AdobeRedStyleMapping.spacings.custom.px24,
    paddingBottomAlt: AdobeRedStyleMapping.spacings.custom.px5,
  }

  render() {
    const productLogo = AdobeProductLogoMapping.getLogo(
      this.getAttribute('product') || 'express',
      this.getAttribute('product-color') || 'gray',
    )
    if (!productLogo) return ''

    const productHeightOverwrite = this.getAttribute('product-height-overwrite')
    const productType = this.getAttribute('product-type') || 'regular'
    const productSrcOverwrite = this.getAttribute('product-src-overwrite')

    const getLogoHeight = (): number => {
      const raw = productHeightOverwrite
        || (productType === 'alt'
          ? LaborAdobeProductLogo.additionalAttributes.heightAlt
          : LaborAdobeProductLogo.additionalAttributes.heightRegular)
      return parseInt(raw.replace('px', ''))
    }

    const getImageRatio = (): number => {
      return parseInt(productLogo.height) / getLogoHeight()
    }

    const calculateLogoWidth = (): string => {
      return Math.floor(parseInt(productLogo.width) / getImageRatio()) + 'px'
    }

    const height = getLogoHeight() + 'px'
    const width = calculateLogoWidth()

    return this.renderMJML(`<mj-image
      src="${productSrcOverwrite || productLogo.location}"
      align="left"
      width="${width}"
      height="${height}"
      target="_blank"
      alt="${productLogo.name}"
    />`)
  }
}
