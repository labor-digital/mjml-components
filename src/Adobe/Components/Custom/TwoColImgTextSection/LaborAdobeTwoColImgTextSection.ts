import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-two-col-img-text-section',
  attributes: {
    'section-bg-class': { type: 'string', default: 'content-bg' },
    'direction': { type: 'enum(ltr,rtl)', default: 'ltr' },
    'image-src': { type: 'string', default: '' },
    'image-src-mobile': { type: 'string', default: '' },
    'with-padding': { type: 'boolean', default: true },
    'with-padding-image': { type: 'boolean', default: true },
    // when setting padding-bottom keep the padding-bottom of the columns in mind
    'padding-top': { type: 'unit(px,%)' },
    'padding-bottom': { type: 'unit(px,%)', default: AdobeRedStyleMapping.spacings.vertical.px20 },
    'padding-bottom-cols': { type: 'unit(px,%)', default: AdobeRedStyleMapping.spacings.vertical.px40 },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [
    'labor-adobe-typo-body',
    'labor-adobe-typo-heading-four',
    'labor-adobe-button',
  ],
})

class LaborAdobeTwoColImgTextSection extends BodyComponent {
  static endingTag = false

  headStyle = (breakpoint) => `
    @media only screen and (max-width: ${breakpoint}) {
      .labor-adobe-two-col-img-text-section-responsive > table > tbody > tr > td {
        padding-left: ${AdobeRedStyleMapping.grids.mobile.contentSpacing} !important;
        padding-right: ${AdobeRedStyleMapping.grids.mobile.contentSpacing} !important;
      }
    }
  `

  render() {
    const attrs = {
      sectionBgClass: this.getAttribute('section-bg-class') || 'content-bg',
      direction: this.getAttribute('direction') || 'ltr',
      imageSrc: this.getAttribute('image-src') || '',
      imageSrcMobile: this.getAttribute('image-src-mobile') || '',
      paddingBottom: this.getAttribute('padding-bottom') || AdobeRedStyleMapping.spacings.vertical.px20,
      paddingBottomCols: this.getAttribute('padding-bottom-cols') || AdobeRedStyleMapping.spacings.vertical.px40,
      paddingTop: this.getAttribute('padding-top'),
    }

    const _withPadding = this.getAttribute('with-padding')
    const withPadding = _withPadding === true || _withPadding === 'true'
    const _withPaddingImage = this.getAttribute('with-padding-image')
    const withPaddingImage = _withPaddingImage === true || _withPaddingImage === 'true'

    const defaultPadding = withPadding ? AdobeRedStyleMapping.grids.desktop.contentSpacing : 0
    const imageDefaultPadding = withPaddingImage ? AdobeRedStyleMapping.grids.desktop.contentSpacing : 0
    const isRtl = attrs.direction === 'rtl'

    let imagePadding = `0 0 0 ${imageDefaultPadding}`
    let textPadding = `0 ${defaultPadding} 0 0`

    if (isRtl) {
      imagePadding = `0 ${imageDefaultPadding} 0 0`
      textPadding = `0 0 0 ${defaultPadding}`
    }

    const responsiveCssClass = withPadding ? 'labor-adobe-two-col-img-text-section-responsive' : ''

    return this.renderMJML(`
      <labor-adobe-section
        direction="${attrs.direction}"
        with-padding="false"
        padding-bottom="${attrs.paddingBottom}"
        padding-top="${attrs.paddingTop || ''}"
        section-bg-class="${attrs.sectionBgClass}"
      >
        <mj-column
          vertical-align="middle"
          css-class="${responsiveCssClass}"
          padding="${imagePadding}"
          padding-bottom="${attrs.paddingBottomCols}"
        >
          <labor-responsive-image
            src="${attrs.imageSrc}"
            src-mobile="${attrs.imageSrcMobile}"
            full-width="full-width"
          />
        </mj-column>
        <mj-column
          vertical-align="middle"
          css-class="${responsiveCssClass}"
          padding="${textPadding}"
          padding-bottom="${attrs.paddingBottomCols}"
        >
          ${this.props.content}
        </mj-column>
      </labor-adobe-section>
    `)
  }
}
