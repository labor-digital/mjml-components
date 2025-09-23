import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-body': ['labor-adobe-two-col-img-text-section'],
  'labor-adobe-two-col-img-text-section': [
    'labor-adobe-typo-body',
    'labor-adobe-typo-heading-four',
    'labor-adobe-button',
  ],
})

export default class LaborAdobeTwoColImgTextSection extends BodyComponent {
  static endingTag = false

  static allowedAttributes = {
    'section-bg-class': 'string',
    'direction': 'enum(ltr,rtl)',
    'image-src': 'string',
    'image-src-mobile': 'string',

    // when setting padding-bottom keep the padding-bottom of the columns in mind
    'padding-top': 'unit(px,%)',
    'padding-bottom': 'unit(px,%)',
    'padding-bottom-cols': 'unit(px,%)',
  }

  static defaultAttributes = {
    'section-bg-class': 'content-bg',
    'direction': 'ltr',
    'image-src': '',
    'image-src-mobile': '',

    'with-padding': true,
    'with-padding-image': true,

    'padding-bottom': styleMapping.spacings.vertical.px20,
    'padding-bottom-cols': styleMapping.spacings.vertical.px40,
  }

  headStyle = (breakpoint) => `
      @media only screen and (max-width: ${breakpoint}) {
        .labor-adobe-edex-two-col-img-text-section-responsive > table > tbody > tr > td {
          padding-left: ${styleMapping.grids.mobile.contentSpacing} !important;
          padding-right: ${styleMapping.grids.mobile.contentSpacing} !important;
        }
      }
    `

  render() {
    const defaultPadding = this.getAttribute('with-padding') ? styleMapping.grids.desktop.contentSpacing : 0
    const imageDefaultPadding = this.getAttribute('with-padding-image') ? styleMapping.grids.desktop.contentSpacing : 0

    let imagePadding = `0 0 0 ${imageDefaultPadding}`
    let textPadding = `0 ${defaultPadding} 0 0`

    if ('rtl' === this.getAttribute('direction')) {
      imagePadding = `0 ${imageDefaultPadding} 0 0`
      textPadding = `0 0 0 ${defaultPadding}`
    }

    return this.renderMJML(`
      <labor-adobe-section
        direction="${this.getAttribute('direction')}"
        with-padding="false"
        padding-bottom="${this.getAttribute('padding-bottom')}"
        padding-top="${this.getAttribute('padding-top')}"
        section-bg-class="${this.getAttribute('section-bg-class')}"
      >
        <mj-column 
          vertical-align="middle"
          css-class="${this.getAttribute('with-padding') ? 'labor-adobe-edex-two-col-img-text-section-responsive' : ''}"
          padding="${imagePadding}"
          padding-bottom="${this.getAttribute('padding-bottom-cols')}"
        >
          <labor-responsive-image 
            src="${this.getAttribute('image-src')}"
            src-mobile="${this.getAttribute('image-src-mobile')}"
            full-width="full-width"
          />
        </mj-column>
        <mj-column 
          vertical-align="middle" 
          css-class="${this.getAttribute('with-padding') ? 'labor-adobe-edex-two-col-img-text-section-responsive' : ''}"
          padding="${textPadding}"
          padding-bottom="${this.getAttribute('padding-bottom-cols')}"
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
