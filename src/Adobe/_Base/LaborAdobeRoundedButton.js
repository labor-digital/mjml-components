import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'labor-adobe-rounded-button': [],
  'mj-column': ['labor-adobe-rounded-button'],
})

export default class LaborAdobeRoundedButton extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    type: 'enum(cta, inverted, quiet, cta_inverted)',
    href: 'string',
    width: 'unit(px)',
    tone: 'enum(white, light, 300, 400, 500, 600, 700, 800, dark, black)'
  }

  static defaultAttributes = {
    type: 'cta',
    href: '#',
    width: '180px',
    tone: '700'
  }

  static tones = {
    'white': '#FFFFFF',
    'light': '#F5F5F5',
    '300': '#EAEAEA',
    '400': '#D3D3D3',
    '500': '#BCBCBC',
    '600': '#959595',
    '700': '#747474',
    '800': '#505050',
    'dark': '#2C2C2C',
    'black': '#000000'
  }

  render() {
    let attrs = {
      'href': this.getAttribute('href'),

      'width': this.getAttribute('width'),
      'inner-padding': '8px 18px 10px 18px',
      'font-size': '16px',
      'line-height': '18px',
      'font-weight': '600',
      'border-width': '2px',
    }
    switch (this.getAttribute('type')) {
      case 'quiet':
        attrs['color'] = LaborAdobeRoundedButton.tones[this.getAttribute('tone')]
        attrs['background-color'] = ''
        attrs['border-color'] = LaborAdobeRoundedButton.tones[this.getAttribute('tone')]
        break
      case 'inverted':
        attrs['color'] = '#ffffff'
        attrs['background-color'] = ''
        attrs['border-color'] = '#ffffff'
        break
      case 'cta_inverted':
        attrs['color'] = LaborAdobeRoundedButton.tones[this.getAttribute('tone')]
        attrs['background-color'] = '#ffffff'
        attrs['border-color'] = '#ffffff'
        break
      case 'cta':
      default:
        attrs['color'] = '#ffffff'
        attrs['background-color'] = '#1473e6'
        attrs['border-color'] = '#1473e6'
        break
    }

    return this.renderMJML(`
      <labor-rounded-button
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </labor-rounded-button>
    `)
  }
}
