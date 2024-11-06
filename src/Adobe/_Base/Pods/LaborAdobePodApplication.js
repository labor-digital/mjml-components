import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeRedStyleMapping from '../../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
    'mj-body': ['labor-adobe-pod-application'],
    'labor-adobe-pod': [],
})

export default class LaborAdobePodApplication extends BodyComponent {

    static endingTag = true

    static allowedAttributes = {
        'section-bg-class': 'string',

        'product': 'string',

        'primary-cta': 'string',
        'primary-cta-href': 'string',
    }

    static defaultAttributes = {
        'section-bg-class': 'content-bg',
    }

    render() {
        return (
            this.renderMJML(`
                <labor-adobe-pod
                    section-bg-class="${this.getAttribute('section-bg-class')}"
     
                    product="${this.getAttribute('product')}"
                    
                    primary-cta="${this.getAttribute('primary-cta')}"
                    primary-cta-href="${this.getAttribute('primary-cta-href')}"
                >
                    ${this.getContent()}
                </labor-adobe-pod>
            `)
        )
    }
}
