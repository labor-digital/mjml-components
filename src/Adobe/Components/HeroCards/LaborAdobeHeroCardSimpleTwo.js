import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
    'mj-body': ['labor-adobe-hero-card-simple-two'],
    'labor-adobe-hero-card-simple-two': [],
})

export default class LaborAdobeHeroCardSimpleTwo extends BodyComponent {

    static endingTag = true

    static allowedAttributes = {
        'section-bg-class': 'string',

        'header-image-src': 'string',
        'header-alt': 'string',
        'header-height': 'enum(22px,28px,30px,34px,42px)',
        'header-width':  'unit(px,%)',

        'pre-text': 'string',
        'headline': 'string',
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
             <labor-adobe-section padding-bottom="60px">
                <mj-column>
                    <labor-adobe-typo-detail padding-bottom="20px">
                      ${this.getAttribute('pre-text')}
                    </labor-adobe-typo-detail>
                    <labor-adobe-typo-display-one>
                      ${this.getAttribute('headline')}
                    </labor-adobe-typo-display-one>
                  </mj-column>    
               </labor-adobe-section>
            `)
        )
    }
}
