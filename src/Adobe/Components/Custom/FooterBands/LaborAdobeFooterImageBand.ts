import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-footer-image-band',
  attributes: {
    'src': {
      type: 'string',
      default: '',
    },
    'src-mobile': {
      type: 'string',
      default: '',
    },
    'alt': {
      type: 'string',
      default: '',
    },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

export class LaborAdobeFooterImageBand extends BodyComponent {
  // endingTag is set to true by default in @MJMLCustomComponent when not specified in options

  render() {
    let imgAttrs = {
      'src': this.getAttribute('src'),
      'src-mobile': this.getAttribute('src-mobile'),
      'alt': this.getAttribute('alt'),
      'fluid-on-mobile': true,
      'width': '600px',
      'align': 'left',
    }

    return this.renderMJML(`
        <labor-adobe-section with-padding="false" section-bg-class="content-bg" padding-bottom="0">
            <mj-column>
                <labor-responsive-image
                       ${this.htmlAttributes(imgAttrs)}
                />
            </mj-column>
        </labor-adobe-section>
        `)
  }
}
