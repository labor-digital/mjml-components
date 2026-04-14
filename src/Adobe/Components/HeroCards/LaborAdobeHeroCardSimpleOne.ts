import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-body': ['labor-adobe-hero-card-simple-one'],
  'labor-adobe-hero-card-simple-one': [],
})

export default class LaborAdobeHeroCardSimpleOne extends BodyComponent {
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

    'padding-bottom': 'unit(px)',
    'header-additional-padding-bottom' : 'unit(px)',
  }

  static defaultAttributes = {
    'header-bg-class': 'content-bg',
    'section-bg-class': 'content-bg',

    'product': 'express',
    'product-color': 'red_gray',

    'headline': '',
    'cta-text': '',
    'cta-href': '',

    'padding-bottom': styleMapping.spacings.vertical.px100,
    'header-additional-padding-bottom': styleMapping.spacings.vertical.px20,
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
            additional-padding-bottom=${this.getAttribute('header-additional-padding-bottom') }
          />`

    return (
      this.renderMJML(header) +
      this.renderMJML(`
        <labor-adobe-section
          padding-bottom="${this.getAttribute('padding-bottom')}"
          section-bg-class="${this.getAttribute('section-bg-class')}"
        >
          <mj-column>
            <labor-adobe-typo-display-one>
              ${this.getAttribute('headline')}
            </labor-adobe-typo-display-one>
            
            <labor-adobe-typo-body>
              ${this.getContent()}
            </labor-adobe-typo-body>
             
            <labor-adobe-button
              href="${this.getAttribute('cta-href')}"
              padding-bottom="0"
            >
              ${this.getAttribute('cta-text')}
            </labor-adobe-button>    
          </mj-column>    
        </labor-adobe-section>
      `)
    )
  }
}
