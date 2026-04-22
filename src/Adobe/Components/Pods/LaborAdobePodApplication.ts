import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-pod-application',
  attributes: {
    'section-bg-class': { type: 'string', default: 'content-bg' },
    'product': { type: 'string', default: 'express' },
    'product-color': { type: 'string', default: 'gray' },
    'product-type': { type: 'string', default: 'regular' },
    'primary-cta': { type: 'string' },
    'primary-cta-href': { type: 'string' },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobePodApplication extends BodyComponent {
  static endingTag = true

  render() {
    const attrs = {
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      product: this.getAttribute('product') || 'express',
      productColor: this.getAttribute('product-color') || 'gray',
      productType: this.getAttribute('product-type') || 'regular',
    }

    const primaryCta = this.getAttribute('primary-cta')
    const primaryCtaHref = this.getAttribute('primary-cta-href')

    return this.renderMJML(`
      <labor-adobe-pod
        section-bg-class="${attrs.sectionBgClass}"
        product="${attrs.product}"
        product-color="${attrs.productColor}"
        product-type="${attrs.productType}"
        primary-cta="${primaryCta || ''}"
        primary-cta-href="${primaryCtaHref || ''}"
      >
        ${this.getContent()}
      </labor-adobe-pod>
    `)
  }
}
