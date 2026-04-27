import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-pod',
  attributes: {
    'section-bg-class': {
      type: 'string',
      default: 'content-bg',
    },
    'image-src': {
      type: 'string',
    },
    'image-src-mobile': {
      type: 'string',
    },
    'image-with-padding': {
      type: 'boolean',
      default: false,
    },
    'image-href': {
      type: 'string',
    },
    'headline': {
      type: 'string',
    },
    'product': {
      type: 'string',
      default: '',
    },
    'product-color': {
      type: 'string',
      default: 'gray',
    },
    'product-type': {
      type: 'string',
    },
    'product-height': {
      type: 'string',
      default: '35px',
    },
    'custom-category': {
      type: 'string',
    },
    'primary-cta': {
      type: 'string',
    },
    'primary-cta-width': {
      type: 'unit(px)',
      default: '200px',
    },
    'primary-cta-href': {
      type: 'string',
    },
    'secondary-cta': {
      type: 'string',
    },
    'secondary-cta-href': {
      type: 'string',
    },
    'padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.horizontal.px100,
    },
    'padding-top': {
      type: 'unit(px)',
      default: styleMapping.spacings.custom.px0,
    },
    'content-section-padding-top': {
      type: 'unit(px)',
    },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

export class LaborAdobePod extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options

  render() {
    const srcMobileAttr = this.getAttribute('image-src-mobile') ? `src-mobile="${this.getAttribute('image-src-mobile')}"` : '';

    return (
      (this.getAttribute('image-src')
        ? this.renderMJML(`
          <labor-adobe-section 
              with-padding="${this.getAttribute('image-with-padding') === true}"
              padding-bottom=${styleMapping.spacings.horizontal.px40}
              padding-top="${this.getAttribute('padding-top')}"
              section-bg-class="${this.getAttribute('section-bg-class')}"
          >
            <mj-column>            
              <labor-responsive-image
                  src="${this.getAttribute('image-src')}"
                  ${srcMobileAttr}
                  fluid-on-mobile="true"
                  width="600px"
                  align="left"
                  target="_blank"
                  href="${this.getAttribute('primary-cta-href')}"
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
