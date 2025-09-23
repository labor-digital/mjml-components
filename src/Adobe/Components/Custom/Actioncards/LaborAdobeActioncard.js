import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping;


registerDependencies({
  'mj-body': ['labor-adobe-actioncard'],
  'labor-adobe-actioncard': [
    'labor-adobe-typo-body',
    'labor-responsive-image',
    'labor-adobe-typo-heading-three',
    'labor-adobe-typo-heading-four',
    'labor-adobe-link',
  ],
})

export default class LaborAdobeActioncard extends BodyComponent {
  static allowedAttributes = {
    'section-bg-class': 'string',

    'padding-top': 'unit(px)',
    'padding-bottom': 'unit(px)'
  }

  static defaultAttributes = {
    'section-bg-class': 'content-bg',

    'padding-top': styleMapping.spacings.custom.px50,
    'padding-bottom': styleMapping.spacings.custom.px50,
  }

  render() {
    let attrs = {}
    attrs['padding-top'] = this.getAttribute('padding-top')
    attrs['padding-bottom'] = this.getAttribute('padding-bottom')

    return this.renderMJML(`
      <labor-adobe-section
        with-padding="true"
        section-bg-class="${this.getAttribute('section-bg-class')}"
        ${this.htmlAttributes(attrs)}
      >
        <mj-column background-color="#eaeaea" padding="50px 50px">
          ${this.renderChildren(this.props.children, {
            rawXML: true,
            renderer: (component) => component.render,
          })}
        </mj-column>
      </labor-adobe-section>
    `)
  }
}