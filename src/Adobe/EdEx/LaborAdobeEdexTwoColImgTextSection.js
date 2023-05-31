import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import LaborAdobeSection from '../_Base/LaborAdobeSection'

registerDependencies({
  'mj-body': ['labor-adobe-edex-two-col-img-text-section'],
  'labor-adobe-header': [],
})

export default class LaborAdobeEdexTwoColImgTextSection extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'section-bg-class': 'string',
    'direction': 'enum(ltr,rtl)',
    'image-src': 'string',
    'image-src-mobile': 'string',
    'text': 'string',
    'with-padding': 'boolean',
    'padding-bottom': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
  }

  static defaultAttributes = {
    'section-bg-class': 'content-bg',
    'direction': 'ltr',
    'image-src': '',
    'image-src-mobile': '',
    'text': '',
    'with-padding': true,
  }

  headStyle = (breakpoint) => `
      @media only screen and (max-width:${breakpoint}) {
        .labor-adobe-edex-two-col-img-text-section-responsive > table > tbody > tr > td {
          padding-left: ${LaborAdobeSection.mobileLeftRightPadding} !important;
          padding-right: ${LaborAdobeSection.mobileLeftRightPadding} !important;
        }
      }
    `

  render() {
    const defaultPadding = this.getAttribute('with-padding')
      ? LaborAdobeSection.desktopLeftRightPadding
      : 0

    let imagePadding = [0, 0, 0, defaultPadding]
    let textPadding = [0, defaultPadding, 0, 0]

    if ('rtl' === this.getAttribute('direction')) {
      imagePadding = [0, defaultPadding, 0, 0]
      textPadding = [0, 0, 0, defaultPadding]
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
          css-class="${
            this.getAttribute('with-padding')
              ? 'labor-adobe-edex-two-col-img-text-section-responsive'
              : ''
          }"
          padding-top="${imagePadding[0]}"
          padding-right="${imagePadding[1]}"
          padding-bottom="${imagePadding[2]}"
          padding-left="${imagePadding[3]}"
        >
          <labor-responsive-image 
            src="${this.getAttribute('image-src')}"
            src-mobile="${this.getAttribute('image-src-mobile')}"
            full-width="full-width"
          ></labor-responsive-image>
        </mj-column>
        <mj-column 
          vertical-align="middle" 
          css-class="${
            this.getAttribute('with-padding')
              ? 'labor-adobe-edex-two-col-img-text-section-responsive'
              : ''
          }"
          padding-top="${textPadding[0]}"
          padding-right="${textPadding[1]}"
          padding-bottom="${textPadding[2]}"
          padding-left="${textPadding[3]}"
        >
          ${this.getContent()}
        </mj-column>
      </labor-adobe-section>
    `)
  }
}
