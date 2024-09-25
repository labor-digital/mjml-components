import { registerDependencies } from 'mjml-validator'
import MjSection from 'mjml-section'
import AdobeComponentMapping from '../_Styles/AdobeComponentMapping'

const mapping = AdobeComponentMapping.LaborAdobeSection;
registerDependencies(mapping.dependencies);

export default class LaborAdobeSection extends MjSection {

  static allowedAttributes = mapping.allowedAttributes;
  static defaultAttributes = mapping.defaultAttributes;

  headStyle = (breakpoint) => `
      @media only screen and (max-width:${breakpoint}) {
        .labor-adobe-section-responsive > table > tbody > tr > td {
          padding-left: ${mapping.additionalAttributes.mobileLeftRightPadding} !important;
          padding-right: ${mapping.additionalAttributes.mobileLeftRightPadding} !important;
        }
      }
    `

  render() {
    let attrs = {}
    for (var attrName in this.attributes) {
      if (attrName == 'with-padding') continue
      if (attrName == 'padding-top') continue
      if (attrName == 'padding-bottom') continue
      attrs[attrName] = this.getAttribute(attrName)
    }

    let pT = (this.getAttribute('padding-top') && this.getAttribute('padding-top') != 'undefined') ? this.getAttribute('padding-top') : '0'
    let pR = this.getAttribute('with-padding') ? mapping.additionalAttributes.desktopLeftRightPadding : '0'
    let pB = (this.getAttribute('padding-bottom') && this.getAttribute('padding-bottom') != 'undefined') ? this.getAttribute('padding-bottom') : '0'
    let pL = this.getAttribute('with-padding') ? mapping.additionalAttributes.desktopLeftRightPadding : '0'
    attrs['padding'] = pT + ' ' + pR + ' ' + pB + ' ' + pL

    return this.renderMJML(`
      <mj-section mj-class="${this.getAttribute('section-bg-class')}" css-class="${
      this.getAttribute('with-padding') ? 'labor-adobe-section-responsive' : ''
    }" ${this.htmlAttributes(attrs)}>
        ${this.renderChildren(this.props.children, {
          rawXML: true,
          renderer: (component) => component.render,
        })}
      </mj-section>
    `)
  }
}
