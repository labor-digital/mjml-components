import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-pod-z-formation',
  attributes: {
    'section-bg-class': { type: 'string', default: 'content-bg' },
    'direction': { type: 'enum(ltr,rtl)', default: 'ltr' },
    'image-src': { type: 'string', default: '' },
    'image-src-mobile': { type: 'string', default: '' },
    'padding-top': { type: 'unit(px,%)' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.spacings.vertical.px100 },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [
    'labor-adobe-typo-body',
    'labor-adobe-typo-heading-four',
    'labor-adobe-link',
  ],
})

class LaborAdobePodZFormation extends BodyComponent {
  static endingTag = false

  static additionalAttributes = {
    'padding-to-edge-mobile': (parseInt(AdobeRedStyleMapping.grids.mobile.contentSpacing)
                               + parseInt(AdobeRedStyleMapping.spacings.horizontal.px60) + 'px'),
    'padding-image-to-content-desktop': AdobeRedStyleMapping.spacings.horizontal.px40,
  }

  headStyle = (breakpoint) => `
    @media only screen and (max-width: ${breakpoint}) {
      .labor-adobe-z-content-col-responsive > table > tbody > tr > td {
        padding-top: 40px !important;
      }
      .labor-adobe-z-content-col-responsive--ltr > table > tbody > tr > td {
        padding-top: 40px !important;
        padding-left: ${LaborAdobePodZFormation.additionalAttributes['padding-to-edge-mobile']} !important;
        padding-right: ${AdobeRedStyleMapping.grids.mobile.contentSpacing} !important;
      }
      .labor-adobe-z-content-col-responsive--rtl > table > tbody > tr > td {
        padding-top: 40px !important;
        padding-left: ${AdobeRedStyleMapping.grids.mobile.contentSpacing} !important;
        padding-right: ${LaborAdobePodZFormation.additionalAttributes['padding-to-edge-mobile']} !important;
      }

      .labor-adobe-z-image-col-responsive > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td {
        width: 100% !important;
      }
      .labor-adobe-z-image-col-responsive--ltr > table > tbody > tr > td {
        padding-left: 0 !important;
        padding-right: ${LaborAdobePodZFormation.additionalAttributes['padding-to-edge-mobile']} !important;
      }
      .labor-adobe-z-image-col-responsive--rtl > table > tbody > tr > td {
        padding-left: ${LaborAdobePodZFormation.additionalAttributes['padding-to-edge-mobile']} !important;
        padding-right: 0 !important;
      }
    }
  `

  render() {
    const attrs = {
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      direction: this.getAttribute('direction') || 'ltr',
      imageSrc: this.getAttribute('image-src') || '',
      imageSrcMobile: this.getAttribute('image-src-mobile') || '',
      paddingBottom: this.getAttribute('padding-bottom') || AdobeRedStyleMapping.spacings.vertical.px100,
      paddingTop: this.getAttribute('padding-top'),
    }

    const isLtr = attrs.direction === 'ltr'
    const aa = LaborAdobePodZFormation.additionalAttributes

    return this.renderMJML(`
      <labor-adobe-section
        direction="${attrs.direction}"
        with-padding="false"
        padding-bottom="${attrs.paddingBottom}"
        padding-top="${attrs.paddingTop || ''}"
        section-bg-class="${attrs.sectionBgClass}"
      >
        <mj-column
          vertical-align="top"
          css-class="labor-adobe-z-image-col-responsive ${isLtr ? 'labor-adobe-z-image-col-responsive--ltr' : 'labor-adobe-z-image-col-responsive--rtl'}"
          padding-left="${isLtr ? '0' : aa['padding-image-to-content-desktop']}"
          padding-right="${isLtr ? aa['padding-image-to-content-desktop'] : '0'}"
        >
          <labor-responsive-image
            src="${attrs.imageSrc}"
            src-mobile="${attrs.imageSrcMobile}"
            align="${isLtr ? 'left' : 'right'}"
          />
        </mj-column>
        <mj-column
          vertical-align="top"
          css-class="labor-adobe-z-content-col-responsive ${isLtr ? 'labor-adobe-z-content-col-responsive--ltr' : 'labor-adobe-z-content-col-responsive--rtl'}"
          padding-top="12px"
          padding-left="${isLtr ? '0' : aa['padding-image-to-content-desktop']}"
          padding-right="${isLtr ? aa['padding-image-to-content-desktop'] : '0'}"
        >
          ${this.props.content}
        </mj-column>
      </labor-adobe-section>
    `)
  }
}
