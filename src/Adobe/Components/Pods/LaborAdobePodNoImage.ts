import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-pod-no-image',
  attributes: {
    'section-bg-class': { type: 'string', default: 'content-bg' },
    'headline': { type: 'string' },
    'cta-type': { type: 'enum(button,link)', default: 'button' },
    'cta': { type: 'string' },
    'cta-href': { type: 'string' },
    'padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.vertical.px100 },
    'padding-top': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.vertical.px100 },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobePodNoImage extends BodyComponent {
  static endingTag = true

  render() {
    const attrs = {
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      headline: this.getAttribute('headline') || '',
      ctaType: this.getAttribute('cta-type') || 'button',
      cta: this.getAttribute('cta') || '',
      ctaHref: this.getAttribute('cta-href') || '',
      paddingBottom: this.getAttribute('padding-bottom') || AdobeRedStyleMapping.spacings.vertical.px100,
      paddingTop: this.getAttribute('padding-top') || AdobeRedStyleMapping.spacings.vertical.px100,
    }

    const ctaAttr = attrs.ctaType === 'button'
      ? `primary-cta="${attrs.cta}" primary-cta-href="${attrs.ctaHref}"`
      : `secondary-cta="${attrs.cta}" secondary-cta-href="${attrs.ctaHref}"`

    return this.renderMJML(`
      <labor-adobe-pod
        section-bg-class="${attrs.sectionBgClass}"
        headline="${attrs.headline}"
        ${ctaAttr}
        padding-bottom="${attrs.paddingBottom}"
        content-section-padding-top="${attrs.paddingTop}"
      >
        ${this.getContent()}
      </labor-adobe-pod>
    `)
  }
}
