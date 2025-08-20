import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-body': ['labor-adobe-hero-card-split-two'],
  'labor-adobe-hero-card-split-two': [],
})

export default class LaborAdobeHeroCardSplitTwo extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'section-bg-class': 'string',

    'header-image-src': 'string',
    'header-alt': 'string',
    'header-height': 'enum(22px,28px,30px,34px,42px)',
    'header-width': 'unit(px,%)',

    'pre-text': 'string',
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
                header-bg-class="content-bg"
                padding-bottom="20px"
            />
           `) +
      this.renderMJML(`
             <labor-adobe-section padding-bottom="60px">
                <mj-column>
                    <labor-adobe-typo-detail padding-bottom="20px">
                      ${this.getAttribute('pre-text')}
                    </labor-adobe-typo-detail>
                    <labor-adobe-typo-display-one
                      padding-bottom="40px"
                    >
                      ${this.getAttribute('headline')}
                    </labor-adobe-typo-display-one>
                   
                    <labor-adobe-button
                      href="${this.getAttribute('cta-href')}"
                    >
                    ${this.getAttribute('cta-text')}
                    </labor-adobe-button>
                  </mj-column>    
               </labor-adobe-section>
            `) +
      this.renderMJML(`
            <labor-adobe-section with-padding="false">
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
