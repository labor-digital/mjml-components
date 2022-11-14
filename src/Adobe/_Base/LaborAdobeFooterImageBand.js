import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import LaborAdobeSection from './LaborAdobeSection'

registerDependencies({
    'mj-body': ['labor-adobe-footer-image-band'],
    'labor-adobe-footer-image-band': [],
})

export default class LaborAdobeFooterImageBand extends BodyComponent {
    static allowedAttributes = {
        'src': 'string',
        'src-mobile': 'string'
    }

    static defaultAttributes = {
        'src': '',
        'src-mobile': ''
    }

    static endingTag = true

    render() {
        let imgAttrs = {
            'src': this.getAttribute('src'),
            'src-mobile': this.getAttribute('src-mobile'),
            'fluid-on-mobile': true,
            'width': '600px',
            'align': 'left'
        }

        return this.renderMJML(`
        <labor-adobe-section with-padding="false" section-bg-class="content-bg" padding-bottom="0">
            <mj-column>
                <labor-responsive-image
                       ${this.htmlAttributes(imgAttrs)}
                />
            </mj-column>
        </labor-adobe-section>
        `)
    }
}
