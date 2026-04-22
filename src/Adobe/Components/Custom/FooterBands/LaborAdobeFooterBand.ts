import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-footer-band',
  attributes: {
    'bg-color': { type: 'string', default: AdobeRedStyleMapping.colors.adobeRed.hex },
    'color': { type: 'string', default: AdobeRedStyleMapping.colors.white.hex },
    'font-size': { type: 'string', default: '16px' },
    'font-weight': { type: 'string', default: '' + AdobeRedStyleMapping.typographyFontWeight.extraBold },
    'line-height': { type: 'string', default: '20px' },
    'align': { type: 'string', default: 'left' },
    'padding-top': { type: 'unit(px,%)', default: '4px' },
    'padding-bottom': { type: 'unit(px,%)', default: '6px' },
  },
  allowedParentTags: ['mj-body'],
})

class LaborAdobeFooterBand extends BodyComponent {
  static endingTag = true

  render() {
    const bgColor = this.getAttribute('bg-color') || AdobeRedStyleMapping.colors.adobeRed.hex

    const typoAttrs = {
      'color': this.getAttribute('color') || AdobeRedStyleMapping.colors.white.hex,
      'font-size': this.getAttribute('font-size') || '16px',
      'font-weight': this.getAttribute('font-weight') || '' + AdobeRedStyleMapping.typographyFontWeight.extraBold,
      'line-height': this.getAttribute('line-height') || '20px',
      'align': this.getAttribute('align') || 'left',
      'padding-top': this.getAttribute('padding-top') || '4px',
      'padding-bottom': this.getAttribute('padding-bottom') || '6px',
    }

    return this.renderMJML(`
      <labor-adobe-section background-color="${bgColor}">
        <mj-column>
          <mj-text ${this.htmlAttributes(typoAttrs)}>
            ${this.getContent()}
          </mj-text>
        </mj-column>
      </labor-adobe-section>
    `)
  }
}
