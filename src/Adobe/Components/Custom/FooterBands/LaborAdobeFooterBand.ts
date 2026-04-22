import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-footer-band',
  attributes: {
    'bg-color': {
      type: 'string',
      default: styleMapping.colors.adobeRed.hex,
    },
    color: {
      type: 'string',
      default: styleMapping.colors.white.hex,
    },
    'font-size': {
      type: 'string',
      default: '16px',
    },
    'font-weight': {
      type: 'string',
      default: '' + styleMapping.typographyFontWeight.extraBold,
    },
    'line-height': {
      type: 'string',
      default: '20px',
    },
    align: {
      type: 'string',
      default: 'left',
    },
    'padding-top': {
      type: 'unit(px,%)',
      default: '4px',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: '6px',
    },
  },
  allowedParentTags: ['mj-body'],
})

class LaborAdobeFooterBand extends BodyComponent {
  static endingTag = true

  render() {
    let typoAttrs = {
      'color': this.getAttribute('color'),
      'font-size': this.getAttribute('font-size'),
      'font-weight': this.getAttribute('font-weight'),
      'line-height': this.getAttribute('line-height'),
      'align': this.getAttribute('align'),
      'padding-top': this.getAttribute('padding-top'),
      'padding-bottom': this.getAttribute('padding-bottom'),
    }

    return this.renderMJML(`
      <labor-adobe-section background-color="${this.getAttribute('bg-color')}">
        <mj-column>
          <mj-text ${this.htmlAttributes(typoAttrs)} >
            ${this.getContent()}
          </mj-text>
        </mj-column>
      </labor-adobe-section>
    `)
  }
}
