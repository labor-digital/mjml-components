import AdobeRedStyleMapping from '../AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeAvatar = {
  dependencies: {
    'labor-adobe-avatar': [],
    'mj-column': ['labor-adobe-avatar'],
  },
  endingTag: true,
  allowedAttributes:  {
    'src': 'string',
    'name': 'string',
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
  },
  defaultAttributes: {
    'name': '',
    'on-background': false,
    'padding-bottom': '0px',
  },
  additionalAttributes: {
    desktopLeftRightPadding: styleMapping.grids.desktop.contentSpacing,
    mobileLeftRightPadding: styleMapping.grids.mobile.contentSpacing,
    iconSize: "73px",
    align: 'left',
  },
}
