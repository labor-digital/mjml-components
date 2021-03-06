import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-adobe-typo-body'],
  'labor-adobe-typo-body': [],
})

export default class LaborAdobeTypoBody extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'padding-bottom': '0px',
  }

  headStyle = (breakpoint) => `
    .labor-adobe-typo-body-ul {
      padding-left: 20px;
      margin-top: 0;
      margin-bottom: 0;
    }
    .labor-adobe-typo-body-link {
        text-decoration: underline !important;
        color: ${this.getAttribute('on-background') ? '#ffffff' : '#505050'} !important;
    }
    .labor-adobe-typo-body-link-blue {
        text-decoration: none !important;
        color: ${this.getAttribute('on-background') ? '#ffffff' : '#1473E6'} !important;
    }
    .labor-adobe-typo-body-link:hover {
        text-decoration: none !important;
        cursor: pointer;
    }
    .labor-adobe-typo-body-link-blue:hover {
        text-decoration: underline !important;
        cursor: pointer;
    }
  `

  render() {
    const attrs = {
      'font-size': '18px',
      'line-height': '26px',
      'font-weight': 400,
      'color': this.getAttribute('on-background') ? '#ffffff' : '#505050',
      'padding-bottom': this.getAttribute('padding-bottom'),
      'align': this.getAttribute('align'),
    }
    if (this.getAttribute('color')) attrs['color'] = this.getAttribute('color')

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </mj-text>
    `)
  }
}
