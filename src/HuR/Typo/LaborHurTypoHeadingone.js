import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-hur-typo-headingone'],
  'labor-hur-typo-headingone': []
})

export default class LaborHurTypoHeadingone extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'type': 'enum(normal,quiet,bold)',
    'padding-bottom': 'unit(px,%)'
  }

  static defaultAttributes = {
    'on-background': false,
    'type': 'normal',
    'padding-bottom': '0px'
  }

  static fontWeights = {
    'normal': 600,
    'quiet': 400,
    'bold': 800
  };

  render() {
    const attrs = {
      'font-size': "30px",
      'line-height': "45px",
      'font-weight': LaborHurTypoHeadingone.fontWeights[this.getAttribute('type')],
      'color': this.getAttribute('on-background') ? "#ffffff" : "#004f9f",
      'padding-bottom': this.getAttribute('padding-bottom'),
      'align': this.getAttribute('align')
    };

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </mj-text>
    `);
  }
}
