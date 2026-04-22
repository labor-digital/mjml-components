import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-edex-article',
  attributes: {
    'section-bg-class': { type: 'string', default: 'content-bg' },
    'image-src': { type: 'string' },
    'image-src-mobile': { type: 'string', default: '' },
    'image-href': { type: 'string', default: '' },
    'href': { type: 'string', default: '' },
    'headline': { type: 'string' },
    'category': { type: 'string' },
    'text': { type: 'string' },
    'cta': { type: 'string', default: '' },
    'cta-width': { type: 'unit(px)', default: '200px' },
    'product': { type: 'string', default: '' },
    'product-color': { type: 'enum(gray,black,white)', default: 'gray' },
    'product-type': { type: 'enum(regular,alt)', default: 'regular' },
    'secondary-cta': { type: 'string', default: '' },
    'secondary-href': { type: 'string', default: '' },
    'padding-top': { type: 'unit(px)' },
    'padding-bottom': { type: 'unit(px)', default: '100px' },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobeEdexArticle extends BodyComponent {
  static endingTag = true

  render() {
    const attrs = {
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      imageSrcMobile: this.getAttribute('image-src-mobile') || '',
      imageHref: this.getAttribute('image-href') || '',
      href: this.getAttribute('href') || '',
      cta: this.getAttribute('cta') || '',
      ctaWidth: this.getAttribute('cta-width') || '200px',
      product: this.getAttribute('product') || '',
      productColor: this.getAttribute('product-color') || 'gray',
      productType: this.getAttribute('product-type') || 'regular',
      secondaryCta: this.getAttribute('secondary-cta') || '',
      secondaryHref: this.getAttribute('secondary-href') || '',
      paddingBottom: this.getAttribute('padding-bottom') || '100px',
    }

    const imageSrc = this.getAttribute('image-src')
    const headline = this.getAttribute('headline')
    const category = this.getAttribute('category')
    const text = this.getAttribute('text')
    const paddingTop = this.getAttribute('padding-top')

    const responsiveImageHref = attrs.imageHref || attrs.href

    return (
      this.renderMJML(`
        <labor-adobe-section
          with-padding="false"
          padding-bottom="${
            attrs.product
              ? AdobeRedStyleMapping.spacings.horizontal.px40
              : AdobeRedStyleMapping.spacings.horizontal.px34
          }"
          padding-top="${paddingTop || ''}"
          section-bg-class="${attrs.sectionBgClass}"
        >
          <mj-column>
            <labor-responsive-image
              src="${imageSrc || ''}"
              src-mobile="${attrs.imageSrcMobile}"
              fluid-on-mobile="true"
              width="600px"
              align="left"
              target="_blank"
              href="${responsiveImageHref}"
              alt="${headline || ''}"
            />
          </mj-column>
        </labor-adobe-section>
      `) +
      this.renderMJML(`
        <labor-adobe-section
          padding-bottom="${attrs.paddingBottom}"
          section-bg-class="${attrs.sectionBgClass}"
        >
          <mj-column>
            ${
              attrs.product
                ? `<labor-adobe-product-logo
                    product="${attrs.product}"
                    product-color="${attrs.productColor}"
                  />`
                : ''
            }
            ${
              category
                ? `<labor-adobe-edex-category
                    padding-bottom="${AdobeRedStyleMapping.spacings.horizontal.px12}"
                  >
                    ${category}
                  </labor-adobe-edex-category>`
                : ''
            }
            <labor-adobe-typo-heading-three
              padding-bottom="${AdobeRedStyleMapping.spacings.horizontal.px12}"
            >
              ${headline || ''}
            </labor-adobe-typo-heading-three>
            <labor-adobe-typo-body
              padding-bottom="${
                attrs.href
                  ? AdobeRedStyleMapping.spacings.horizontal.px40
                  : AdobeRedStyleMapping.spacings.horizontal.px0
              }"
            >
              ${text || ''}
            </labor-adobe-typo-body>
            ${
              attrs.href
                ? `<labor-adobe-button
                    type="quiet"
                    href="${attrs.href}"
                    width="${attrs.ctaWidth}"
                    padding-bottom="0"
                  >
                    ${attrs.cta}
                  </labor-adobe-button>`
                : ''
            }
            ${
              attrs.secondaryHref
                ? `<labor-adobe-secondary-cta
                    padding-top="${
                      attrs.href
                        ? AdobeRedStyleMapping.spacings.horizontal.px10
                        : AdobeRedStyleMapping.spacings.horizontal.px30
                    }"
                    type="quiet"
                    href="${attrs.secondaryHref}"
                  >
                    ${attrs.secondaryCta}
                  </labor-adobe-secondary-cta>`
                : ''
            }
          </mj-column>
        </labor-adobe-section>
      `)
    )
  }
}
