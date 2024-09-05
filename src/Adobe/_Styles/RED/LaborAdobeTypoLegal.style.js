import AdobeRedStyleMapping from './AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeTypoLegal = {
  dependencies: {
    'mj-column': ['labor-adobe-typo-legal'],
    'labor-adobe-typo-legal': [],
  },
  endingTag: true,
  allowedAttributes:  {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
  },
  defaultAttributes: {
    'on-background': false,
    'padding-bottom': styleMapping.spacings.vertical.px0,
  },
  additionalAttributes: {
    fontWeight: styleMapping.typographies.legal.fontWeight,
    fontSize: styleMapping.typographies.legal.fontSize,
    lineHeight: styleMapping.typographies.legal.lineHeight,
    color: styleMapping.typographies.legal.color,

    onBackgroundColor: styleMapping.colors.white.hex,
  },
}
