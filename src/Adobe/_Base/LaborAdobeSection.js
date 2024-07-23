import { registerDependencies } from 'mjml-validator'
import MjSection from 'mjml-section'

registerDependencies({
  'labor-adobe-section': ['mj-group', 'mj-column'],
  'mj-wrapper': ['labor-adobe-section'],
  'labor-bg-wrapper': ['labor-adobe-section'],
  'mj-body': ['labor-adobe-section'],
})

export default class LaborAdobeSection extends MjSection {
  static allowedAttributes = {
    'with-padding': 'boolean',
    'section-bg-class': 'string',
    'padding-bottom': 'unit(px,%)',
    'padding-top': 'unit(px,%)'
  }

  static defaultAttributes = {
    'with-padding': true,
    'section-bg-class': 'content-bg',
  }

  static desktopLeftRightPadding = '50px'
  static mobileLeftRightPadding = '30px'

  headStyle = (breakpoint) => `
      @media only screen and (max-width:${breakpoint}) {
        .labor-adobe-section-responsive > table > tbody > tr > td {
          padding-left: ${LaborAdobeSection.mobileLeftRightPadding} !important;
          padding-right: ${LaborAdobeSection.mobileLeftRightPadding} !important;
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
    let pT = this.getAttribute('padding-top') && this.getAttribute('padding-top') != 'undefined' ? this.getAttribute('padding-top') : '0'
    let pR = this.getAttribute('with-padding') ? LaborAdobeSection.desktopLeftRightPadding : '0'
    let pB = this.getAttribute('padding-bottom') && this.getAttribute('padding-bottom') != 'undefined' ? this.getAttribute('padding-bottom') : '0'
    let pL = this.getAttribute('with-padding') ? LaborAdobeSection.desktopLeftRightPadding : '0'
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
