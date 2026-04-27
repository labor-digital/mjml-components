import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-hero-card-simple-two',
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
    'pre-text': {
      type: 'string',
      default: '',
    },
    'headline': {
      type: 'string',
      default: '',
    },
    'padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.vertical.px60,
    },
    'header-additional-padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.vertical.px20,
    },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

export class LaborAdobeHeroCardSimpleTwo extends BodyComponent {
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
            additional-padding-bottom=${this.getAttribute('header-additional-padding-bottom')}
          />`

    return (
      this.renderMJML(header) +
      this.renderMJML(`
        <labor-adobe-section
          padding-bottom="${this.getAttribute('padding-bottom')}"
          section-bg-class="${this.getAttribute('section-bg-class')}"
         >
          <mj-column>
            <labor-adobe-typo-detail>
              ${this.getAttribute('pre-text')}
            </labor-adobe-typo-detail>
            <labor-adobe-typo-display-one
              padding-bottom="0"
            >
              ${this.getAttribute('headline')}
            </labor-adobe-typo-display-one>
          </mj-column>    
        </labor-adobe-section>
      `)
    )
  }
}
