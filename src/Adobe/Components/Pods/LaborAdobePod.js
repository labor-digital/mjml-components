import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

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
    'product-color': 'string',
    'product-type': 'string',

    'custom-category': 'string',

    'primary-cta': 'string',
    'primary-cta-width': 'unit(px)',
    'primary-cta-href': 'string',

    'secondary-cta': 'string',
    'secondary-cta-href': 'string',

    'padding-bottom': 'unit(px)',
    'padding-top': 'unit(px)',
    'content-section-padding-top': 'unit(px)',
  }

  static defaultAttributes = {
    'section-bg-class': 'content-bg',

    'product': '',
    'product-color': 'gray',
    'product-height': '35px',

    'image-with-padding': 'false',
    'primary-cta-width': '200px',

    'padding-bottom': styleMapping.spacings.horizontal.px100,
    'padding-top': styleMapping.spacings.custom.px0,
  }

  render() {
    return (
      (this.getAttribute('image-src')
        ? this.renderMJML(`
          <labor-adobe-section 
              with-padding="${this.getAttribute('image-with-padding')}"
              padding-bottom=${styleMapping.spacings.horizontal.px40}
              padding-top="${this.getAttribute('padding-top')}"
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
                    `)
        : ``) +
      this.renderMJML(`
                <labor-adobe-section
                    with-padding="true"
                    padding-bottom="${this.getAttribute('padding-bottom')}"
                    section-bg-class="${this.getAttribute('section-bg-class')}"
                    padding-top="${
                      this.getAttribute('image-src')
                        ? styleMapping.spacings.horizontal.px0
                        : this.getAttribute('content-section-padding-top')
                          ? this.getAttribute('content-section-padding-top')
                          : styleMapping.spacings.horizontal.px100
                    }"
                >
                    <mj-column>
                    
                        ${
                          this.getAttribute('product')
                            ? 
                            `<labor-adobe-product-logo
                                product="${this.getAttribute('product')}"
                                product-type="regular"
                                product-color="${this.getAttribute('product-color')}"
                              />`
                            : ``
                        }
                        
                        ${
                          this.getAttribute('category')
                            ? `
                            <labor-adobe-typo-body
                                padding-bottom="${styleMapping.spacings.horizontal.px7}"
                            >
                                ${this.getAttribute('category')}
                            </labor-adobe-typo-body>`
                            : ``
                        }
                        
                        ${
                          this.getAttribute('headline')
                            ? `
                            <labor-adobe-typo-heading-three>
                                ${this.getAttribute('headline')}
                            </labor-adobe-typo-heading-three>`
                            : ``
                        }
                    
                        <labor-adobe-typo-body
                            padding-bottom="${styleMapping.spacings.horizontal.px40}"
                        >
                            ${this.getContent()}
                        </labor-adobe-typo-body>
  
                        ${
                          this.getAttribute('primary-cta-href')
                            ? `
                              <labor-adobe-button
                                  type="quiet"
                                  href="${this.getAttribute('primary-cta-href')}"
                                  width="${this.getAttribute('primary-cta-width')}"   
                                  padding-bottom="0"            
                              >
                                  ${this.getAttribute('primary-cta')}
                              </labor-adobe-button>`
                            : ``
                        }
  
                        ${
                          this.getAttribute('secondary-cta-href')
                            ? `
                              <labor-adobe-link
                                  type="standard"
                                  href="${this.getAttribute('secondary-cta-href')}"
                                  padding-bottom="0"       
                              >
                                  ${this.getAttribute('secondary-cta')}
                              </labor-adobe-link>`
                            : ``
                        }
                    </mj-column>
                </labor-adobe-section>
              `)
    )
  }
}
