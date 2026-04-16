import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-edex-article',
  attributes: {
    'section-bg-class': {
      type: 'string',
      default: 'content-bg',
    },
    'image-src': {
      type: 'string',
    },
    'image-src-mobile': {
      type: 'string',
      default: '',
    },
    'image-href': {
      type: 'string',
      default: '',
    },
    'href': {
      type: 'string',
      default: '',
    },
    'headline': {
      type: 'string',
    },
    'category': {
      type: 'string',
    },
    'text': {
      type: 'string',
    },
    'cta': {
      type: 'string',
      default: '',
    },
    'cta-width': {
      type: 'unit(px)',
      default: '200px',
    },
    'product': {
      type: 'string',
      default: '',
    },
    'product-color': {
      type: 'enum(gray,black,white)',
      default: 'gray',
    },
    'product-type': {
      type: 'enum(regular,alt)',
      default: 'regular',
    },
    'secondary-cta': {
      type: 'string',
      default: '',
    },
    'secondary-href': {
      type: 'string',
      default: '',
    },
    'padding-top': {
      type: 'unit(px)',
    },
    'padding-bottom': {
      type: 'unit(px)',
      default: '100px',
    },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobeEdexArticle extends BodyComponent {
  static endingTag = true

  render() {
    return (
      this.renderMJML(`
        <labor-adobe-section
          with-padding="false"
          padding-bottom="${
            this.getAttribute('product') 
              ? styleMapping.spacings.horizontal.px40 
              : styleMapping.spacings.horizontal.px34
          }"
          padding-top="${this.getAttribute('padding-top')}" 
          section-bg-class="${this.getAttribute('section-bg-class')}"
        >
        <mj-column>
          <labor-responsive-image
            src="${this.getAttribute('image-src')}"
            src-mobile="${this.getAttribute('image-src-mobile')}"
            fluid-on-mobile="true"
            width="600px"
            align="left"
            target="_blank"
            href="${
              this.getAttribute('image-href')
                ? this.getAttribute('image-href')
                : this.getAttribute('href')
            }"
            alt="${this.getAttribute('headline')}"
          />
        </mj-column>
        </labor-adobe-section>
      `) +
      this.renderMJML(`
        <labor-adobe-section
          padding-bottom="${this.getAttribute('padding-bottom')}" 
          section-bg-class="${this.getAttribute('section-bg-class')}"
        >
          <mj-column>
            ${
              this.getAttribute('product')
                ? `
                  <labor-adobe-product-logo
                    product="${this.getAttribute('product')}"
                    product-color="${this.getAttribute('product-color')}"
                  /> 
                  `
                : ``
            }
            ${
              this.getAttribute('category')
                ? `
                  <labor-adobe-edex-category
                    padding-bottom="${styleMapping.spacings.horizontal.px12}"
                  >
                    ${this.getAttribute('category')}
                  </labor-adobe-edex-category>
                  ` 
                : ``
            }
            <labor-adobe-typo-heading-three
              padding-bottom="${styleMapping.spacings.horizontal.px12}"
            >
              ${this.getAttribute('headline')}
            </labor-adobe-typo-heading-three>
            <labor-adobe-typo-body
              padding-bottom="${
                this.getAttribute('href')
                  ? styleMapping.spacings.horizontal.px40
                  : styleMapping.spacings.horizontal.px0
              }"
            >
              ${this.getAttribute('text')}
            </labor-adobe-typo-body>
            ${
              this.getAttribute('href')
                ? `
                  <labor-adobe-button
                    type="quiet"
                    href="${this.getAttribute('href')}"
                    width="${this.getAttribute('cta-width')}"
                    padding-bottom="0"
                  >
                    ${this.getAttribute('cta')}
                  </labor-adobe-button>
                  `
                : ``
            }
            ${
              this.getAttribute('secondary-href')
                ? `
                  <labor-adobe-secondary-cta
                    padding-top="${
                      this.getAttribute('href')
                        ? styleMapping.spacings.horizontal.px10
                        : styleMapping.spacings.horizontal.px30
                      }"
                    type="quiet"
                    href="${this.getAttribute('secondary-href')}"
                  >
                    ${this.getAttribute('secondary-cta')}
                  </labor-adobe-secondary-cta>
                  ` 
                : ``
            }
          </mj-column>
        </labor-adobe-section>
      `)
    )
  }
}
