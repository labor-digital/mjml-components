import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-pod-standard',
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
    },
    'headline': {
      type: 'string',
    },
    'primary-cta': {
      type: 'string',
    },
    'primary-cta-href': {
      type: 'string',
    },
    'primary-cta-width': {
      type: 'unit(px)',
      default: '200px',
    },
    'padding-top': {
      type: 'unit(px)',
      default: '0',
    },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

export class LaborAdobePodStandard extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options

  render() {
    const srcMobileAttr = this.getAttribute('image-src-mobile') ? `image-src-mobile="${this.getAttribute('image-src-mobile')}"` : '';

    return this.renderMJML(`
                <labor-adobe-pod
                    section-bg-class="${this.getAttribute('section-bg-class')}"
                 
                    image-src="${this.getAttribute('image-src')}"
                    ${srcMobileAttr}
                    image-href="${this.getAttribute('primary-cta-href"')}"
                    image-with-padding="true"
                    
                    headline="${this.getAttribute('headline')}"
                    
                    primary-cta="${this.getAttribute('primary-cta')}"
                    primary-cta-href="${this.getAttribute('primary-cta-href')}"
                    primary-cta-width="${this.getAttribute('primary-cta-width')}"
                    
                    padding-top="${this.getAttribute('padding-top')}"
                >
                    ${this.getContent()}
                </labor-adobe-pod>
            `)
  }
}
