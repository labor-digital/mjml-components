import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-action-card',
  attributes: {
    'section-bg-class': { type: 'string', default: 'content-bg' },
    'image-src': { type: 'string' },
    'image-src-mobile': { type: 'string' },
    'image-alt': { type: 'string', default: 'Alt Text' },
    'padding-top': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.custom.px0 },
    'padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.custom.px0 },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [
    'labor-responsive-image',
    'labor-adobe-typo-body',
    'labor-adobe-typo-heading-three',
    'labor-adobe-typo-heading-four',
    'labor-adobe-link',
  ],
})

class LaborAdobeActionCard extends BodyComponent {

  static additionalAttributes = {
    'image-section-padding': AdobeRedStyleMapping.spacings.vertical.px40,
    'image-section-padding-mobile': AdobeRedStyleMapping.spacings.custom.px30,
    'padding-left-right': AdobeRedStyleMapping.spacings.custom.px50,
    'inner-padding-top-bottom': AdobeRedStyleMapping.spacings.vertical.px60,
    'border-radius-top-only': '8px 8px 0 0',
    'border-radius-bottom-only': '0 0 8px 8px',
    'border-radius-both': '8px',
    'column-background-color': AdobeRedStyleMapping.labor.colors.actionCardBackgroundColor.hex,
  }

  headStyle = (breakpoint) => `
    @media only screen and (max-width: ${breakpoint}) {
      .labor-adobe-action-card-image > table > tbody > tr > td {
        padding-top: ${LaborAdobeActionCard.additionalAttributes['image-section-padding-mobile']} !important;
      }
    }
  `

  render() {
    const attrs = {
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      imageAlt: this.getAttribute('image-alt') || 'Alt Text',
      paddingTop: this.getAttribute('padding-top') || AdobeRedStyleMapping.spacings.custom.px0,
      paddingBottom: this.getAttribute('padding-bottom') || AdobeRedStyleMapping.spacings.custom.px0,
    }

    const imageSrc = this.getAttribute('image-src')
    const imageSrcMobile = this.getAttribute('image-src-mobile')
    const imageSrcMobileAttr = imageSrcMobile ? `src-mobile="${imageSrcMobile}"` : ''

    const aa = LaborAdobeActionCard.additionalAttributes

    const upperSectionAttrs = { 'padding-top': attrs.paddingTop }
    const lowerSectionAttrs = {
      'padding-top': imageSrc ? '0' : attrs.paddingTop,
      'padding-bottom': attrs.paddingBottom,
    }

    const imageSection = imageSrc
      ? `<labor-adobe-section
          with-padding="true"
          section-bg-class="${attrs.sectionBgClass}"
          ${this.htmlAttributes(upperSectionAttrs)}
        >
          <mj-column
            border-radius="${aa['border-radius-top-only']}"
            padding-top="0"
          >
            <labor-responsive-image
              src="${imageSrc}"
              ${imageSrcMobileAttr}
              alt="${attrs.imageAlt}"
              border-radius="${aa['border-radius-top-only']}"
              padding-bottom="0"
              fluid-on-mobile="true"
            />
          </mj-column>
        </labor-adobe-section>`
      : ''

    return (
      (imageSection ? this.renderMJML(imageSection) : '') +
      this.renderMJML(`
        <labor-adobe-section
          with-padding="true"
          section-bg-class="${attrs.sectionBgClass}"
          ${this.htmlAttributes(lowerSectionAttrs)}
        >
          <mj-column
            background-color="${aa['column-background-color']}"
            border-radius="${imageSrc ? aa['border-radius-bottom-only'] : aa['border-radius-both']}"
            padding-top="${imageSrc ? aa['image-section-padding'] : aa['inner-padding-top-bottom']}"
            padding-bottom="${aa['inner-padding-top-bottom']}"
            padding-left="${aa['padding-left-right']}"
            padding-right="${aa['padding-left-right']}"
            css-class="labor-adobe-action-card-image"
          >
            ${this.props.content}
          </mj-column>
        </labor-adobe-section>
      `)
    )
  }
}
