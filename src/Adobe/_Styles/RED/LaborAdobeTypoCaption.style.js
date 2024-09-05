import AdobeRedStyleMapping from './AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeTypoCaption = {
  dependencies: {
    'mj-column': ['labor-adobe-typo-caption'],
    'labor-adobe-typo-caption': [],
  },
  endingTag: true,
  allowedAttributes: {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
    'padding-left': 'unit(px,%)',
    'padding-right': 'unit(px,%)',
  },
  defaultAttributes: {
    'on-background': false,
    'padding-bottom': styleMapping.spacings.vertical.px0,
    'padding-left':  styleMapping.spacings.horizontal.px0,
    'padding-right': styleMapping.spacings.horizontal.px0,
  },
  additionalAttributes: {
    fontWeight: styleMapping.typographies.caption.fontWeight,
    fontSize: styleMapping.typographies.caption.fontSize,
    lineHeight: styleMapping.typographies.caption.lineHeight,
    fontStyle: styleMapping.typographies.caption.fontStyle,
    color: styleMapping.typographies.caption.color,
    linkColor: styleMapping.typographies.caption.linkColor,

    onBackgroundColor: styleMapping.colors.white.hex,
  },
}
