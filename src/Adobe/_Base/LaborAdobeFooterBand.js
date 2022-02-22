import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import LaborAdobeSection from './LaborAdobeSection'

registerDependencies({
    'mj-body': ['labor-adobe-footer-band'],
    'labor-adobe-footer-band': [],
})

export default class LaborAdobeFooterBand extends BodyComponent {
    static endingTag = true

    render() {
        return this.renderMJML(`
            <labor-adobe-section background-color="#fa0f00">
                <mj-column>
                    <labor-adobe-typo-headingfive padding-top="4px" padding-bottom="6px" on-background="true"><b>${this.getContent()}</b></labor-adobe-typo-headingfive>
                </mj-column>
            </labor-adobe-section>
        `)
    }
}
