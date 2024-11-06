import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-adobe-german-dx-article'],
  'labor-adobe-german-dx-article': [],
})

export default class LaborAdobeGermanDXArticle extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'date': 'string',
    'owner': 'string',
    'headline': 'string',
    'text': 'string',
    'cta': 'string',
    'href': 'string',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'padding-bottom': '0px',
  }

  render() {
    return this.renderMJML(`
            <labor-adobe-section padding-bottom="${this.getAttribute('padding-bottom')}">
                <mj-column>
                    <labor-adobe-typo-body padding-bottom="8px">Date: ${this.getAttribute(
                      'date'
                    )} | Owner: ${this.getAttribute('owner')}</labor-adobe-typo-body>
                    <labor-adobe-typo-heading-three padding-bottom="12px">${this.getAttribute(
                      'headline'
                    )}</labor-adobe-typo-heading-three>
                    <labor-adobe-typo-body padding-bottom="20px">${this.getAttribute(
                      'text'
                    )}</labor-adobe-typo-body>
                    <labor-adobe-secondary-cta href="${this.getAttribute(
                      'href'
                    )}">${this.getAttribute('cta')}</labor-adobe-secondary-cta>
                </mj-column>
            </labor-adobe-section>
        `)
  }
}
