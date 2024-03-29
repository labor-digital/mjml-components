import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'

registerDependencies({
    'mj-body': ['labor-adobe-footer-band'],
    'labor-adobe-footer-band': [],
})

export default class LaborAdobeFooterBand extends BodyComponent {
    static endingTag = true

    static allowedAttributes = {
        'bg-color': 'string',
        'color': 'string',
        'padding-top': 'unit(px,%)',
        'padding-bottom': 'unit(px,%)'
    }

    static defaultAttributes = {
        'bg-color': '#eb1000',
        'color': '#ffffff',
        'font-size': '16px',
        'font-weight': 800,
        'line-height': '20px',
        'align': 'left',
        'padding-top': '5px',
        'padding-bottom': '5px'
    }

    render() {

        let typoAttrs = {
            'color': this.getAttribute('color'),
            'font-size': this.getAttribute('font-size'),
            'font-weight': this.getAttribute('font-weight'),
            'line-height': this.getAttribute('line-height'),
            'align': this.getAttribute('align'),
            'padding-top': this.getAttribute('padding-top'),
            'padding-bottom': this.getAttribute('padding-bottom'),
        }

        return this.renderMJML(`
            <labor-adobe-section background-color="${this.getAttribute('bg-color')}">
                <mj-column>
                    <mj-text ${this.htmlAttributes(typoAttrs)} >
                        ${this.getContent()}
                    </mj-text>
                </mj-column>
            </labor-adobe-section>
        `)
    }
}
