import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeRedStyleMapping from '../../_Styles/RED/AdobeRedStyleMapping'
import { md5 } from 'js-md5'
import AdobeProductMapping from '../../AdobeProductMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
    'mj-body': ['labor-adobe-pod'],
    'labor-adobe-pod': [],
})

export default class LaborAdobePod extends BodyComponent {
    static endingTag = true

    static allowedAttributes = {
        'section-bg-class': 'string',

        'image-src': 'string',
        'image-src-mobile': 'string',
        'image-with-padding': 'boolean',
        'image-href': 'string',

        'headline': 'string',

        'product': 'string',
        'custom-category': 'string',

        'primary-cta': 'string',
        'primary-cta-width': 'unit(px)',
        'primary-cta-href': 'string',

        'secondary-cta': 'string',
        'secondary-cta-href': 'string',
        'padding-bottom': 'unit(px)',

        'z-formation-align': 'enum(left, right)',
    }

    static defaultAttributes = {
        'section-bg-class': 'content-bg',

        'image-with-padding': 'false',
        'primary-cta-width': '200px',
        'padding-bottom': styleMapping.spacings.horizontal.px100,
    }

    static calculateZPodPaddings = () => {

      const desktopLeftPadding =
        this.getAttribute('z-formation-align') === 'left' ? "0px"
          : (this.getAttribute('z-formation-align') === 'right' ? "0px": styleMapping.grids.desktop.contentSpacing );

      const    mobileLeftPadding=
        this.getAttribute('z-formation-align') === 'left' ? "0px"
          : (this.getAttribute('z-formation-align') === 'right' ? "0px": styleMapping.grids.mobile.contentSpacing );

      const desktopRightPadding=
        this.getAttribute('z-formation-align') === 'left' ? "0px"
         : (this.getAttribute('z-formation-align') === 'right' ? "0px": styleMapping.grids.desktop.contentSpacing );

      const mobileRightPadding=
        this.getAttribute('z-formation-align') === 'left' ? "0px"
          : (this.getAttribute('z-formation-align') === 'right' ? "0px": styleMapping.grids.desktop.contentSpacing );

    }

    render() {
        return (
            (
                this.getAttribute('image-src') ?
                    this.renderMJML(`
                        <labor-adobe-section 
                            with-padding="${this.getAttribute('image-with-padding')}"
                            padding-bottom=${styleMapping.spacings.horizontal.px40}
                            section-bg-class="${this.getAttribute('section-bg-class')}"
                        >
                            <mj-column>            
                                <labor-responsive-image
                                    src="${this.getAttribute('image-src')}"
                                    src-mobile="${this.getAttribute('image-src-mobile')}"
                                    fluid-on-mobile="true"
                                    width="600px"
                                    align="left"
                                    target="_blank"
                                    href="${this.getAttribute('image-href')}"
                                    alt="${this.getAttribute('headline')}"
                                />
                            </mj-column>
                        </labor-adobe-section>           
                    `) : ``
            )

            + this.renderMJML(`
                <labor-adobe-section
                    with-padding="true"
                    padding-bottom="${this.getAttribute('padding-bottom')}"
                    section-bg-class="${this.getAttribute('section-bg-class')}"
                    padding-top="${this.getAttribute('image-src') ? styleMapping.spacings.horizontal.px0 :  styleMapping.spacings.horizontal.px100}"
                >
                    <mj-column>
                    
                        ${this.getAttribute('product') ? `
                            <mj-image
                                src="${AdobeProductMapping.productMapping[this.getAttribute('product')]['images']['black']}"
                                align="left"
                                width="${Math.floor(parseInt(AdobeProductMapping.productMapping[this.getAttribute('product')]['width'].replace('px', '')) / 2)}px"
                                height="30px"
                                target="_blank"
                                padding-bottom="${styleMapping.spacings.horizontal.px24}"
                                alt="${AdobeProductMapping.productMapping[this.getAttribute('product')]['name']}"
                            />` : ``
                        }
                        
                        ${this.getAttribute('category') ? `
                            <labor-adobe-typo-body
                                padding-bottom="${styleMapping.spacings.horizontal.px7}"
                            >
                                ${this.getAttribute('category')}
                            </labor-adobe-typo-body>` : ``
                        }
                        
                        ${this.getAttribute('headline') ? `
                            <labor-adobe-typo-heading-three
                                padding-bottom="${styleMapping.spacings.horizontal.px12}"
                            >
                                ${this.getAttribute('headline')}
                            </labor-adobe-typo-heading-three>` : ``
                        }
                    
                        <labor-adobe-typo-body
                            padding-bottom="${styleMapping.spacings.horizontal.px40}"
                        >
                            ${this.getContent()}
                        </labor-adobe-typo-body>
  
                        ${this.getAttribute('primary-cta-href') ? `
                              <labor-adobe-rounded-button
                                  type="quiet"
                                  href="${this.getAttribute('primary-cta-href')}"
                                  width="${this.getAttribute('primary-cta-width')}"               
                              >
                                  ${this.getAttribute('primary-cta')}
                              </labor-adobe-rounded-button>` : ``
                    }
  
                        ${this.getAttribute('secondary-cta-href') ? `
                              <labor-adobe-secondary-cta
                                  type="normal"
                                  href="${this.getAttribute('secondary-cta-href')}"
                              >
                                  ${this.getAttribute('secondary-cta')}
                              </labor-adobe-secondary-cta>` : ``
                    }
                    </mj-column>
                </labor-adobe-section>
              `)
        )
    }
}
