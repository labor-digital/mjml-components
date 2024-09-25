import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies( {
  'mj-body': ['labor-adobe-actioncard'],
  'labor-adobe-actioncard': ['labor-adobe-typo-heading-three', 'labor-adobe-typo-body'],
})

export default class LaborAdobeActioncard extends BodyComponent {

    static allowedAttributes = {
      'section-bg-class': 'string'
    };
    static defaultAttributes = {
      'section-bg-class': 'content-bg',
    };
    static additionalAttributes = {
      columnBackgroundColor: styleMapping.labor.colors.columnBackground.hex,
      columnPadding: "50px 50px",
      withPadding: "true"
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
        with-padding="${LaborAdobeActioncard.additionalAttributes.withPadding}"
        section-bg-class="${this.getAttribute('section-bg-class')}"
        ${this.htmlAttributes(attrs)}
      >
        <mj-column background-color="${LaborAdobeActioncard.additionalAttributes.columnBackgroundColor}" padding="${LaborAdobeActioncard.additionalAttributes.columnPadding}">
            ${this.renderChildren(this.props.children, {
              rawXML: true,
              renderer: (component) => component.render,
            })}
        </mj-column>
      </labor-adobe-section>
    `)
  }
}
