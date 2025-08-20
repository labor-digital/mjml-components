import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'
import AdobeProductLockupMapping from '../../Mapping/AdobeProductLockupMapping'

const styleMapping = AdobeRedStyleMapping;

registerDependencies({
    'mj-body': ['labor-adobe-header'],
    'labor-adobe-header': [],
});

export default class LaborAdobeHeader extends BodyComponent {

    static endingTag = true;

    static allowedAttributes = {
        'src': 'string',
        'header-bg-class': 'string',
        'height': 'enum(22px,28px,30px,34px,42px)',
        'width': 'unit(px,%)',

        'product': 'string',
        'type': 'string',

        'href': 'string',
        'title': 'string',
        'alt': 'string',
        'target': 'string',
        'border': 'boolean',
        'padding-bottom': 'unit(px)',
        'with-padding': 'boolean',
    };

    static defaultAttributes = {
        'src': '',
        'header-bg-class': 'content-bg',
        'height': '42px',
        'width': 'auto',
        'href': '',
        'target': '_blank',
        'border': false,
        'with-padding': true,
        'padding-bottom': '0'
    };

    static additionalAttributes = {
        desktopLeftRightPadding: styleMapping.grids.desktop.contentSpacing,
        mobileLeftRightPadding: styleMapping.grids.mobile.contentSpacing,
        withBorder: styleMapping.labor.borders.header,
        align: 'left',
    };

    headStyle = (breakpoint) => `
      @media only screen and (max-width:${breakpoint}) {
        .labor-adobe-header-responsive {
          padding-left: ${LaborAdobeHeader.additionalAttributes.mobileLeftRightPadding} !important;
          padding-right: ${LaborAdobeHeader.additionalAttributes.mobileLeftRightPadding} !important;
        }
      }
    `

    render() {
        const imgHeight = parseInt(this.getAttribute('height').replace('px', ''))
        // default: 42 img + 21 p top + 21 p bottom = 124px;
        let padding = (124 - imgHeight - (this.getAttribute('border') ? 4 : 0)) / 2



        let imgAttrs = {

            'src': (this.getAttribute('product') && this.getAttribute('type'))
              ? AdobeProductLockupMapping.lockups[this.getAttribute('product')]['images'][this.getAttribute('type')]
              : this.getAttribute('src'),

            'height': (this.getAttribute('product') && this.getAttribute('type'))
              ? AdobeProductLockupMapping.lockups[this.getAttribute('product')]['height']
              : this.getAttribute('height'),

            'width': (this.getAttribute('product') && this.getAttribute('type'))
              ? AdobeProductLockupMapping.lockups[this.getAttribute('product')]['height']
              : this.getAttribute('width'),

            'href': this.getAttribute('href'),
            'target': this.getAttribute('target'),
            'align': LaborAdobeHeader.additionalAttributes.align,
            'css-class': this.getAttribute('with-padding') ? 'labor-adobe-header-responsive' : '',
            'padding-top': padding + 'px',
            'padding-bottom': padding + 'px',
            'padding-left': this.getAttribute('with-padding')
                ? LaborAdobeHeader.additionalAttributes.desktopLeftRightPadding
                : '0',
            'padding-right': this.getAttribute('with-padding')
                ? LaborAdobeHeader.additionalAttributes.desktopLeftRightPadding
                : '0',
        }
        if (this.getAttribute('title')) imgAttrs['title'] = this.getAttribute('title')
        if (this.getAttribute('alt')) imgAttrs['alt'] = this.getAttribute('alt')

        return this.renderMJML(`
      <labor-adobe-section
        section-bg-class="${this.getAttribute('header-bg-class')}"
        border-top="${this.getAttribute('border') ? LaborAdobeHeader.additionalAttributes.withBorder : ''}"
        with-padding="false"
        padding-bottom=${this.getAttribute('padding-bottom')}"
      >
        <mj-column>
          <mj-image ${this.htmlAttributes(imgAttrs)} />
        </mj-column>
      </labor-adobe-section>
    `)
    }
}
