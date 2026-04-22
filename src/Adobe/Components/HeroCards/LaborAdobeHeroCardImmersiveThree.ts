import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-hero-card-immersive-three',
  attributes: {
    'header-bg-class': { type: 'string', default: 'content-bg' },
    'section-bg-class': { type: 'string', default: 'content-bg' },
    'product': { type: 'string', default: 'express' },
    'product-color': { type: 'enum(red_black,red_gray,red_white,white_black)', default: 'red_gray' },
    'product-src-overwrite': { type: 'string' },
    'product-height-overwrite': { type: 'unit(px)' },
    'product-width-overwrite': { type: 'unit(px)' },
    'header-alt': { type: 'string', default: '' },
    'header-title': { type: 'string', default: '' },
    'headline': { type: 'string', default: '' },
    'cta-text': { type: 'string', default: '' },
    'cta-href': { type: 'string', default: '' },
    'image-src': { type: 'string', default: '' },
    'image-src-mobile': { type: 'string' },
    'image-title': { type: 'string', default: '' },
    'image-alt': { type: 'string', default: '' },
    'padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.custom.px0 },
    'header-additional-padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.vertical.px20 },
    'section-padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.vertical.px40 },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobeHeroCardImmersiveThree extends BodyComponent {
  static endingTag = true

  render() {
    const attrs = {
      headerBgClass: this.getAttribute('header-bg-class') || 'content-bg',
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      product: this.getAttribute('product') || 'express',
      productColor: this.getAttribute('product-color') || 'red_gray',
      headerAlt: this.getAttribute('header-alt') || '',
      headerTitle: this.getAttribute('header-title') || '',
      headline: this.getAttribute('headline') || '',
      ctaText: this.getAttribute('cta-text') || '',
      ctaHref: this.getAttribute('cta-href') || '',
      imageSrc: this.getAttribute('image-src') || '',
      imageTitle: this.getAttribute('image-title') || '',
      imageAlt: this.getAttribute('image-alt') || '',
      paddingBottom: this.getAttribute('padding-bottom') || AdobeRedStyleMapping.spacings.custom.px0,
      headerPaddingBottom: this.getAttribute('header-additional-padding-bottom') || AdobeRedStyleMapping.spacings.vertical.px20,
      sectionPaddingBottom: this.getAttribute('section-padding-bottom') || AdobeRedStyleMapping.spacings.vertical.px40,
    }

    const productSrcOverwrite = this.getAttribute('product-src-overwrite')
    const productHeightOverwrite = this.getAttribute('product-height-overwrite')
    const productWidthOverwrite = this.getAttribute('product-width-overwrite')
    const imageSrcMobile = this.getAttribute('image-src-mobile')

    const productHeightOverwriteAttr = productHeightOverwrite ? `product-height-overwrite="${productHeightOverwrite}"` : ''
    const productWidthOverwriteAttr = productWidthOverwrite ? `product-width-overwrite="${productWidthOverwrite}"` : ''
    const imageSrcMobileAttr = imageSrcMobile ? `src-mobile="${imageSrcMobile}"` : ''

    const header = productSrcOverwrite
      ? `<labor-adobe-header
          product-src-overwrite="${productSrcOverwrite}"
          ${productHeightOverwriteAttr}
          ${productWidthOverwriteAttr}
          alt="${attrs.headerAlt}"
          title="${attrs.headerTitle}"
          header-bg-class="${attrs.headerBgClass}"
          additional-padding-bottom="${attrs.headerPaddingBottom}"
        />`
      : `<labor-adobe-header
          product="${attrs.product}"
          product-color="${attrs.productColor}"
          header-bg-class="${attrs.headerBgClass}"
          additional-padding-bottom="${attrs.headerPaddingBottom}"
        />`

    return (
      this.renderMJML(header) +
      this.renderMJML(`
        <labor-adobe-section
          padding-bottom="${attrs.sectionPaddingBottom}"
          section-bg-class="${attrs.sectionBgClass}"
        >
          <mj-column>
            <labor-adobe-typo-display-one>
              ${attrs.headline}
            </labor-adobe-typo-display-one>

            <labor-adobe-typo-body>
              ${this.getContent()}
            </labor-adobe-typo-body>

            <labor-adobe-button
              href="${attrs.ctaHref}"
              padding-bottom="0"
            >
              ${attrs.ctaText}
            </labor-adobe-button>
          </mj-column>
        </labor-adobe-section>
      `) +
      this.renderMJML(`
        <labor-adobe-section
          with-padding="false"
          padding-bottom="${attrs.paddingBottom}"
          section-bg-class="${attrs.sectionBgClass}"
        >
          <mj-column>
            <labor-responsive-image
              src="${attrs.imageSrc}"
              ${imageSrcMobileAttr}
              fluid-on-mobile="true"
              width="600px"
              align="left"
              alt="${attrs.imageAlt}"
              title="${attrs.imageTitle}"
            />
          </mj-column>
        </labor-adobe-section>
      `)
    )
  }
}
