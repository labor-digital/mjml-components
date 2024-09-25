import {registerDependencies} from 'mjml-validator'
import {BodyComponent} from 'mjml-core'
import AdobeComponentMapping from '../_Styles/AdobeComponentMapping'

const mapping = AdobeComponentMapping.LaborAdobeHeaderBadge;
registerDependencies(mapping.dependencies);

export default class LaborAdobeHeaderBadge extends BodyComponent {

    static endingTag = mapping.endingTag;
    static allowedAttributes = mapping.allowedAttributes;
    static defaultAttributes = mapping.defaultAttributes;
    headStyle = (breakpoint) => `
      @media only screen and (max-width:${breakpoint}) {
        .labor-adobe-header-responsive {
          padding-left: ${mapping.additionalAttributes.mobileLeftRightPadding}  !important;
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
            'align': mapping.additionalAttributes.align,
            'css-class': this.getAttribute('with-padding') ? 'labor-adobe-header-responsive' : '',
            'padding-top': padding + 'px',
            'padding-bottom': this.getAttribute('padding-bottom-overwrite')
                ? this.getAttribute('padding-bottom-overwrite')
                : padding + 'px',
            'padding-left': this.getAttribute('with-padding')
                ? mapping.additionalAttributes.desktopLeftRightPadding
              : '0',
            'padding-right': '0'
        }
        if (this.getAttribute('title')) imgAttrs['title'] = this.getAttribute('title')
        if (this.getAttribute('alt')) imgAttrs['alt'] = this.getAttribute('alt')

        return this.renderMJML(`
            <labor-adobe-section
                section-bg-class="${this.getAttribute('header-bg-class')}"
                border-top="${this.getAttribute('border') ? mapping.additionalAttributes.border : ''}"
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
