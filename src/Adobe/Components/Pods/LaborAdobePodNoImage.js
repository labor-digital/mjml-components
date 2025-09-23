import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-body': ['labor-adobe-pod-no-image'],
  'labor-adobe-pod-no-image': [],
})

export default class LaborAdobePodNoImage extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'section-bg-class': 'string',

    'headline': 'string',

    'cta-type': 'enum(button,link)',
    'cta': 'string',
    'cta-href': 'string',
  }

  static defaultAttributes = {
    'section-bg-class': 'content-bg',
    'cta-type': 'button',
  }

  render() {
    return this.getAttribute('cta-type') === 'button'
      ? this.renderMJML(`
                <labor-adobe-pod
                    section-bg-class="${this.getAttribute('section-bg-class')}"
     
                    headline="${this.getAttribute('headline')}"
                    
                    primary-cta="${this.getAttribute('cta')}"
                    primary-cta-href="${this.getAttribute('cta-href')}"
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
                >
                    ${this.getContent()}
                </labor-adobe-pod>
            `)
  }
}
