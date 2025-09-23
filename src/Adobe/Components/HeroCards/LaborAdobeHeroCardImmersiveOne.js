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

    'headline': 'string',

    'cta-text': 'string,',
    'cta-href': 'string',

    'image-src': 'string',
    'image-src-mobile': 'string',
    'image-title': 'string',
    'image-alt': 'string',

    'padding-bottom': 'unit(px)',
  }

  static defaultAttributes = {
    'header-bg-class': 'content-bg',
    'section-bg-class': 'content-bg',

    'product': 'express',
    'product-color': 'red_gray',

    'headline': '',

    'cta-text': '',
    'cta-href': '',

    'image-src': '',
    'image-src-mobile': '',
    'image-title': '',
    'image-alt': '',

    'padding-bottom': styleMapping.spacings.custom.px0,
  }
  static additionalAttributes = {
    'header-additional-padding-bottom': styleMapping.spacings.vertical.px20,
    'section-padding-bottom': styleMapping.spacings.vertical.px40,
  }

  render() {
    return (
      this.renderMJML(`
        <labor-adobe-header
          product="${this.getAttribute('product')}"
          product-color="${this.getAttribute('product-color')}"
          header-bg-class="${this.getAttribute('header-bg-class')}"
          additional-padding-bottom=${LaborAdobeHeroCardImmersiveOne.additionalAttributes['header-additional-padding-bottom']}
        />
      `) +
      this.renderMJML(`
        <labor-adobe-section
          padding-bottom="${LaborAdobeHeroCardImmersiveOne.additionalAttributes['section-padding-bottom']}"
          section-bg-class="${this.getAttribute('section-bg-class')}"
          >
          <mj-column>
            <labor-adobe-typo-display-one
              responsive="displayTwo"
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
