import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'

registerDependencies({
    'mj-body': ['labor-adobe-footer-red-band'],
    'labor-adobe-footer-red-band': [],
})

export default class LaborAdobeFooterRedBand extends BodyComponent {
    static endingTag = true

    render() {
        return this.renderMJML(`<labor-adobe-footer-band padding-top="4px" padding-bottom="6px">${this.getContent()}</labor-adobe-footer-band>`)
    }
}
