import AdobeRedStyleMapping from '../AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeHeaderBadge = {
  dependencies: {
    'mj-body': ['labor-adobe-header-badge'],
    'labor-adobe-header-badge': [],
  },
  endingTag: true,
  allowedAttributes:  {
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
    'badge-src': 'string',
    'badge-width': 'unit(px,%)',
    'badge-padding-right': 'unit(px,%)',
    'badge-align': 'string'
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
    'badge-src': '',
    'badge-width': '60px',
    'badge-padding-right': '0px',
    'badge-align': 'left'
  },
  additionalAttributes: {
    desktopLeftRightPadding: styleMapping.grids.desktop.contentSpacing,
    mobileLeftRightPadding: styleMapping.grids.mobile.contentSpacing,
    withBorder: styleMapping.labor.borders.header,
    align: 'left',
  },
}
