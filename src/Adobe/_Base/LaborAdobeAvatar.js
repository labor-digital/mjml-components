import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping;

registerDependencies({
  'labor-adobe-avatar': [],
  'mj-column': ['labor-adobe-avatar'],
});

export default class LaborAdobeAvatar extends BodyComponent {

  static endingTag = true;
  static allowedAttributes =  {
    'src': 'string',
    'name': 'string',
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
  };
  static defaultAttributes = {
    'name': '',
    'on-background': false,
    'padding-bottom': '0px',
  };
  static additionalAttributes = {
    desktopLeftRightPadding: styleMapping.grids.desktop.contentSpacing,
    mobileLeftRightPadding: styleMapping.grids.mobile.contentSpacing,
    iconSize: "73px",
    align: 'left',
  };

  render() {
    const attrs = {
      'font-size': '14px',
      'line-height': '20px',
      'font-style': 'italic',
      'font-weight': 400,
      'text-padding': '0 0 0 20px',
      'color': this.getAttribute('on-background') ? '#ffffff' : '#959595',
      'padding-bottom': this.getAttribute('padding-bottom'),
      'align': LaborAdobeAvatar.additionalAttributes.align,
      'src': this.getAttribute('src'),
    }

    return this.renderMJML(`
            <mj-social align=${LaborAdobeAvatar.additionalAttributes.align} icon-size=${LaborAdobeAvatar.additionalAttributes.iconSize}>
                <mj-social-element 
                    ${this.htmlAttributes(attrs)}
                >
                    ${this.getAttribute('name')}
                </mj-social-element>
            </mj-social>
        `)
  }
}
