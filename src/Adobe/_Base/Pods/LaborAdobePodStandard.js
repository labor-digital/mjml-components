import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeRedStyleMapping from '../../_Styles/RED/AdobeRedStyleMapping'

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
    }

    static defaultAttributes = {
        'section-bg-class': 'content-bg',
        'primary-cta-width': '200px',
    }

    render() {
        return (
            this.renderMJML(`
                <labor-adobe-pod
                    section-bg-class="${this.getAttribute('section-bg-class')}"
                 
                    image-src="${this.getAttribute('image-src')}"
                    image-src-mobile="${this.getAttribute('image-src-mobile') ?? this.getAttribute('image-src')}"
                    image-href="${this.getAttribute('primary-cta-href"')}"
                    image-with-padding="true"
                    
                    headline="${this.getAttribute('headline')}"
                    
                    primary-cta="${this.getAttribute('primary-cta')}"
                    primary-cta-href="${this.getAttribute('primary-cta-href')}"
                    primary-cta-width="${this.getAttribute('cta-width')}"
                >
                    ${this.getContent()}
                </labor-adobe-pod>
            `)
        )
    }
}
