import MjSection from 'mjml-section'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-section',
  attributes: {
    'with-padding': {
      type: 'boolean',
      default: true,
    },
    'section-bg-class': {
      type: 'string',
      default: 'content-bg',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
    },
    'padding-top': {
      type: 'unit(px,%)',
    },
  },
  allowedParentTags: ['mj-wrapper', 'labor-bg-wrapper', 'mj-body'],
  allowedChildTags: ['mj-group', 'mj-column'],
  endingTag: false,
})

export class LaborAdobeSection extends MjSection {

  static additionalAttributes = {
    desktopLeftRightPadding: styleMapping.grids.desktop.contentSpacing,
    mobileLeftRightPadding: styleMapping.grids.mobile.contentSpacing,
  }

  headStyle = (breakpoint) => `
      @media only screen and (max-width: ${breakpoint}) {
        .labor-adobe-section-responsive > table > tbody > tr > td {
          padding-left: ${LaborAdobeSection.additionalAttributes.mobileLeftRightPadding} !important;
          padding-right: ${LaborAdobeSection.additionalAttributes.mobileLeftRightPadding} !important;
        }
      }
    `

  render() {
    const attrs: Record<string, any> = {}
    for (const attrName in this.attributes) {
      if (attrName === 'with-padding') continue
      if (attrName === 'padding-top') continue
      if (attrName === 'padding-bottom') continue
      attrs[attrName] = this.getAttribute(attrName)
    }

    const pT = this.getAttribute('padding-top') && this.getAttribute('padding-top') !== 'undefined' ? this.getAttribute('padding-top') : '0'
    const pB = this.getAttribute('padding-bottom') && this.getAttribute('padding-bottom') !== 'undefined' ? this.getAttribute('padding-bottom') : '0'
    const pL = this.getAttribute('with-padding') ? LaborAdobeSection.additionalAttributes.desktopLeftRightPadding : '0'
    const pR = this.getAttribute('with-padding') ? LaborAdobeSection.additionalAttributes.desktopLeftRightPadding : '0'

    return this.renderMJML({
      tagName: 'mj-section',
      attributes: {
        'mj-class': this.getAttribute('section-bg-class'),
        'css-class': this.getAttribute('with-padding') ? 'labor-adobe-section-responsive' : '',
        ...attrs,
        padding: `${pT} ${pR} ${pB} ${pL}`,
      },
      children: this.props.children,
    } as any)
  }
}
