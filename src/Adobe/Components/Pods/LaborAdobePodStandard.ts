import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-pod-standard',
  attributes: {
    'section-bg-class': { type: 'string', default: 'content-bg' },
    'image-src': { type: 'string' },
    'image-src-mobile': { type: 'string' },
    'headline': { type: 'string' },
    'primary-cta': { type: 'string' },
    'primary-cta-href': { type: 'string' },
    'primary-cta-width': { type: 'unit(px)', default: '200px' },
    'padding-top': { type: 'unit(px)', default: '0' },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobePodStandard extends BodyComponent {
  static endingTag = true

  render() {
    const attrs = {
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      imageSrc: this.getAttribute('image-src') || '',
      headline: this.getAttribute('headline') || '',
      primaryCta: this.getAttribute('primary-cta') || '',
      primaryCtaHref: this.getAttribute('primary-cta-href') || '',
      primaryCtaWidth: this.getAttribute('primary-cta-width') || '200px',
      paddingTop: this.getAttribute('padding-top') || '0',
    }

    const imageSrcMobile = this.getAttribute('image-src-mobile')
    const imageSrcMobileAttr = imageSrcMobile ? `image-src-mobile="${imageSrcMobile}"` : ''

    return this.renderMJML(`
      <labor-adobe-pod
        section-bg-class="${attrs.sectionBgClass}"
        image-src="${attrs.imageSrc}"
        ${imageSrcMobileAttr}
        image-href="${attrs.primaryCtaHref}"
        image-with-padding="true"
        headline="${attrs.headline}"
        primary-cta="${attrs.primaryCta}"
        primary-cta-href="${attrs.primaryCtaHref}"
        primary-cta-width="${attrs.primaryCtaWidth}"
        padding-top="${attrs.paddingTop}"
      >
        ${this.getContent()}
      </labor-adobe-pod>
    `)
  }
}
