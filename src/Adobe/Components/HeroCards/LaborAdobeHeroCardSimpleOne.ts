import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-hero-card-simple-one',
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
    'padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.vertical.px100,
    },
    'header-additional-padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.vertical.px20,
    },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

export class LaborAdobeHeroCardSimpleOne extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options

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
