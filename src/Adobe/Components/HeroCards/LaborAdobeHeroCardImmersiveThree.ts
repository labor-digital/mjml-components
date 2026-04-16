import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-hero-card-immersive-three',
  attributes: {
    'header-bg-class': {
      type: 'string',
      default: 'content-bg',
    },
    'section-bg-class': {
      type: 'string',
      default: 'content-bg',
    },
    'product': {
      type: 'string',
      default: 'express',
    },
    'product-color': {
      type: 'enum(red_black,red_gray,red_white,white_black)',
      default: 'red_gray',
    },
    'product-src-overwrite': {
      type: 'string',
    },
    'product-height-overwrite': {
      type: 'unit(px)',
    },
    'product-width-overwrite': {
      type: 'unit(px)',
    },
    'header-alt': {
      type: 'string',
    },
    'header-title': {
      type: 'string',
    },
    'headline': {
      type: 'string',
      default: '',
    },
    'cta-text': {
      type: 'string',
      default: '',
    },
    'cta-href': {
      type: 'string',
      default: '',
    },
    'image-src': {
      type: 'string',
      default: '',
    },
    'image-src-mobile': {
      type: 'string',
      default: '',
    },
    'image-title': {
      type: 'string',
      default: '',
    },
    'image-alt': {
      type: 'string',
      default: '',
    },
    'padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.custom.px0,
    },
    'header-additional-padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.vertical.px20,
    },
    'section-padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.vertical.px40,
    },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobeHeroCardImmersiveThree extends BodyComponent {
  static endingTag = true



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
