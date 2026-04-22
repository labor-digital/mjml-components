import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-hero-card-split-one',
  attributes: {
    'header-bg-class': {
      type: 'string',
      default: 'content-bg',
    },
    'section-bg-class': {
      type: 'string',
      default: 'content-bg',
    },
    'product': {
      type: 'string',
      default: 'express',
    },
    'product-color': {
      type: 'enum(red_black,red_gray,red_white,white_black)',
      default: 'red_gray',
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
    'header-alt': {
      type: 'string',
    },
    'header-title': {
      type: 'string',
    },
    'headline': {
      type: 'string',
      default: '',
    },
    'cta-text': {
      type: 'string',
      default: '',
    },
    'cta-href': {
      type: 'string',
      default: '',
    },
    'image-src': {
      type: 'string',
      default: '',
    },
    'image-src-mobile': {
      type: 'string',
      default: '',
    },
    'image-title': {
      type: 'string',
      default: '',
    },
    'image-alt': {
      type: 'string',
      default: '',
    },
    'padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.custom.px0,
    },
    'header-additional-padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.vertical.px20,
    },
    'section-padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.vertical.px60,
    },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})
class LaborAdobeHeroCardSplitOne extends BodyComponent {
  static endingTag = true

  render() {
    // Normalize all attributes once (defaults already applied by MJML)
    const attrs = {
      headerBgClass: this.getAttribute('header-bg-class'),
      sectionBgClass: this.getAttribute('section-bg-class'),
      product: this.getAttribute('product'),
      productColor: this.getAttribute('product-color'),
      productSrcOverwrite: this.getAttribute('product-src-overwrite'),
      productHeightOverwrite: this.getAttribute('product-height-overwrite'),
      productWidthOverwrite: this.getAttribute('product-width-overwrite'),
      headerAlt: this.getAttribute('header-alt') || '',
      headerTitle: this.getAttribute('header-title') || '',
      headline: this.getAttribute('headline'),
      ctaText: this.getAttribute('cta-text'),
      ctaHref: this.getAttribute('cta-href'),
      imageSrc: this.getAttribute('image-src'),
      imageSrcMobile: this.getAttribute('image-src-mobile'),
      imageTitle: this.getAttribute('image-title'),
      imageAlt: this.getAttribute('image-alt'),
      paddingBottom: this.getAttribute('padding-bottom'),
      headerPaddingBottom: this.getAttribute('header-additional-padding-bottom'),
      sectionPaddingBottom: this.getAttribute('section-padding-bottom'),
    }

    // Optional attribute
    const srcMobileAttr = attrs.imageSrcMobile
      ? `src-mobile="${attrs.imageSrcMobile}"`
      : ''

    // Header block
    const header = attrs.productSrcOverwrite
      ? `
        <labor-adobe-header
          product-src-overwrite="${attrs.productSrcOverwrite}"
          product-height-overwrite="${attrs.productHeightOverwrite || ''}"
          product-width-overwrite="${attrs.productWidthOverwrite || ''}"
          alt="${attrs.headerAlt}"
          title="${attrs.headerTitle}"
          header-bg-class="${attrs.headerBgClass}"
          additional-padding-bottom="${attrs.headerPaddingBottom}"
        />
      `
      : `
        <labor-adobe-header
          product="${attrs.product}"
          product-color="${attrs.productColor}"
          header-bg-class="${attrs.headerBgClass}"
          additional-padding-bottom="${attrs.headerPaddingBottom}"
        />
      `

    return (
      this.renderMJML(header) +
      this.renderMJML(`
        <labor-adobe-section
          padding-bottom="${attrs.sectionPaddingBottom}"
          section-bg-class="${attrs.sectionBgClass}"
        >
          <mj-column>

            ${
        attrs.headline
          ? `
              <labor-adobe-typo-display-one padding-bottom="40px">
                ${attrs.headline}
              </labor-adobe-typo-display-one>
            `
          : ''
      }

            <labor-adobe-typo-body>
              ${this.getContent()}
            </labor-adobe-typo-body>

            ${
        attrs.ctaText
          ? `
              <labor-adobe-button
                href="${attrs.ctaHref}"
                padding-bottom="0"
              >
                ${attrs.ctaText}
              </labor-adobe-button>
            `
          : ''
      }

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
              ${srcMobileAttr}
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