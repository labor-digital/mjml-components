import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-hero-card-immersive-two',
  attributes: {
    'header-bg-class': { type: 'string', default: 'content-bg' },
    'section-bg-class': { type: 'string', default: 'content-bg' },
    'section-bottom-bg-class': { type: 'string', default: 'content-bg' },
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
    'padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.vertical.px100 },
    'header-additional-padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.custom.px0 },
    'section-padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.custom.px0 },
    'section-padding-top': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.vertical.px20 },
    'on-background': { type: 'boolean', default: false },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobeHeroCardImmersiveTwo extends BodyComponent {
  static endingTag = true

  render() {
    const onBackgroundRaw = this.getAttribute('on-background')

    const attrs = {
      headerBgClass: this.getAttribute('header-bg-class') || 'content-bg',
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      sectionBottomBgClass: this.getAttribute('section-bottom-bg-class') || 'content-bg',
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
      paddingBottom: this.getAttribute('padding-bottom') || AdobeRedStyleMapping.spacings.vertical.px100,
      headerPaddingBottom: this.getAttribute('header-additional-padding-bottom') || AdobeRedStyleMapping.spacings.custom.px0,
      sectionPaddingBottom: this.getAttribute('section-padding-bottom') || AdobeRedStyleMapping.spacings.custom.px0,
      sectionPaddingTop: this.getAttribute('section-padding-top') || AdobeRedStyleMapping.spacings.vertical.px20,
      onBackground: onBackgroundRaw === true || onBackgroundRaw === 'true',
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
          with-padding="false"
          padding-bottom="${attrs.sectionPaddingBottom}"
          padding-top="${attrs.sectionPaddingTop}"
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
      `) +
      this.renderMJML(`
        <labor-adobe-section
          padding-top="${attrs.sectionPaddingTop}"
          padding-bottom="${attrs.paddingBottom}"
          section-bg-class="${attrs.sectionBottomBgClass}"
        >
          <mj-column>
            <labor-adobe-typo-display-one
              on-background="${attrs.onBackground}"
            >
              ${attrs.headline}
            </labor-adobe-typo-display-one>

            <labor-adobe-typo-body
              on-background="${attrs.onBackground}"
            >
              ${this.getContent()}
            </labor-adobe-typo-body>

            <labor-adobe-button
              href="${attrs.ctaHref}"
              padding-bottom="0"
              type="${attrs.onBackground ? 'inverted' : 'standard'}"
            >
              ${attrs.ctaText}
            </labor-adobe-button>
          </mj-column>
        </labor-adobe-section>
      `)
    )
  }
}
