import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-body': ['labor-adobe-pod-standard'],
  'labor-adobe-pod': [],
})

export default class LaborAdobePodStandard extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'section-bg-class': 'string',

    'image-src': 'string',
    'image-src-mobile': 'string',

    'headline': 'string',

    'primary-cta': 'string',
    'primary-cta-href': 'string',
    'primary-cta-width': 'unit(px)',

    // this is the only pod in red templates which can currently be placed beneath an immersive hero
    // in that case it should have a top padding of 40
    'padding-top': 'unit(px)',
  }

  static defaultAttributes = {
    'section-bg-class': 'content-bg',
    'primary-cta-width': '200px',

    'padding-top': '0',
  }

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
