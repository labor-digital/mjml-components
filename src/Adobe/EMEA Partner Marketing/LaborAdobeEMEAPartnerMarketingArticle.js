import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-adobe-emea-partner-marketing-article'],
  'labor-adobe-emea-partner-marketing-article': [],
})

export default class LaborAdobeEMEAPartnerMarketingArticle extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'image-src': 'string',
    'image-src-mobile': 'string',
    'href': 'string',
    'headline': 'string',
    'category': 'string',
    'cta': 'string',
    'text': 'string',
    'program': 'enum(creative,document,education)',
  }

  static defaultAttributes = {
    'image-src-mobile': '',
    'program': '',
  }

  render() {
    return (
      (this.getAttribute('program')
        ? this.renderMJML(`
            <labor-adobe-section padding-bottom="10px">
                <labor-adobe-typo-body>${
                  this.getAttribute('program') == 'creative'
                    ? 'Creative Cloud'
                    : this.getAttribute('program') == 'education'
                    ? 'Education'
                    : 'Document Cloud'
                }</labor-adobe-typo-body>
            </labor-adobe-section>
        `)
        : ``) +
      this.renderMJML(`
            <labor-adobe-section with-padding="false" padding-bottom="34px">
                <mj-column>
                    ${
                      this.getAttribute('program')
                        ? `
                        <mj-image
                            src="images/${this.getAttribute('program')}.jpg"
                            fluid-on-mobile="true"
                            align="left"
                            width="600px"
                            height="5px"
                        />
                    `
                        : ``
                    }
                    <labor-responsive-image
                        src="${this.getAttribute('image-src')}"
                        src-mobile="${this.getAttribute('image-src-mobile')}"
                        fluid-on-mobile="true"
                        width="600px"
                        align="left"
                        target="_blank"
                        href="${this.getAttribute('href')}"
                        title="${this.getAttribute('headline')}"
                    />
                </mj-column>
            </labor-adobe-section>
        `) +
      this.renderMJML(`
            <labor-adobe-section padding-bottom="100px">
                <mj-column>
                    <labor-adobe-typo-body padding-bottom="7px">${this.getAttribute(
                      'category'
                    )}</labor-adobe-typo-body>
                    <labor-adobe-typo-heading-three padding-bottom="7px">${this.getAttribute(
                      'headline'
                    )}</labor-adobe-typo-heading-three>
                    <labor-adobe-typo-body padding-bottom="33px">${this.getAttribute(
                      'text'
                    )}</labor-adobe-typo-body>
                    <labor-adobe-rounded-button type="quiet" href="${this.getAttribute(
                      'href'
                    )}">${this.getAttribute('cta')}</labor-adobe-rounded-button>
                </mj-column>
            </labor-adobe-section>
        `)
    )
  }
}
