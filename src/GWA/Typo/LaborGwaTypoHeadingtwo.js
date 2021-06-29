import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-column': ['labor-gwa-typo-headingtwo'],
  'labor-gwa-typo-headingtwo': [],
})

export default class LaborGwaTypoHeadingtwo extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'on-background': 'boolean',
    'type': 'enum(normal,quiet,bold)',
    'padding-bottom': 'unit(px,%)',
  }

  static defaultAttributes = {
    'on-background': false,
    'type': 'normal',
    'padding-bottom': '0px',
  }

  static fontWeights = {
    normal: 600,
    quiet: 400,
    bold: 800,
  }

  render() {
    const attrs = {
      'font-size': '28px',
      'line-height': '32px',
      'font-weight': LaborGwaTypoHeadingtwo.fontWeights[this.getAttribute('type')],
      'color': this.getAttribute('on-background') ? '#ffffff' : '#000000',
      'padding-bottom': this.getAttribute('padding-bottom'),
      'align': this.getAttribute('align'),
    }
    if (this.getAttribute('color')) attrs['color'] = this.getAttribute('color')

    let anchor = ''
    if (this.getAttribute('id'))
      anchor = `<a id="` + this.getAttribute('id') + `" name="` + this.getAttribute('id') + `"></a>`

    return this.renderMJML(`
      <mj-text
        ${this.htmlAttributes(attrs)}
      >
        ${anchor}${this.getContent()}
      </mj-text>
    `)
  }
}
