import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import LaborGwaSection from './LaborGwaSection'

registerDependencies({
  'mj-body': ['labor-gwa-header'],
  'labor-gwa-header': [],
})

export default class LaborGwaHeader extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'src': 'string',
    'header-bg-class': 'string',
    'height': 'enum(22px, 28px, 30px, 34px)',
    'width': 'unit(px,%)',
    'href': 'string',
    'title': 'string',
    'alt': 'string',
    'target': 'string',
    'border': 'boolean',
    'padding-bottom-overwrite': 'unit(px)',
    'with-padding': 'boolean',
  }

  static defaultAttributes = {
    'src': '',
    'header-bg-class': 'content-bg',
    'height': '30px',
    'width': 'auto',
    'href': '',
    'target': '_blank',
    'border': false,
    'with-padding': true,
  }

  headStyle = (breakpoint) => `
      @media only screen and (max-width:${breakpoint}) {
        .labor-gwa-header-responsive {
          padding-left: ${LaborGwaSection.mobileLeftRightPadding} !important;
          padding-right: ${LaborGwaSection.mobileLeftRightPadding} !important;
        }
      }
    `

  render() {
    const imgHeight = parseInt(this.getAttribute('height').replace('px', ''))
    let padding = (124 - imgHeight - (this.getAttribute('border') ? 4 : 0)) / 2

    let imgAttrs = {
      'src': this.getAttribute('src'),
      'height': this.getAttribute('height'),
      'width': this.getAttribute('width'),
      'href': this.getAttribute('href'),
      'target': this.getAttribute('target'),
      'align': 'left',
      'css-class': this.getAttribute('with-padding') ? 'labor-gwa-header-responsive' : '',
      'padding-top': padding + 'px',
      'padding-bottom': this.getAttribute('padding-bottom-overwrite')
        ? this.getAttribute('padding-bottom-overwrite')
        : padding + 'px',
      'padding-left': this.getAttribute('with-padding')
        ? LaborGwaSection.desktopLeftRightPadding
        : '0',
      'padding-right': this.getAttribute('with-padding')
        ? LaborGwaSection.desktopLeftRightPadding
        : '0',
    }
    if (this.getAttribute('title')) imgAttrs['title'] = this.getAttribute('title')
    if (this.getAttribute('alt')) imgAttrs['alt'] = this.getAttribute('alt')

    return this.renderMJML(`
      <labor-gwa-section
        section-bg-class="${this.getAttribute('header-bg-class')}"
        border-top="${this.getAttribute('border') ? '4px solid #000000' : ''}"
        with-padding="false"
      >
        <mj-column>
          <mj-image ${this.htmlAttributes(imgAttrs)} />
        </mj-column>
      </labor-gwa-section>
    `)
  }
}
