// eslint-disable-next-line import/no-extraneous-dependencies
import { registerDependencies } from 'mjml-validator'
// eslint-disable-next-line import/no-extraneous-dependencies
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-hur-typo-body'],
  'labor-hur-typo-body': [],
})

export default class LaborHurTypoBody extends BodyComponent {
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
    .labor-hur-typo-body-link {
        text-decoration: underline !important;
        color: ${this.getAttribute('on-background') ? '#ffffff' : '#000000'} !important;
    }
    .labor-hur-typo-body-link:hover {
        text-decoration: none !important;
        cursor: pointer;
    }
    @media only screen and (max-width:${breakpoint}) {
      .labor-hur-typo-body {
      }
    }
  `;

  render() {
    const attrs = {
      'font-size': '14px',
      'line-height': '21px',
      'font-weight': 400,
      color: this.getAttribute('on-background') ? '#ffffff' : '#000000',
      'padding-bottom': this.getAttribute('padding-bottom'),
      align: this.getAttribute('align'),
    };
    if (this.getAttribute('color')) { attrs.color = this.getAttribute('color'); }

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </mj-text>
    `);
  }
}
