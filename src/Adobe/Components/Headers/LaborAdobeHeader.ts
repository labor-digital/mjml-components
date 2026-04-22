import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'
import AdobeProductLockupMapping from '../../Mapping/AdobeProductLockupMapping'
import AdobeProductLogoMapping from '../../Mapping/AdobeProductLogoMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-header',
  attributes: {
    'header-bg-class': { type: 'string', default: 'content-bg' },
    'product': { type: 'string' },
    'product-color': { type: 'enum(red,white,red_black,red_gray,red_white,white_black)' },
    'href': { type: 'string', default: '' },
    'title': { type: 'string', default: '' },
    'alt': { type: 'string', default: '' },
    'target': { type: 'string', default: '_blank' },
    'border': { type: 'boolean', default: false },
    'with-padding': { type: 'boolean', default: true },
    // Not all mails use the default lockups — custom image is supported via these
    'product-src-overwrite': { type: 'string' },
    'product-height-overwrite': { type: 'unit(px)' },
    'product-width-overwrite': { type: 'unit(px)' },
    'product-height': { type: 'string', default: '42px' },
    'product-width': { type: 'string', default: 'auto' },
    'padding-top': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.custom.px41 },
    'padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.custom.px41 },
    'additional-padding-bottom': { type: 'unit(px)', default: AdobeRedStyleMapping.spacings.vertical.px20 },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobeHeader extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    desktopLeftRightPadding: AdobeRedStyleMapping.grids.desktop.contentSpacing,
    mobileLeftRightPadding: AdobeRedStyleMapping.grids.mobile.contentSpacing,
    defaultPaddingTop: AdobeRedStyleMapping.spacings.custom.px41,
    withBorder: AdobeRedStyleMapping.labor.borders.header,
    align: 'left',
  }

  headStyle = (breakpoint) => `
    @media only screen and (max-width: ${breakpoint}) {
      .labor-adobe-header-responsive {
        padding-left: ${LaborAdobeHeader.additionalAttributes.mobileLeftRightPadding} !important;
        padding-right: ${LaborAdobeHeader.additionalAttributes.mobileLeftRightPadding} !important;
      }
    }
  `

  render() {
    const productSrcOverwrite = this.getAttribute('product-src-overwrite')
    const productHeightOverwrite = this.getAttribute('product-height-overwrite')
    const productWidthOverwrite = this.getAttribute('product-width-overwrite')
    const withPadding = this.getAttribute('with-padding')
    const border = this.getAttribute('border')

    let src: string
    let imgHeight: string
    let imgWidth: string
    let title: string
    let alt: string

    if (productSrcOverwrite) {
      src = productSrcOverwrite
      title = this.getAttribute('title') || ''
      alt = this.getAttribute('alt') || ''
      imgHeight = productHeightOverwrite || this.getAttribute('product-height') || '42px'
      imgWidth = productWidthOverwrite || this.getAttribute('product-width') || 'auto'
    } else {
      const productLockup = AdobeProductLockupMapping.getLockup(
        this.getAttribute('product'),
        this.getAttribute('product-color'),
      )
      if (!productLockup) return ''
      src = productLockup.location
      title = productLockup.name + ' logo'
      alt = productLockup.name

      imgHeight = this.getAttribute('product-height') || '42px'

      const getImageRatio = () => {
        const cleanTargetHeight = parseInt(imgHeight.replace('px', ''))
        const cleanImageHeight = parseInt(productLockup.height)
        return cleanImageHeight / cleanTargetHeight
      }

      const calculateLogoWidth = () => {
        const imageRatio = getImageRatio()
        const logoWidth = parseInt(productLockup.width)
        return Math.floor(logoWidth / imageRatio).toString() + 'px'
      }

      imgWidth = calculateLogoWidth()
    }

    const imgAttrs: Record<string, any> = {
      'src': src,
      'height': imgHeight,
      'width': imgWidth,
      'href': this.getAttribute('href') || '',
      'target': this.getAttribute('target') || '_blank',
      'align': LaborAdobeHeader.additionalAttributes.align,
      'css-class': withPadding ? 'labor-adobe-header-responsive' : '',
      'padding-top': this.getAttribute('padding-top') || AdobeRedStyleMapping.spacings.custom.px41,
      'padding-bottom': this.getAttribute('padding-bottom') || AdobeRedStyleMapping.spacings.custom.px41,
      'padding-left': withPadding
        ? LaborAdobeHeader.additionalAttributes.desktopLeftRightPadding
        : '0',
      'padding-right': withPadding
        ? LaborAdobeHeader.additionalAttributes.desktopLeftRightPadding
        : '0',
    }

    if (title) imgAttrs['title'] = title
    if (alt) imgAttrs['alt'] = alt

    const sectionAttrs: Record<string, any> = {
      'section-bg-class': this.getAttribute('header-bg-class') || 'content-bg',
      'with-padding': false,
      'padding-bottom': this.getAttribute('additional-padding-bottom') || AdobeRedStyleMapping.spacings.vertical.px20,
    }
    if (border) sectionAttrs['border-top'] = LaborAdobeHeader.additionalAttributes.withBorder

    return this.renderMJML(`
      <labor-adobe-section
        ${this.htmlAttributes(sectionAttrs)}
      >
        <mj-column>
          <mj-image ${this.htmlAttributes(imgAttrs)} />
        </mj-column>
      </labor-adobe-section>
    `)
  }
}
