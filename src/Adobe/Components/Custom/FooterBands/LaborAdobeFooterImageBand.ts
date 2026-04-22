import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
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
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobeFooterImageBand extends BodyComponent {
  static endingTag = true

  render() {
    let imgAttrs = {
      'src': this.getAttribute('src'),
      'src-mobile': this.getAttribute('src-mobile'),
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
