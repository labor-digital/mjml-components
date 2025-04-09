import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
    'mj-body': ['labor-adobe-hero-card-simple-one'],
    'labor-adobe-hero-card-simple-one': [],
})

export default class LaborAdobeHeroCardSimpleOne extends BodyComponent {

    static endingTag = true

    static allowedAttributes = {
        'section-bg-class': 'string',

        'header-image-src': 'string',
        'header-alt': 'string',
        'header-height': 'enum(22px,28px,30px,34px,42px)',
        'header-width':  'unit(px,%)',

        'headline': 'string',

        'cta-text': 'string,',
        'cta-href': 'string',
    }

    static defaultAttributes = {
        'section-bg-class': 'content-bg',
    }

    render() {
        return (
            this.renderMJML(`
            <labor-adobe-header
                src="${this.getAttribute('header-image-src')}"
                height="${this.getAttribute('header-height')}"
                width="${this.getAttribute('header-width')}"
                alt="${this.getAttribute('header-alt')}"
                header-bg-class="content-bg"
                padding-bottom="20px"
            />
           `)
            + this.renderMJML(`
             <labor-adobe-section padding-bottom="100px">
                <mj-column>
                    <labor-adobe-typo-display-one
                      responsive="true"
                    >
                      ${this.getAttribute('headline')}
                    </labor-adobe-typo-display-one>
                    
                    <labor-adobe-typo-body>
                      ${this.getContent()}
                    </labor-adobe-typo-body>
                    
                    <labor-adobe-button
                      href="${this.getAttribute('cta-href')}"
                    >
                    ${this.getAttribute('cta-text')}
                    </labor-adobe-button>    
                  </mj-column>    
               </labor-adobe-section>
            `)
        )
    }
}
