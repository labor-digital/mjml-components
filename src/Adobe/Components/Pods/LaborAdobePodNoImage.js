import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
    'mj-body': ['labor-adobe-pod-no-image'],
    'labor-adobe-pod': [],
})

export default class LaborAdobePodNoImage extends BodyComponent {

    static endingTag = true

    static allowedAttributes = {
        'section-bg-class': 'string',

        'headline': 'string',

        'secondary-cta': 'string',
        'secondary-cta-href': 'string',
    }

    static defaultAttributes = {
        'section-bg-class': 'content-bg',
    }

    render() {
        return (
            this.renderMJML(`
                <labor-adobe-pod
                    section-bg-class="${this.getAttribute('section-bg-class')}"
     
                    headline="${this.getAttribute('headline')}"
                    
                    secondary-cta="${this.getAttribute('secondary-cta')}"
                    secondary-cta-href="${this.getAttribute('secondary-cta-href')}"
                >
                    ${this.getContent()}
                </labor-adobe-pod>
            `)
        )
    }
}
