import AdobeRedStyleMapping from '../AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeSection = {
  dependencies: {
    'labor-adobe-section': ['mj-group', 'mj-column'],
    'mj-wrapper': ['labor-adobe-section'],
    'labor-bg-wrapper': ['labor-adobe-section'],
    'mj-body': ['labor-adobe-section'],
  },
  allowedAttributes:  {
    'with-padding': 'boolean',
    'section-bg-class': 'string',
    'padding-bottom': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
  },
  defaultAttributes: {
    'with-padding': true,
    'section-bg-class': 'content-bg',
  },
  additionalAttributes: {
   desktopLeftRightPadding: styleMapping.grids.desktop.contentSpacing,
   mobileLeftRightPadding: styleMapping.grids.mobile.contentSpacing,
  },
}
