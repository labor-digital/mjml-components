import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeProductMapping from '../AdobeProductMapping'

registerDependencies({
  'mj-column': ['labor-adobe-edex-two-col-article'],
  'labor-adobe-edex-two-col-article': [],
})

export default class LaborAdobeEdexTwoColArticle extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    '1-image-src': 'string',
    '1-image-src-mobile': 'string',
    '1-href': 'string',
    '1-headline': 'string',
    '1-category': 'string',
    '1-cta': 'string',
    '1-text': 'string',
    '1-product': 'string',
    '2-image-src': 'string',
    '2-image-src-mobile': 'string',
    '2-href': 'string',
    '2-headline': 'string',
    '2-category': 'string',
    '2-cta': 'string',
    '2-text': 'string',
    '2-product': 'string',
  }

  static defaultAttributes = {
    '1-product': '',
    '2-product': '',
  }

  headStyle = (breakpoint) => `
        .laborAdobeEdexTwoColArticle-first-elem {
            padding-left: 50px !important;
            padding-right: 15px !important;
        }
        .laborAdobeEdexTwoColArticle-second-elem {
            padding-left: 20px !important;
            padding-right: 50px !important;
        }
        .laborAdobeEdexTwoColArticle-first-elem-product {
            padding-left: 50px !important;
            padding-right: 10px !important;
        }
        .laborAdobeEdexTwoColArticle-second-elem-product {
            padding-left: 20px !important;
            padding-right: 10px !important;
        }
        @media only screen and (max-width:${breakpoint}) {
            .laborAdobeEdexTwoColArticle-first > table > tbody > tr > td {
                padding-right: 0px !important;
            }
            .laborAdobeEdexTwoColArticle-second > table > tbody > tr > td {
                padding-left: 0px !important;
            }

            .laborAdobeEdexTwoColArticle-first-elem {
                padding-left: 30px !important;
                padding-right: 30px !important;
            }
            .laborAdobeEdexTwoColArticle-second-elem {
                padding-left: 30px !important;
                padding-right: 30px !important;
            }
            .laborAdobeEdexTwoColArticle-first-elem-product {
                padding-left: 30px !important;
                padding-right: 30px !important;
            }
            .laborAdobeEdexTwoColArticle-second-elem-product {
                padding-left: 30px !important;
                padding-right: 30px !important;
            }
        }
    `

  render() {
    return this.renderMJML(`
            <labor-adobe-section with-padding="false">
                <mj-column css-class="laborAdobeEdexTwoColArticle-first" padding-right="2px" padding-bottom="100px">
                    <labor-responsive-image
                        src="${this.getAttribute('1-image-src')}"
                        src-mobile="${this.getAttribute('1-image-src-mobile')}"
                        fluid-on-mobile="true"
                        width="600px"
                        align="left"
                        target="_blank"
                        padding-bottom="${this.getAttribute('1-product') ? '40px' : '34px'}"
                        href="${this.getAttribute('1-href')}"
                        alt="${this.getAttribute('1-headline')}"
                    />
                    ${
                      this.getAttribute('1-product')
                        ? `
                        <mj-image
                            src="${
                              AdobeProductMapping.productMapping[this.getAttribute('1-product')][
                                'images'
                              ]['black']
                            }"
                            align="left"
                            width="${Math.floor(
                              parseInt(
                                AdobeProductMapping.productMapping[this.getAttribute('1-product')][
                                  'width'
                                ].replace('px', '')
                              ) / 2
                            )}px"
                            height="30px"
                            target="_blank"
                            padding-bottom="24px"
                            css-class="laborAdobeEdexTwoColArticle-first-elem-product"
                            alt="${
                              AdobeProductMapping.productMapping[this.getAttribute('1-product')][
                                'name'
                              ]
                            }"
                        />
                    `
                        : ``
                    }
                    <labor-adobe-typo-body css-class="laborAdobeEdexTwoColArticle-first-elem" padding-bottom="7px">
                        ${this.getAttribute('1-category')}
                    </labor-adobe-typo-body>
                    <labor-adobe-typo-headingthree css-class="laborAdobeEdexTwoColArticle-first-elem" padding-bottom="7px">
                        ${this.getAttribute('1-headline')}
                    </labor-adobe-typo-headingthree>
                    <labor-adobe-typo-body css-class="laborAdobeEdexTwoColArticle-first-elem" padding-bottom="30px">
                        ${this.getAttribute('1-text')}
                    </labor-adobe-typo-body>
                    <labor-adobe-secondary-cta css-class="laborAdobeEdexTwoColArticle-first-elem" type="quiet" href="${this.getAttribute(
                      '1-href'
                    )}">
                        ${this.getAttribute('1-cta')}
                    </labor-adobe-secondary-cta>
                </mj-column>
                <mj-column css-class="laborAdobeEdexTwoColArticle-second" padding-left="2px" padding-bottom="100px">
                    <labor-responsive-image
                        src="${this.getAttribute('2-image-src')}"
                        src-mobile="${this.getAttribute('2-image-src-mobile')}"
                        fluid-on-mobile="true"
                        width="600px"
                        align="left"
                        target="_blank"
                        padding-bottom="${this.getAttribute('2-product') ? '40px' : '34px'}"
                        href="${this.getAttribute('2-href')}"
                        alt="${this.getAttribute('2-headline')}"
                    />
                    ${
                      this.getAttribute('2-product')
                        ? `
                        <mj-image
                            src="${
                              AdobeProductMapping.productMapping[this.getAttribute('2-product')][
                                'images'
                              ]['black']
                            }"
                            align="left"
                            width="${Math.floor(
                              parseInt(
                                AdobeProductMapping.productMapping[this.getAttribute('2-product')][
                                  'width'
                                ].replace('px', '')
                              ) / 2
                            )}px"
                            height="30px"
                            target="_blank"
                            padding-bottom="24px"
                            css-class="laborAdobeEdexTwoColArticle-second-elem-product"
                            alt="${
                              AdobeProductMapping.productMapping[this.getAttribute('2-product')][
                                'name'
                              ]
                            }"
                        />
                    `
                        : ``
                    }
                    <labor-adobe-typo-body css-class="laborAdobeEdexTwoColArticle-second-elem" padding-bottom="7px">
                        ${this.getAttribute('2-category')}
                    </labor-adobe-typo-body>
                    <labor-adobe-typo-headingthree css-class="laborAdobeEdexTwoColArticle-second-elem" padding-bottom="7px">
                        ${this.getAttribute('2-headline')}
                    </labor-adobe-typo-headingthree>
                    <labor-adobe-typo-body css-class="laborAdobeEdexTwoColArticle-second-elem" padding-bottom="30px">
                        ${this.getAttribute('2-text')}
                    </labor-adobe-typo-body>
                    <labor-adobe-secondary-cta css-class="laborAdobeEdexTwoColArticle-second-elem" type="quiet" href="${this.getAttribute(
                      '2-href'
                    )}">
                        ${this.getAttribute('2-cta')}
                    </labor-adobe-secondary-cta>
                </mj-column>
            </labor-adobe-section>
        `)
  }
}
