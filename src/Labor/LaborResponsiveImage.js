import { registerDependencies } from 'mjml-validator'
import MjImage from 'mjml-image'

registerDependencies({
  'mj-column': ['labor-responsive-image'],
  'labor-responsive-image': [],
})

export default class LaborResponsiveImage extends MjImage {
  static allowedAttributes = {
    ...MjImage.allowedAttributes,
    'src-mobile': 'string',
  }

  static endingTag = true

  headStyle = (breakpoint) =>
    new MjImage().headStyle(breakpoint) +
    `
      .laborResponsiveImage-image--web {
          display: block !important;
      }
      .laborResponsiveImage-image--mobile {
          display: none !important;
      }
      @media only screen and (max-width:${breakpoint}) {
        .laborResponsiveImage-image--web {
          display: none !important;
        }
        .laborResponsiveImage-image--mobile {
          display: block !important;
        }
      }
    `

  getStyles() {
    let styles = super.getStyles()

    const fullWidth = this.getAttribute('full-width') === 'full-width'

    styles['imgMobile'] = Object.assign({}, styles['img'])
    styles['imgMobile']['display'] = 'none'

    return styles
  }

  renderImage() {
    let img = super.renderImage()

    if (!this.getAttribute('src-mobile')) return img

    const height = this.getAttribute('height')

    img = img.replace('<img', '<img class="laborResponsiveImage-image--web" ')

    let imgMobile = `
      <img
        class="laborResponsiveImage-image--mobile"
        ${this.htmlAttributes({
          alt: this.getAttribute('alt'),
          height: height && (height === 'auto' ? height : parseInt(height, 10)),
          src: this.getAttribute('src-mobile'),
          style: 'imgMobile',
          title: this.getAttribute('title'),
        })}
      />
    `

    if (this.getAttribute('href')) {
      imgMobile = `
        <a
          ${this.htmlAttributes({
            href: this.getAttribute('href'),
            target: this.getAttribute('target'),
            rel: this.getAttribute('rel'),
            name: this.getAttribute('name'),
          })}
        >
          ${imgMobile}
        </a>
      `
    }

    return img + '<div class="laborResponsiveImage-image--mobile">' + imgMobile + '</div>'
  }
}
