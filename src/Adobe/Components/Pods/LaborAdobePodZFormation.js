import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-body': ['labor-adobe-pod-z-formation'],
  'labor-adobe-pod-z-formation': [
    'labor-adobe-typo-body',
    'labor-adobe-typo-heading-four',
    'labor-adobe-link'
  ],
})

export default class LaborAdobePodZFormation extends BodyComponent {
  static endingTag = false

  static allowedAttributes = {
    'section-bg-class': 'string',
    'direction': 'enum(ltr,rtl)',
    'image-src': 'string',
    'image-src-mobile': 'string',

    'padding-top': 'unit(px,%)',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'section-bg-class': 'content-bg',
    'direction': 'ltr',
    'image-src': '',
    'image-src-mobile': '',

    'padding-bottom': styleMapping.spacings.vertical.px100,
  }

  static additionalAttributes = {
    'padding-to-edge-mobile' : (parseInt(styleMapping.grids.mobile.contentSpacing)
                                       + parseInt(styleMapping.spacings.horizontal.px60) + 'px'),
    'padding-image-to-content-desktop' : styleMapping.spacings.horizontal.px40
  }

  headStyle = (breakpoint) => `
    @media only screen and (max-width: ${breakpoint}) {
      .labor-adobe-z-content-col-responsive > table > tbody > tr > td {
        padding-top: 40px !important;
      }
      .labor-adobe-z-content-col-responsive--ltr > table > tbody > tr > td {
        padding-top: 40px !important;
        padding-left: ${LaborAdobePodZFormation.additionalAttributes['padding-to-edge-mobile']} !important;
        padding-right: ${styleMapping.grids.mobile.contentSpacing} !important;
      }
      .labor-adobe-z-content-col-responsive--rtl > table > tbody > tr > td {
        padding-top: 40px !important;
        padding-left: ${styleMapping.grids.mobile.contentSpacing} !important;
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
    return this.renderMJML(`
      <labor-adobe-section
        direction="${this.getAttribute('direction')}"
        with-padding="false"
        padding-bottom="${this.getAttribute('padding-bottom')}"
        padding-top="${this.getAttribute('padding-top')}"
        section-bg-class="${this.getAttribute('section-bg-class')}"
      >
        <mj-column 
          vertical-align="top"
          css-class="labor-adobe-z-image-col-responsive ${this.getAttribute('direction') === 'ltr' 
                      ? 'labor-adobe-z-image-col-responsive--ltr' 
                      : 'labor-adobe-z-image-col-responsive--rtl'}"
          padding-left="${
            this.getAttribute('direction') === 'ltr'
              ? '0'
              : LaborAdobePodZFormation.additionalAttributes['padding-image-to-content-desktop']
          }"
          padding-right="${
            this.getAttribute('direction') === 'ltr'
              ? LaborAdobePodZFormation.additionalAttributes['padding-image-to-content-desktop']
              : '0'
          }"
        >
          <labor-responsive-image 
            src="${this.getAttribute('image-src')}"
            src-mobile="${this.getAttribute('image-src-mobile')}"
            align="${
              this.getAttribute('direction') === 'ltr' 
                ? 'left'
                : 'right'
            }"
            
          />
        </mj-column>
        <mj-column 
          vertical-align="top"
          css-class="labor-adobe-z-content-col-responsive ${this.getAttribute('direction') === 'ltr' 
                      ? 'labor-adobe-z-content-col-responsive--ltr'
                      : 'labor-adobe-z-content-col-responsive--rtl'}" 
          padding-top="12px"
          padding-left="${
            this.getAttribute('direction') === 'ltr' 
              ? '0' 
              : LaborAdobePodZFormation.additionalAttributes['padding-image-to-content-desktop']
          }"
          padding-right="${
            this.getAttribute('direction') === 'ltr' 
              ? LaborAdobePodZFormation.additionalAttributes['padding-image-to-content-desktop']
              : '0'
          }"
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
