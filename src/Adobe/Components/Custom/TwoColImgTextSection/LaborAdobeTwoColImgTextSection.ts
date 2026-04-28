import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../../Styles/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

@MJMLCustomComponent({
  tag: 'labor-adobe-two-col-img-text-section',
  attributes: {
    'section-bg-class': {
      type: 'string',
      default: 'content-bg',
    },
    'direction': {
      type: 'enum(ltr,rtl)',
      default: 'ltr',
    },
    'image-src': {
      type: 'string',
      default: '',
    },
    'image-src-mobile': {
      type: 'string',
      default: '',
    },
    'image-alt': {
      type: 'string',
      default: '',
    },
    'with-padding': {
      type: 'boolean',
      default: true,
    },
    'with-padding-image': {
      type: 'boolean',
      default: true,
    },
    // when setting padding-bottom keep the padding-bottom of the columns in mind
    'padding-top': {
      type: 'unit(px,%)',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
      default: styleMapping.spacings.vertical.px20,
    },
    'padding-bottom-cols': {
      type: 'unit(px,%)',
      default: styleMapping.spacings.vertical.px40,
    },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: [
    'labor-adobe-typo-body',
    'labor-adobe-typo-heading-four',
    'labor-adobe-button',
  ],
  endingTag: false,
})

export class LaborAdobeTwoColImgTextSection extends BodyComponent {

  headStyle = (breakpoint) => `
    @media only screen and (max-width: ${breakpoint}) {
      .labor-adobe-two-col-img-text-section-responsive > table > tbody > tr > td {
        padding-left: ${styleMapping.grids.mobile.contentSpacing} !important;
        padding-right: ${styleMapping.grids.mobile.contentSpacing} !important;
      }
    }
  `

  render() {
    const imageAltAttr = this.getAttribute('image-alt') ? `alt="${this.getAttribute('image-alt')}"` : '';
    const defaultPadding = this.getAttribute('with-padding') ? styleMapping.grids.desktop.contentSpacing : 0
    const imageDefaultPadding = this.getAttribute('with-padding-image') ? styleMapping.grids.desktop.contentSpacing : 0

    let imagePadding = `0 0 0 ${imageDefaultPadding}`
    let textPadding = `0 ${defaultPadding} 0 0`

    if ('rtl' === this.getAttribute('direction')) {
      imagePadding = `0 ${imageDefaultPadding} 0 0`
      textPadding = `0 0 0 ${defaultPadding}`
    }

    return this.renderMJML(`
      <labor-adobe-section
        direction="${this.getAttribute('direction')}"
        with-padding="false"
        padding-bottom="${this.getAttribute('padding-bottom')}"
        padding-top="${this.getAttribute('padding-top')}"
        section-bg-class="${this.getAttribute('section-bg-class')}"
      >
        <mj-column 
          vertical-align="middle"
          css-class="${this.getAttribute('with-padding') ? 'labor-adobe-two-col-img-text-section-responsive' : ''}"
          padding="${imagePadding}"
          padding-bottom="${this.getAttribute('padding-bottom-cols')}"
        >
          <labor-responsive-image
            src="${this.getAttribute('image-src')}"
            src-mobile="${this.getAttribute('image-src-mobile')}"
            ${imageAltAttr}
            full-width="full-width"
          />
        </mj-column>
        <mj-column 
          vertical-align="middle" 
          css-class="${this.getAttribute('with-padding') ? 'labor-adobe-two-col-img-text-section-responsive' : ''}"
          padding="${textPadding}"
          padding-bottom="${this.getAttribute('padding-bottom-cols')}"
        >
          ${this.renderChildren(null, { rawXML: true })}
        </mj-column>
      </labor-adobe-section>
    `)
  }
}
