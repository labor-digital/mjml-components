import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-body': ['labor-adobe-hero-card-immersive-one'],
  'labor-adobe-hero-card-immersive-one': [],
})

export default class LaborAdobeHeroCardImmersiveOne extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'header-bg-class': 'string',
    'section-bg-class': 'string',

    'product': 'string',
    'product-color': 'enum(red_black,red_gray,red_white,white_black)',

    'product-src-overwrite': 'string',
    'product-height-overwrite': 'unit(px)',
    'product-width-overwrite': 'unit(px)',

    'header-alt': 'string',
    'header-title': 'string',

    'headline': 'string',

    'cta-text': 'string,',
    'cta-href': 'string',
    'cta-type': 'enum(standard,inverted)',

    'image-src': 'string',
    'image-src-mobile': 'string',
    'image-title': 'string',
    'image-alt': 'string',

    'padding-bottom': 'unit(px)',

    'header-additional-padding-bottom': 'unit(px)',
    'section-padding-bottom': 'unit(px)',
  }

  static defaultAttributes = {
    'header-bg-class': 'content-bg',
    'section-bg-class': 'content-bg',

    'product': 'express',
    'product-color': 'red_gray',

    'headline': '',

    'cta-text': '',
    'cta-href': '',
    'cta-type': 'standard',

    'image-src': '',
    'image-src-mobile': '',
    'image-title': '',
    'image-alt': '',

    'padding-bottom': styleMapping.spacings.custom.px0,

    'header-additional-padding-bottom': styleMapping.spacings.vertical.px20,
    'section-padding-bottom': styleMapping.spacings.vertical.px40,
  }



  render() {
    let header =
      this.getAttribute('product-src-overwrite')
        ? `<labor-adobe-header
            product-src-overwrite="${this.getAttribute('product-src-overwrite')}"
            product-height-overwrite="${this.getAttribute('product-height-overwrite')}"
            product-width-overwrite="${this.getAttribute('product-width-overwrite')}"
            alt="${this.getAttribute('header-alt') ?? ''}"
            title="${this.getAttribute('header-title') ?? ''}"
            header-bg-class="${this.getAttribute('header-bg-class')}"
            additional-padding-bottom=${this.getAttribute('header-additional-padding-bottom')}
          />`
        : `<labor-adobe-header
            product="${this.getAttribute('product')}"
            product-color="${this.getAttribute('product-color')}"
            header-bg-class="${this.getAttribute('header-bg-class')}"
            additional-padding-bottom=${this.getAttribute('header-additional-padding-bottom')}
          />`

    return (
      this.renderMJML(header) +
      this.renderMJML(`
        <labor-adobe-section
          padding-bottom="${this.getAttribute('section-padding-bottom')}"
          section-bg-class="${this.getAttribute('section-bg-class')}"
          >
          <mj-column>
            <labor-adobe-typo-display-one
              on-background="true"
            >
              ${this.getAttribute('headline')}
            </labor-adobe-typo-display-one>
            
            <labor-adobe-typo-body
             on-background="true"
             >
              ${this.getContent()}
            </labor-adobe-typo-body>
            
            <labor-adobe-button
              href="${this.getAttribute('cta-href')}"
              padding-bottom="0"
              type="${this.getAttribute('cta-type')}"
            >
            ${this.getAttribute('cta-text')}
            </labor-adobe-button>
          </mj-column>    
        </labor-adobe-section>
      `) +
      this.renderMJML(`
        <labor-adobe-section
          with-padding="false"
          padding-bottom="${this.getAttribute('padding-bottom')}"
          section-bg-class="${this.getAttribute('section-bg-class')}"
        >
          <mj-column>
            <labor-responsive-image
              src="${this.getAttribute('image-src')}"
              src-mobile="${this.getAttribute('image-src-mobile')}"
              fluid-on-mobile="true"
              width="600px"
              align="left"
              alt="${this.getAttribute('image-alt')}"
              title="${this.getAttribute('image-title')}"
            />
          </mj-column>
        </labor-adobe-section>
      `)
    )
  }
}
