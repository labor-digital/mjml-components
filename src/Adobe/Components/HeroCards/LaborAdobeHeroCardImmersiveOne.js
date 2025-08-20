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
    'section-bg-class': 'string',

    'header-image-src': 'string',
    'header-alt': 'string',
    'header-height': 'enum(22px,28px,30px,34px,42px)',
    'header-width': 'unit(px,%)',

    'headline': 'string',

    'cta-text': 'string,',
    'cta-href': 'string',

    'image-src': 'string',
    'image-src-mobile': 'string',
    'image-alt': 'string',
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
                header-bg-class="${this.getAttribute('section-bg-class')}"
                padding-bottom="20px"
            />
           `) +
      this.renderMJML(`
             <labor-adobe-section padding-bottom="40px" section-bg-class="${this.getAttribute('section-bg-class')}">
                <mj-column>
                    <labor-adobe-typo-display-one
                      responsive="true"
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
                    >
                    ${this.getAttribute('cta-text')}
                    </labor-adobe-button>
                  </mj-column>    
               </labor-adobe-section>
            `) +
      this.renderMJML(`
            <labor-adobe-section with-padding="false" section-bg-class="${this.getAttribute('section-bg-class')}">
              <mj-column>
                <labor-responsive-image
                src="${this.getAttribute('image-src')}"
                src-mobile="${this.getAttribute('image-src-mobile')}"
                fluid-on-mobile="true"
                width="600px"
                align="left"
                />
              </mj-column>
            </labor-adobe-section>
          `)
    )
  }
}
