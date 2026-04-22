import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-pod-no-image',
  attributes: {
    'section-bg-class': {
      type: 'string',
      default: 'content-bg',
    },
    'headline': {
      type: 'string',
    },
    'cta-type': {
      type: 'enum(button,link)',
      default: 'button',
    },
    'cta': {
      type: 'string',
    },
    'cta-href': {
      type: 'string',
    },
    'padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.vertical.px100,
    },
    'padding-top': {
      type: 'unit(px)',
      default: styleMapping.spacings.vertical.px100,
    },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobePodNoImage extends BodyComponent {
  static endingTag = true

  render() {
    return this.getAttribute('cta-type') === 'button'
      ? this.renderMJML(`
                <labor-adobe-pod
                    section-bg-class="${this.getAttribute('section-bg-class')}"
     
                    headline="${this.getAttribute('headline')}"
                    
                    primary-cta="${this.getAttribute('cta')}"
                    primary-cta-href="${this.getAttribute('cta-href')}"
                    
                    padding-bottom="${this.getAttribute('padding-bottom')}"
                    content-section-padding-top="${this.getAttribute('padding-top')}"
                >
                    ${this.getContent()}
                </labor-adobe-pod>
            `)
        : this.renderMJML(`
                <labor-adobe-pod
                    section-bg-class="${this.getAttribute('section-bg-class')}"
     
                    headline="${this.getAttribute('headline')}"
                    
                    secondary-cta="${this.getAttribute('cta')}"
                    secondary-cta-href="${this.getAttribute('cta-href')}"
                    
                    padding-bottom="${this.getAttribute('padding-bottom')}"
                    content-section-padding-top="${this.getAttribute('padding-top')}"
                >
                    ${this.getContent()}
                </labor-adobe-pod>
            `)
  }
}
