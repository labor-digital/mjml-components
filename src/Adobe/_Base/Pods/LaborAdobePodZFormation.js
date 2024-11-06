import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeRedStyleMapping from '../../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
    'mj-body': ['labor-adobe-pod-z-formatuib'],
    'labor-adobe-pod': [],
})

/**
 * WIP
 */

export default class LaborAdobePodZFormation extends BodyComponent {

    static endingTag = true

    static allowedAttributes = {
        'section-bg-class': 'string',

        'headline': 'string',

        'secondary-cta': 'string',
        'secondary-cta-href': 'string',

        'z-formation-align': 'enum(left, right)',
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
                    
                    z-formation-align="${this.getAttribute('z-formation-align')}"
                >
                    ${this.getContent()}
                </labor-adobe-pod>
            `)
        )
    }
}
