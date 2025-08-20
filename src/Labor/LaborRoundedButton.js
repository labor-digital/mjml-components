import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import widthParser from 'mjml-core/lib/helpers/widthParser'

registerDependencies({
  'labor-rounded-button': [],
  'mj-column': ['labor-rounded-button'],
})

export default class LaborRoundedButton extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'href': 'string',
    'padding-bottom': 'unit(px,%)',
    'width': 'unit(px)',
    'inner-padding': 'unit(px){1,4}',
    'color': 'color',
    'font-family': 'string',
    'font-size': 'unit(px)',
    'line-height': 'unit(px)',
    'font-weight': 'string',
    'background-color': 'color',
    'border-color': 'color',
    'border-width': 'unit(px)',
    'border-radius': 'unit(px)',
    'arcsize': 'unit(%)',
  }

  static defaultAttributes = {
    'href': null,

    'width': null,
    'inner-padding': '10px 30px',

    'font-family': '',
    'font-size': '16px',
    'line-height': '18px',
    'font-weight': '400',

    'color': '#fff',
    'background-color': '',
    'border-color': '',
    'border-width': '2px',
    'border-radius': '30px',
    'arcsize': '50%',
  }

  calculateAWidth(width) {
    if (!width) return null

    const { parsedWidth, unit } = widthParser(width)

    // impossible to handle percents because it depends on padding and text width
    if (unit !== 'px') return null

    const { borders } = this.getBoxWidths()

    const innerPaddings =
      this.getShorthandAttrValue('inner-padding', 'left') + this.getShorthandAttrValue('inner-padding', 'right')

    return `${parsedWidth - innerPaddings - borders}px`
  }

  calculateVmlHeight() {
    const lineheight = parseInt(this.getAttribute('line-height').replace('px', ''))
    const innerPaddings =
      this.getShorthandAttrValue('inner-padding', 'top') + this.getShorthandAttrValue('inner-padding', 'bottom')
    const borderwidth = parseInt(this.getAttribute('border-width').replace('px', ''))

    return lineheight + innerPaddings + borderwidth * 2 + 'px'
  }

  render() {
    const filled =
      this.getAttribute('background-color') && this.getAttribute('background-color') != 'transparent' ? true : false
    const bordered =
      this.getAttribute('border-color') && this.getAttribute('border-color') != 'transparent' ? true : false

    return `
            <!--[if mso]>
                <v:roundrect ${this.htmlAttributes({
                  'xmlns:v': 'urn:schemas-microsoft-com:vml',
                  'xmlns:w': 'urn:schemas-microsoft-com:office:word',
                  'style': {
                    'v-text-anchor': 'middle',
                    'width': this.getAttribute('width'),
                    'height': this.calculateVmlHeight(),
                  },
                  'arcsize': this.getAttribute('arcsize'),

                  'stroked': bordered,
                  'strokecolor': this.getAttribute('border-color'),
                  'strokeweight': this.getAttribute('border-width'),

                  'filled': filled,
                  'fillcolor': this.getAttribute('background-color'),
                })}
                >
                    <w:anchorlock/>
                    <center ${this.htmlAttributes({
                      style: {
                        'color': this.getAttribute('color'),
                        'font-family': this.getAttribute('font-family'),
                        'font-size': this.getAttribute('font-size'),
                        'line-height': this.getAttribute('line-height'),
                        'font-weight': this.getAttribute('font-weight'),
                      },
                    })}
                    >
                      <![endif]-->
                      <!--[if !mso]><!-->
                        <span ${this.htmlAttributes({
                          style: {
                            'background-color': filled ? this.getAttribute('background-color') : 'transparent',
                            'border-radius': this.getAttribute('border-radius'),
                            'border': bordered
                              ? this.getAttribute('border-width') + ' solid ' + this.getAttribute('border-color')
                              : 'none',

                            'display': 'inline-block',
                            'text-align': 'center',
                          },
                        })}
                        >
                          <!--<![endif]-->
                            <a ${this.htmlAttributes({
                              href: this.getAttribute('href'),
                              target: '_blank',
                              style: {
                                'color': this.getAttribute('color'),

                                'font-family': this.getAttribute('font-family'),
                                'font-size': this.getAttribute('font-size'),
                                'line-height': this.getAttribute('line-height'),
                                'font-weight': this.getAttribute('font-weight'),

                                'padding': this.getAttribute('inner-padding'),
                                'display': 'inline-block',
                                'width': this.calculateAWidth(this.getAttribute('width')),

                                'text-align': 'center',
                                'text-decoration': 'none',
                              },
                            })}
                            >
                              ${this.getContent()}
                            </a>
                          <!--[if !mso]><!-->
                        </span>
                      <!--<![endif]-->
                      <!--[if mso]>
                    </center>
                </v:roundrect>
            <![endif]-->
        `
  }
}
