import AdobeRedStyleMapping from '../../AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeTypoBody = {
  dependencies: {
    'mj-column': ['labor-adobe-typo-body'],
    'labor-adobe-typo-body': [],
  },
  endingTag: true,
  allowedAttributes: {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
  },
  defaultAttributes: {
    'on-background': false,
    'padding-bottom': styleMapping.spacings.vertical.px0,
  },
  additionalAttributes: {
    fontWeight: styleMapping.typographies.body.fontWeight,
    fontSize: styleMapping.typographies.body.fontSize,
    lineHeight: styleMapping.typographies.body.lineHeight,
    color: "#505050",
    // color: styleMapping.typographies.body.color,
    linkColor: styleMapping.typographies.body.linkColor,
    onBackgroundColor: styleMapping.colors.white.hex
  },
}
