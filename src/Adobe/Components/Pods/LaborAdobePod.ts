import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-pod',
  attributes: {
    'section-bg-class': { type: 'string', default: 'content-bg' },
    'image-src': { type: 'string' },
    'image-src-mobile': { type: 'string' },
    'image-with-padding': { type: 'boolean', default: false },
    'image-href': { type: 'string' },
    'headline': { type: 'string' },
    'product': { type: 'string', default: '' },
    'product-color': { type: 'string', default: 'gray' },
    'product-type': { type: 'string' },
    'product-height': { type: 'string', default: '35px' },
    'custom-category': { type: 'string' },
    'primary-cta': { type: 'string' },
    'primary-cta-width': { type: 'unit(px)', default: '200px' },
    'primary-cta-href': { type: 'string' },
    'secondary-cta': { type: 'string' },
    'secondary-cta-href': { type: 'string' },
    'padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.horizontal.px100 },
    'padding-top': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.custom.px0 },
    'content-section-padding-top': { type: 'unit(px)' },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobePod extends BodyComponent {
  static endingTag = true

  render() {
    const attrs = {
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      paddingTop: this.getAttribute('padding-top') || AdobeRedStyleMapping.spacings.custom.px0,
      paddingBottom: this.getAttribute('padding-bottom') || AdobeRedStyleMapping.spacings.horizontal.px100,
      primaryCtaWidth: this.getAttribute('primary-cta-width') || '200px',
      product: this.getAttribute('product') || '',
      productColor: this.getAttribute('product-color') || 'gray',
    }

    const imageSrc = this.getAttribute('image-src')
    const imageSrcMobile = this.getAttribute('image-src-mobile')
    const imageSrcMobileAttr = imageSrcMobile ? `src-mobile="${imageSrcMobile}"` : ''
    const imageHref = this.getAttribute('image-href')
    const headline = this.getAttribute('headline')
    const customCategory = this.getAttribute('custom-category')
    const primaryCtaHref = this.getAttribute('primary-cta-href')
    const primaryCta = this.getAttribute('primary-cta')
    const secondaryCtaHref = this.getAttribute('secondary-cta-href')
    const secondaryCta = this.getAttribute('secondary-cta')
    const contentSectionPaddingTop = this.getAttribute('content-section-padding-top')

    const _imageWithPadding = this.getAttribute('image-with-padding')
    const imageWithPadding = _imageWithPadding === true || _imageWithPadding === 'true'

    const contentPaddingTop = imageSrc
      ? AdobeRedStyleMapping.spacings.horizontal.px0
      : contentSectionPaddingTop || AdobeRedStyleMapping.spacings.horizontal.px100

    return (
      (imageSrc
        ? this.renderMJML(`
            <labor-adobe-section
              with-padding="${imageWithPadding}"
              padding-bottom="${AdobeRedStyleMapping.spacings.horizontal.px40}"
              padding-top="${attrs.paddingTop}"
              section-bg-class="${attrs.sectionBgClass}"
            >
              <mj-column>
                <labor-responsive-image
                  src="${imageSrc}"
                  ${imageSrcMobileAttr}
                  fluid-on-mobile="true"
                  width="600px"
                  align="left"
                  target="_blank"
                  href="${imageHref || primaryCtaHref || ''}"
                  alt="${headline || ''}"
                />
              </mj-column>
            </labor-adobe-section>
          `)
        : '') +
      this.renderMJML(`
        <labor-adobe-section
          with-padding="true"
          padding-bottom="${attrs.paddingBottom}"
          section-bg-class="${attrs.sectionBgClass}"
          padding-top="${contentPaddingTop}"
        >
          <mj-column>
            ${
              attrs.product
                ? `<labor-adobe-product-logo
                    product="${attrs.product}"
                    product-type="regular"
                    product-color="${attrs.productColor}"
                  />`
                : ''
            }
            ${
              customCategory
                ? `<labor-adobe-typo-body
                    padding-bottom="${AdobeRedStyleMapping.spacings.horizontal.px7}"
                  >
                    ${customCategory}
                  </labor-adobe-typo-body>`
                : ''
            }
            ${
              headline
                ? `<labor-adobe-typo-heading-three>
                    ${headline}
                  </labor-adobe-typo-heading-three>`
                : ''
            }
            <labor-adobe-typo-body
              padding-bottom="${AdobeRedStyleMapping.spacings.horizontal.px40}"
            >
              ${this.getContent()}
            </labor-adobe-typo-body>
            ${
              primaryCtaHref
                ? `<labor-adobe-button
                    type="quiet"
                    href="${primaryCtaHref}"
                    width="${attrs.primaryCtaWidth}"
                    padding-bottom="0"
                  >
                    ${primaryCta || ''}
                  </labor-adobe-button>`
                : ''
            }
            ${
              secondaryCtaHref
                ? `<labor-adobe-link
                    type="standard"
                    href="${secondaryCtaHref}"
                    padding-bottom="0"
                  >
                    ${secondaryCta || ''}
                  </labor-adobe-link>`
                : ''
            }
          </mj-column>
        </labor-adobe-section>
      `)
    )
  }
}
