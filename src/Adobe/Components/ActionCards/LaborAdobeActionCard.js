import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping;

registerDependencies({
  'mj-body': ['labor-adobe-action-card'],
  'labor-adobe-action-card': [
    'labor-responsive-image',
    'labor-adobe-typo-body',
    'labor-adobe-typo-heading-three',
    'labor-adobe-typo-heading-four',
    'labor-adobe-link',
  ],
})

export default class LaborAdobeActionCard extends BodyComponent {
  static allowedAttributes = {
    'section-bg-class': 'string',

    'image-src': 'string',
    'image-src-mobile': 'string',
    'image-alt': 'string',

    'padding-top': 'unit(px)',
    'padding-bottom': 'unit(px)',
  }

  static defaultAttributes = {
    'section-bg-class': 'content-bg',

    'padding-top': styleMapping.spacings.custom.px0,
    'padding-bottom': styleMapping.spacings.custom.px0,
  }

  static additionalAttributes = {
    'image-section-padding': styleMapping.spacings.vertical.px40,
    'image-section-padding-mobile': styleMapping.spacings.custom.px30,
    'padding-left-right': styleMapping.spacings.custom.px50,
    'inner-padding-top-bottom': styleMapping.spacings.vertical.px60,
    'border-radius-top-only': '8px 8px 0 0',
    'border-radius-bottom-only': '0 0 8px 8px',
    'border-radius-both': '8px',
    'column-background-color': styleMapping.labor.colors.actionCardBackgroundColor.hex
  }

  headStyle = (breakpoint) => `
    @media only screen and (max-width: ${breakpoint}) {
      .labor-adobe-action-card-image > table > tbody > tr > td {
        padding-top: ${LaborAdobeActionCard.additionalAttributes['image-section-padding-mobile']} !important;
      }
    }
  `

  render() {
    let upperSectionAttrs = {}
    upperSectionAttrs['padding-top'] = this.getAttribute('padding-top')

    let lowerSectionAttrs = {}
    lowerSectionAttrs['padding-top'] = this.getAttribute('image-src') ? "0" : this.getAttribute('padding-top')
    lowerSectionAttrs['padding-bottom'] = this.getAttribute('padding-bottom')

    let imageSection = this.getAttribute('image-src') ?
      `<labor-adobe-section
        with-padding="true"
        section-bg-class="${this.getAttribute('section-bg-class')}"
        ${this.htmlAttributes(upperSectionAttrs)}
      >
        <mj-column 
          border-radius="${LaborAdobeActionCard.additionalAttributes['border-radius-top-only']}"
          padding-top="0"
        >
          <labor-responsive-image
            src="${this.getAttribute('image-src')}"
            src-mobile="${this.getAttribute('image-src-mobile')}"
            alt="${this.getAttribute('image-alt')}"
            border-radius="${LaborAdobeActionCard.additionalAttributes['border-radius-top-only']}"
            padding-bottom="0"
            fluid-on-mobile="true"
          />
        </mj-column>
      </labor-adobe-section>`
      : ``

    return (imageSection ?
      this.renderMJML(`${imageSection}`) : ``)
      + this.renderMJML(`
      <labor-adobe-section
        with-padding="true"
        section-bg-class="${this.getAttribute('section-bg-class')}"
        ${this.htmlAttributes(lowerSectionAttrs)}
      >
        <mj-column 
          background-color=${LaborAdobeActionCard.additionalAttributes['column-background-color']}
          border-radius=
            ${imageSection 
              ? LaborAdobeActionCard.additionalAttributes['border-radius-top-only']
              : LaborAdobeActionCard.additionalAttributes['border-radius-both']}
          padding-top=${this.getAttribute('image-src') ? LaborAdobeActionCard.additionalAttributes['image-section-padding'] : LaborAdobeActionCard.additionalAttributes['inner-padding-top-bottom']}
          padding-bottom=${LaborAdobeActionCard.additionalAttributes['inner-padding-top-bottom']}
          padding-left=${LaborAdobeActionCard.additionalAttributes['padding-left-right']}
          padding-right=${LaborAdobeActionCard.additionalAttributes['padding-left-right']}
          css-class="labor-adobe-action-card-image"
        >
          ${this.renderChildren(this.props.children, {
            rawXML: true,
            renderer: (component) => component.render,
          })}
        </mj-column>
      </labor-adobe-section>
    `)
  }
}