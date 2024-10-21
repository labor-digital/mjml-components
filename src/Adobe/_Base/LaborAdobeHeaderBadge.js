import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeRedStyleMapping from '../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping;

registerDependencies({
    'mj-body': ['labor-adobe-header-badge'],
    'labor-adobe-header-badge': [],
});

export default class LaborAdobeHeaderBadge extends BodyComponent {

    static endingTag = true;

    static allowedAttributes = {
        'src': 'string',
        'header-bg-class': 'string',
        'height': 'enum(22px, 28px, 30px, 34px)',
        'width': 'unit(px,%)',
        'href': 'string',
        'title': 'string',
        'alt': 'string',
        'target': 'string',
        'border': 'boolean',
        'padding-bottom-overwrite': 'unit(px)',
        'with-padding': 'boolean',
        'badge-src': 'string',
        'badge-width': 'unit(px,%)',
        'badge-padding-right': 'unit(px,%)',
        'badge-align': 'string'
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
        'badge-src': '',
        'badge-width': '60px',
        'badge-padding-right': '0px',
        'badge-align': 'left'
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
          padding-left: ${LaborAdobeHeaderBadge.additionalAttributes.mobileLeftRightPadding}  !important;
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
            'align': LaborAdobeHeaderBadge.additionalAttributes.align,
            'css-class': this.getAttribute('with-padding') ? 'labor-adobe-header-responsive' : '',
            'padding-top': padding + 'px',
            'padding-bottom': this.getAttribute('padding-bottom-overwrite')
                ? this.getAttribute('padding-bottom-overwrite')
                : padding + 'px',
            'padding-left': this.getAttribute('with-padding')
                ? LaborAdobeHeaderBadge.additionalAttributes.desktopLeftRightPadding
              : '0',
            'padding-right': '0'
        }
        if (this.getAttribute('title')) imgAttrs['title'] = this.getAttribute('title')
        if (this.getAttribute('alt')) imgAttrs['alt'] = this.getAttribute('alt')

        return this.renderMJML(`
            <labor-adobe-section
                section-bg-class="${this.getAttribute('header-bg-class')}"
                border-top="${this.getAttribute('border') ? LaborAdobeHeaderBadge.additionalAttributes.border : ''}"
                with-padding="false"
            >
                <mj-group>
                    <mj-column width="80%">
                        <mj-image ${this.htmlAttributes(imgAttrs)} />
                    </mj-column>
                    <mj-column width="20%" padding-right="${this.getAttribute('badge-padding-right')}">
                        <mj-image 
                            src="${this.getAttribute('badge-src')}"
                            width="${this.getAttribute('badge-width')}"
                            align="${this.getAttribute('badge-align')}"
                         />
                    </mj-column>
                </mj-group>
            </labor-adobe-section>
        `)
    }
}
