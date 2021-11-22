import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeProductMapping from '../AdobeProductMapping'

registerDependencies({
    'mj-column': ['labor-adobe-edex-article'],
    'labor-adobe-edex-article': [],
})

export default class LaborAdobeEdexArticle extends BodyComponent {
    static endingTag = true

    static allowedAttributes = {
        'image-src': 'string',
        'image-src-mobile': 'string',
        'href': 'string',
        'headline': 'string',
        'category': 'string',
        'cta': 'string',
        'cta-width': 'unit(px)',
        'text': 'string',
        'product': 'string',
        'secondary-cta': 'string',
        'secondary-href': 'string',
    }

    static defaultAttributes = {
        'image-src-mobile': '',
        'cta-width': '180px',
        'product': '',
        'secondary-cta': '',
        'secondary-href': '',
    }

    render() {
        return (
            this.renderMJML(`
            <labor-adobe-section with-padding="false" padding-bottom="${
                this.getAttribute('product') ? '40px' : '34px'
            }">
                <mj-column>
                    <labor-responsive-image
                        src="${this.getAttribute('image-src')}"
                        src-mobile="${this.getAttribute('image-src-mobile')}"
                        fluid-on-mobile="true"
                        width="600px"
                        align="left"
                        target="_blank"
                        href="${this.getAttribute('href')}"
                        alt="${this.getAttribute('headline')}"
                    />
                </mj-column>
            </labor-adobe-section>
        `) +
            this.renderMJML(`
            <labor-adobe-section padding-bottom="100px">
                <mj-column>
                    ${
                this.getAttribute('product')
                    ? `
                        <mj-image
                            src="${
                        AdobeProductMapping.productMapping[this.getAttribute('product')][
                            'images'
                            ]['black']
                    }"
                            align="left"
                            width="${Math.floor(
                    parseInt(
                        AdobeProductMapping.productMapping[this.getAttribute('product')][
                            'width'
                            ].replace('px', '')
                    ) / 2
                    )}px"
                            height="30px"
                            target="_blank"
                            padding-bottom="24px"
                            alt="${
                        AdobeProductMapping.productMapping[this.getAttribute('product')][
                            'name'
                            ]
                    }"
                        />
                    `
                    : ``
            }
                    ${
                this.getAttribute('category')
                    ? `
                        <labor-adobe-typo-body padding-bottom="7px">${this.getAttribute(
                    'category'
                    )}</labor-adobe-typo-body>
                    `
                    : ``
            }
                    <labor-adobe-typo-headingthree padding-bottom="7px">${this.getAttribute(
                'headline'
            )}</labor-adobe-typo-headingthree>
                    <labor-adobe-typo-body padding-bottom="33px">${this.getAttribute(
                'text'
            )}</labor-adobe-typo-body>
                    ${
                this.getAttribute('secondary-href')
                    ? `
                        <labor-adobe-secondary-cta type="quiet" href="${this.getAttribute(
                    'href'
                    )}">${this.getAttribute('cta')}</labor-adobe-secondary-cta>
                        <labor-adobe-secondary-cta padding-top="10px" type="quiet" href="${this.getAttribute(
                    'secondary-href'
                    )}">${this.getAttribute('secondary-cta')}</labor-adobe-secondary-cta>
                    `
                    : `
                        <labor-adobe-rounded-button type="quiet" href="${this.getAttribute(
                    'href'
                    )}" width="${this.getAttribute('cta-width')}">${this.getAttribute(
                    'cta'
                    )}</labor-adobe-rounded-button>
                    `
            }
                </mj-column>
            </labor-adobe-section>
        `)
        )
    }
}
