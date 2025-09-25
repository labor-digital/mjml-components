import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-body': ['labor-adobe-pod-application'],
  'labor-adobe-pod-application': [],
})

export default class LaborAdobePodApplication extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'section-bg-class': 'string',

    'product': 'string',
    'product-color': 'string',
    'product-type': 'string',

    'primary-cta': 'string',
    'primary-cta-href': 'string',
  }

  static defaultAttributes = {
    'product': 'express',
    'product-color': 'gray',
    'product-type': 'regular',

    'section-bg-class': 'content-bg',
  }

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
