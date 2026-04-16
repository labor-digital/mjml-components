import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import widthParser from 'mjml-core/lib/helpers/widthParser'

export default @MJMLCustomComponent({
  tag: 'labor-rounded-button',
  attributes: {
    'href': {
      type: 'string',
    },
    'padding-bottom': {
      type: 'unit(px,%)',
    },
    'width': {
      type: 'unit(px)',
    },
    'inner-padding': {
      type: 'unit(px){1,4}',
      default: '10px 30px',
    },
    'color': {
      type: 'color',
      default: '#fff',
    },
    'font-family': {
      type: 'string',
      default: '',
    },
    'font-size': {
      type: 'unit(px)',
      default: '16px',
    },
    'line-height': {
      type: 'unit(px)',
      default: '18px',
    },
    'font-weight': {
      type: 'string',
      default: '400',
    },
    'background-color': {
      type: 'color',
      default: '',
    },
    'border-color': {
      type: 'color',
      default: '',
    },
    'border-width': {
      type: 'unit(px)',
      default: '2px',
    },
    'border-radius': {
      type: 'unit(px)',
      default: '30px',
    },
    'arcsize': {
      type: 'unit(%)',
      default: '50%',
    },
  },
  allowedParentTags: ['mj-column'],
  allowedChildTags: [],
})

class LaborRoundedButton extends BodyComponent {
  static endingTag = true

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
