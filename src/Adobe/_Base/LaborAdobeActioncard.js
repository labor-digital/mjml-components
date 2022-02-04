import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import LaborAdobeSection from './LaborAdobeSection'

registerDependencies({
  'mj-body': ['labor-adobe-actioncard'],
  'labor-adobe-actioncard': [],
})

export default class LaborAdobeActioncard extends BodyComponent {
  static allowedAttributes = {
    'section-bg-class': 'string',
    'padding-top-overwrite': 'unit(px)',
    'padding-bottom-overwrite': 'unit(px)'
  }

  static defaultAttributes = {
    'section-bg-class': 'content-bg'
  }

  render() {
    let attrs = {}
    attrs['padding-top'] = "50px"
    attrs['padding-bottom'] = "50px"
    if(this.getAttribute('padding-top-overwrite'))
      attrs['padding-top'] = this.getAttribute('padding-top-overwrite')
    if(this.getAttribute('padding-bottom-overwrite'))
      attrs['padding-bottom'] = this.getAttribute('padding-bottom-overwrite')

    return this.renderMJML(`
      <labor-adobe-section
        with-padding="true"
        section-bg-class="${this.getAttribute('section-bg-class')}"
        ${this.htmlAttributes(attrs)}
      >
        <mj-column background-color="#eaeaea" padding="60px 50px">
            ${this.renderChildren(this.props.children, {
              rawXML: true,
              renderer: (component) => component.render,
            })}
        </mj-column>
      </labor-adobe-section>
    `)
  }
}
