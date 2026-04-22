import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'
import AdobeProductLockupMapping from '../../Mapping/AdobeProductLockupMapping'
import AdobeProductLogoMapping from '../../Mapping/AdobeProductLogoMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-header',
  attributes: {
    'header-bg-class': {
      type: 'string',
      default: 'content-bg',
    },
    'product': {
      type: 'string',
    },
    'product-color': {
      type: 'enum(red,white,red_black,red_gray,red_white,white_black)',
    },
    'href': {
      type: 'string',
      default: '',
    },
    'title': {
      type: 'string',
      default: '',
    },
    'alt': {
      type: 'string',
      default: '',
    },
    'target': {
      type: 'string',
      default: '_blank',
    },
    'border': {
      type: 'boolean',
      default: false,
    },
    'with-padding': {
      type: 'boolean',
      default: true,
    },
    // Not all mails use the default lockups
    // In these cases it should still be possible to use a custom image
    'product-src-overwrite': {
      type: 'string',
    },
    'product-height-overwrite': {
      type: 'unit(px)',
    },
    'product-width-overwrite': {
      type: 'unit(px)',
    },
    'product-height': {
      type: 'string',
      default: '42px',
    },
    'product-width': {
      type: 'string',
      default: 'auto',
    },
    'padding-top': {
      type: 'unit(px)',
      default: styleMapping.spacings.custom.px41,
    },
    'padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.custom.px41,
    },
    // eg. for additonal 20px padding below the headers from the red specs for dark mode compatibility, or 20px for hero pods
    'additional-padding-bottom': {
      type: 'unit(px)',
      default: styleMapping.spacings.vertical.px20,
    },
  },
  allowedParentTags: ['mj-body'],
})

class LaborAdobeHeader extends BodyComponent {
  static endingTag = true

  static additionalAttributes = {
    desktopLeftRightPadding: styleMapping.grids.desktop.contentSpacing,
    mobileLeftRightPadding: styleMapping.grids.mobile.contentSpacing,
    defaultPaddingTop: styleMapping.spacings.custom.px41,
    withBorder: styleMapping.labor.borders.header,
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

    // If it's one of the default lockups, use the values from mapping
    // Otherwise fall back to default props
    let src;
    let imgHeight;
    let imgWidth;
    let title;
    let alt;

    if (this.getAttribute('product-src-overwrite')) {
      // custom image, use provided values
      src = this.getAttribute('product-src-overwrite');
      title = this.getAttribute('title') ?? '';
      alt = this.getAttribute('alt') ?? '';
      imgHeight = this.getAttribute('product-height-overwrite') ?? this.getAttribute('product-height');
      imgWidth = this.getAttribute('product-width-overwrite') ?? this.getAttribute('product-width');

    } else {
      // default lockup, use values from mapping
      let productLockup = AdobeProductLockupMapping.getLockup(this.getAttribute('product'), this.getAttribute('product-color'));
      if (!productLockup) return '';
      src = productLockup.location;
      title = productLockup.name+ ' logo';
      alt = productLockup.name;

      let getImageRatio = () => {
        let cleanTargetHeight = parseInt(imgHeight.replace('px', ''))
        let cleanImageHeight = parseInt(productLockup.height)

        return cleanImageHeight / cleanTargetHeight
      }

      let calculateLogoWidth = () => {
        let imageRatio = getImageRatio();
        let logoWidth = parseInt(productLockup.width);
        return Math.floor(logoWidth / imageRatio).toString() + 'px'
      }

      imgHeight = this.getAttribute('product-height');
      imgWidth = calculateLogoWidth();
    }

    let imgAttrs = {
      'src': src,
      'height': imgHeight,
      'width': imgWidth,

      'href': this.getAttribute('href'),
      'target': this.getAttribute('target'),

      'align': LaborAdobeHeader.additionalAttributes.align,
      'css-class': this.getAttribute('with-padding') ? 'labor-adobe-header-responsive' : '',

      'padding-top': this.getAttribute('padding-top'),
      'padding-bottom': this.getAttribute('padding-bottom'),

      'padding-left': this.getAttribute('with-padding')
        ? LaborAdobeHeader.additionalAttributes.desktopLeftRightPadding
        : '0',
      'padding-right': this.getAttribute('with-padding')
        ? LaborAdobeHeader.additionalAttributes.desktopLeftRightPadding
        : '0',
    }

    let sectionAttrs = {
      'section-bg-class': this.getAttribute('header-bg-class'),
      'with-padding': false,
      'padding-bottom': this.getAttribute('additional-padding-bottom') ?? 0
    }
    if(this.getAttribute('border')) sectionAttrs['border-top'] = LaborAdobeHeader.additionalAttributes.withBorder;

    if (title) imgAttrs['title'] = title;
    if (alt) imgAttrs['alt'] = alt;

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
