import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-hero-card-simple-two',
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
    'pre-text': { type: 'string', default: '' },
    'headline': { type: 'string', default: '' },
    'padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.vertical.px60 },
    'header-additional-padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.vertical.px20 },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobeHeroCardSimpleTwo extends BodyComponent {
  static endingTag = true

  render() {
    const attrs = {
      headerBgClass: this.getAttribute('header-bg-class') || 'content-bg',
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      product: this.getAttribute('product') || 'express',
      productColor: this.getAttribute('product-color') || 'red_gray',
      headerAlt: this.getAttribute('header-alt') || '',
      headerTitle: this.getAttribute('header-title') || '',
      preText: this.getAttribute('pre-text') || '',
      headline: this.getAttribute('headline') || '',
      paddingBottom: this.getAttribute('padding-bottom') || AdobeRedStyleMapping.spacings.vertical.px60,
      headerPaddingBottom: this.getAttribute('header-additional-padding-bottom') || AdobeRedStyleMapping.spacings.vertical.px20,
    }

    const productSrcOverwrite = this.getAttribute('product-src-overwrite')
    const productHeightOverwrite = this.getAttribute('product-height-overwrite')
    const productWidthOverwrite = this.getAttribute('product-width-overwrite')

    const productHeightOverwriteAttr = productHeightOverwrite ? `product-height-overwrite="${productHeightOverwrite}"` : ''
    const productWidthOverwriteAttr = productWidthOverwrite ? `product-width-overwrite="${productWidthOverwrite}"` : ''

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
          padding-bottom="${attrs.paddingBottom}"
          section-bg-class="${attrs.sectionBgClass}"
        >
          <mj-column>
            <labor-adobe-typo-detail>
              ${attrs.preText}
            </labor-adobe-typo-detail>

            <labor-adobe-typo-display-one
              padding-bottom="0"
            >
              ${attrs.headline}
            </labor-adobe-typo-display-one>
          </mj-column>
        </labor-adobe-section>
      `)
    )
  }
}
