import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
// import LaborAdobeSection from './LaborAdobeSection'
import AdobeRedStyleMapping from '../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

registerDependencies({
  'mj-body': ['labor-adobe-hero'],
  'labor-adobe-hero': [],
})

export default class LaborAdobeHero extends BodyComponent {
  static allowedAttributes = {
    'background-url': 'string',
    'background-color': 'color',
    'background-position': 'string',
    'height': 'unit(px)',
    'product-image-src': 'string',
    'product-image-width': 'unit(px)',
    'product-image-height': 'enum(22px, 28px, 30px, 34px)',
    'product-image-href': 'string',
    'product-image-title': 'string',
    'product-image-target': 'string',
    'product-image-padding-bottom-overwrite': 'unit(px)',
    'padding-left': 'unit(px)',
    'padding-right': 'unit(px)',
  }

  static defaultAttributes = {
    'background-url': '',
    'background-color': '',
    'background-position': 'center center',
    'height': '200px',
    'product-image-height': '30px',
    'product-image-href': '',
    'product-image-title': '',
    'product-image-target': '_blank',
  }

  headStyle = (breakpoint) => `
      @media only screen and (max-width:${breakpoint}) {
        .labor-adobe-hero-element-responsive {
          padding-left: ${styleMapping.grids.mobile.contentSpacing} !important;
          padding-right: ${styleMapping.grids.mobile.contentSpacing} !important;
        }
      }
    `

  render() {
    for (var idx in this.props.children) {
      this.props.children[idx].attributes['padding-left'] =
          this.getAttribute('padding-left') ? this.getAttribute('padding-left') :
            styleMapping.grids.desktop.contentSpacing
      this.props.children[idx].attributes['padding-right'] =
          this.getAttribute('padding-right') ? this.getAttribute('padding-right') :
            styleMapping.grids.desktop.contentSpacing
      this.props.children[idx].attributes['css-class'] =
        this.props.children[idx].attributes['css-class'] || ''
      this.props.children[idx].attributes['css-class'] += ' labor-adobe-hero-element-responsive'
    }

    const productImgHeight = parseInt(this.getAttribute('product-image-height').replace('px', ''))
    let productImgPadding = (124 - productImgHeight) / 2

    return this.renderMJML(`
      <mj-hero
          mode="fixed-height"
          background-color="${this.getAttribute('background-color')}"
          background-url="${this.getAttribute('background-url')}"
          background-position="${this.getAttribute('background-position')}"
          background-width="600px"
          background-height="${this.getAttribute('height')}"
          height="${this.getAttribute('height')}"
          width="100%"
          padding-left="${this.getAttribute('padding-left')}"
          padding-right="${this.getAttribute('padding-left')}"
      >
        ${
          this.getAttribute('product-image-src')
            ? `
          <mj-image
            src="${this.getAttribute('product-image-src')}"
            height="${this.getAttribute('product-image-height')}"
            width="${this.getAttribute('product-image-width')}"
            href="${this.getAttribute('product-image-href')}"
            title="${this.getAttribute('product-image-title')}"
            target="${this.getAttribute('product-image-target')}"
            align="left"
            css-class="labor-adobe-hero-element-responsive"
            padding-top="${productImgPadding}px"
            padding-bottom="${
              this.getAttribute('product-image-padding-bottom-overwrite')
                ? this.getAttribute('product-image-padding-bottom-overwrite')
                : productImgPadding + 'px'
            }"
            padding-left="${styleMapping.grids.desktop.contentSpacing}"
            padding-right="${styleMapping.grids.desktop.contentSpacing}"
          />
        `
            : ``
        }
        ${this.renderChildren(this.props.children, {
          rawXML: true,
          renderer: (component) => component.render,
        })}
      </mj-hero>
    `)
  }
}
