import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'labor-hur-rounded-button': [],
  'mj-column': ['labor-hur-rounded-button']
})

export default class LaborHurButton extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'type': 'enum(cta,inverted,quiet)',
    'href': 'string',
    'width': 'unit(px)',
  }

  static defaultAttributes = {
    'type': 'cta',
    'href': "#",
  }

  render() {
    let attrs = {
      'href': this.getAttribute('href'),
      'width': this.getAttribute('width'),
      'inner-padding': '9px 18px',
      'font-size': '14px',
      'line-height': '14px',
      'font-weight': '700',
      'border-width': '2px',
      'border-radius': '0px',
      arcsize: '0'
    };
    switch(this.getAttribute('type'))
    {
      case 'quiet':
        attrs['color'] = '#004f9f';
        attrs['background-color'] = '';
        attrs['border-color'] = '#004f9f';
        break;
      case 'inverted':
        attrs['color'] = '#004f9f';
        attrs['background-color'] = '#ffffff';
        attrs['border-color'] = '#ffffff';
        break;
      case 'cta':
      default:
        attrs['color'] = '#ffffff';
        attrs['background-color'] = '#004f9f';
        attrs['border-color'] = '#004f9f';
        break;
    }

    return this.renderMJML(`
      <labor-rounded-button
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </labor-rounded-button>
    `);
  }
}
