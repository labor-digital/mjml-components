import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeRedStyleMapping from '../_Styles/RED/AdobeRedStyleMapping'

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
        'height': 'enum(22px,28px,30px,34px)',
        'width': 'unit(px,%)',
        'href': 'string',
        'title': 'string',
        'alt': 'string',
        'target': 'string',
        'border': 'boolean',
        'padding-bottom-overwrite': 'unit(px)',
        'with-padding': 'boolean',
    };

    static defaultAttributes = {
        'src': '',
        'header-bg-class': 'content-bg',
        'height': '30px',
        'width': 'auto',
        'href': '',
        'target': '_blank',
        'border': false,
        'with-padding': true,
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
        let padding = (124 - imgHeight - (this.getAttribute('border') ? 4 : 0)) / 2

        let imgAttrs = {
            'src': this.getAttribute('src'),
            'height': this.getAttribute('height'),
            'width': this.getAttribute('width'),
            'href': this.getAttribute('href'),
            'target': this.getAttribute('target'),
            'align': LaborAdobeHeader.additionalAttributes.align,
            'css-class': this.getAttribute('with-padding') ? 'labor-adobe-header-responsive' : '',
            'padding-top': padding + 'px',
            'padding-bottom': this.getAttribute('padding-bottom-overwrite')
                ? this.getAttribute('padding-bottom-overwrite')
                : padding + 'px',
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
        border-top="${this.getAttribute('border') ? LaborAdobeHeader.additionalAttributes.border : ''}"
        with-padding="false"
      >
        <mj-column>
          <mj-image ${this.htmlAttributes(imgAttrs)} />
        </mj-column>
      </labor-adobe-section>
    `)
    }
}
