import AdobeRedStyleMapping from '../AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeHeader = {
  dependencies: {
    'mj-body': ['labor-adobe-header'],
    'labor-adobe-header': [],
  },
  endingTag: true,
  allowedAttributes:  {
    'src': 'string',
    'header-bg-class': 'string',
    'height': 'enum(22px,28px,30px,34px)',
    'width': 'unit(px,%)',
    'href': 'string',
    'title': 'string',
    'alt': 'string',
    'target': 'string',
    'border': 'boolean',
    'padding-bottom-overwrite': 'unit(px)',
    'with-padding': 'boolean',
  },
  defaultAttributes: {
    'src': '',
    'header-bg-class': 'content-bg',
    'height': '30px',
    'width': 'auto',
    'href': '',
    'target': '_blank',
    'border': false,
    'with-padding': true,
  },
  additionalAttributes: {
    desktopLeftRightPadding: styleMapping.grids.desktop.contentSpacing,
    mobileLeftRightPadding: styleMapping.grids.mobile.contentSpacing,
    withBorder: styleMapping.labor.borders.header,
    align: 'left',
  },
}
