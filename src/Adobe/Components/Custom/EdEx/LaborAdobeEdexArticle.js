import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeProductLogoMapping from '../../../Mapping/AdobeProductLogoMapping'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
    'mj-body': ['labor-adobe-edex-article'],
    'labor-adobe-edex-article': [],
})

export default class LaborAdobeEdexArticle extends BodyComponent {
    static endingTag = true

    static allowedAttributes = {
        'section-bg-class': 'string',
        'image-src': 'string',
        'image-src-mobile': 'string',
        'image-href': 'string',
        'href': 'string',
        'headline': 'string',
        'category': 'string',
        'cta': 'string',
        'cta-width': 'unit(px)',
        'text': 'string',
        'product': 'string',
        'secondary-cta': 'string',
        'secondary-href': 'string',
        'padding-bottom': 'unit(px)',
    }

    static defaultAttributes = {
        'section-bg-class': 'content-bg',
        'image-src-mobile': '',
        'image-href': '',
        'cta-width': '200px',
        'product': '',
        'secondary-cta': '',
        'secondary-href': '',
        'padding-bottom': '100px',
        'cta': '',
        'href': '',
    }

    render() {
        return (
            this.renderMJML(`
                <labor-adobe-section with-padding="false" padding-bottom="${this.getAttribute('product') ? styleMapping.spacings.horizontal.px40 : styleMapping.spacings.horizontal.px34 }" section-bg-class="${this.getAttribute('section-bg-class')}">
                    <mj-column>
                        <labor-responsive-image
                            src="${this.getAttribute('image-src')}"
                            src-mobile="${this.getAttribute('image-src-mobile')}"
                            fluid-on-mobile="true"
                            width="600px"
                            align="left"
                            target="_blank"
                            href="${this.getAttribute('image-href') ? this.getAttribute('image-href') : this.getAttribute('href')}"
                            alt="${this.getAttribute('headline')}"
                        />
                    </mj-column>
                </labor-adobe-section>
            `) +
            this.renderMJML(`
                <labor-adobe-section padding-bottom="${this.getAttribute('padding-bottom')}" section-bg-class="${this.getAttribute('section-bg-class')}">
                    <mj-column>
                        ${
                            this.getAttribute('product') ?
                                `
                                    <mj-image
                                        src="${AdobeProductLogoMapping.logos[this.getAttribute('product')]['images']['alt']['location']}"
                                        align="left"
                                        width="${Math.floor(parseInt(AdobeProductLogoMapping.logos[this.getAttribute('product')]['images']['alt']['width'].replace('px', '')) / 2)}px"
                                        height="30px"
                                        target="_blank"
                                        padding-bottom="${styleMapping.spacings.horizontal.px24}"
                                        alt="${AdobeProductLogoMapping.logos[this.getAttribute('product')]['name']}"
                                    />
                                ` :
                                ``
                        }
                        ${
                            this.getAttribute('category') ?
                                `
                                    <labor-adobe-edex-category padding-bottom="${styleMapping.spacings.horizontal.px12}">${this.getAttribute('category')}</labor-adobe-edex-category>
                                ` :
                                ``
                        }
                        <labor-adobe-typo-heading-three padding-bottom="${styleMapping.spacings.horizontal.px12}">${this.getAttribute('headline')}</labor-adobe-typo-heading-three>
                        <labor-adobe-typo-body padding-bottom="${this.getAttribute('href') ? styleMapping.spacings.horizontal.px40 : styleMapping.spacings.horizontal.px0}">${this.getAttribute('text')}</labor-adobe-typo-body>
                        ${
                            this.getAttribute('href') ?
                                `
                                    <labor-adobe-rounded-button type="quiet" href="${this.getAttribute('href')}" width="${this.getAttribute('cta-width')}">
                                        ${this.getAttribute('cta')}
                                    </labor-adobe-rounded-button>
                                ` :
                                ``
                        }
                        ${
                            this.getAttribute('secondary-href') ?
                                `
                                    <labor-adobe-secondary-cta padding-top="${this.getAttribute('href') ? styleMapping.spacings.horizontal.px10 : styleMapping.spacings.horizontal.px30}" type="quiet" href="${this.getAttribute('secondary-href')}">${this.getAttribute('secondary-cta')}</labor-adobe-secondary-cta>
                                ` :
                                ``
                        }
                    </mj-column>
                </labor-adobe-section>
            `)
        )
    }
}
