import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export default @MJMLCustomComponent({
  tag: 'labor-adobe-pod-application',
  attributes: {
    'section-bg-class': {
      type: 'string',
      default: 'content-bg',
    },
    'product': {
      type: 'string',
      default: 'express',
    },
    'product-color': {
      type: 'string',
      default: 'gray',
    },
    'product-type': {
      type: 'string',
      default: 'regular',
    },
    'primary-cta': {
      type: 'string',
    },
    'primary-cta-href': {
      type: 'string',
    },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [],
})

class LaborAdobePodApplication extends BodyComponent {
  static endingTag = true

  render() {
    return this.renderMJML(`
      <labor-adobe-pod
          section-bg-class="${this.getAttribute('section-bg-class')}"

          product="${this.getAttribute('product')}"
          product-type="${this.getAttribute('product-type')}"
          
          primary-cta="${this.getAttribute('primary-cta')}"
          primary-cta-href="${this.getAttribute('primary-cta-href')}"
      >
          ${this.getContent()}
      </labor-adobe-pod>
  `)
  }
}
