import AdobeRedStyleMapping from './AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeTypoDisplayOne = {
  dependencies: {
    'mj-column': ['labor-adobe-typo-display-one'],
    'labor-adobe-typo-display-one': [],
  },
  endingTag: true,
  allowedAttributes:  {
    'on-background': 'boolean',
    'type': 'enum(normal,quiet)',
    'responsive': 'boolean',
    'padding-bottom': 'unit(px,%)',
  },
  defaultAttributes: {
    'on-background': false,
    'type': 'normal',
    'responsive': false,
    'padding-bottom': styleMapping.spacings.vertical.px0,
  },
  additionalAttributes: {
    fontSize: styleMapping.typographies.displayOne.fontSize,
    lineHeight: styleMapping.typographies.displayOne.lineHeight,
    fontWeight: {
      normal: styleMapping.typographies.displayOne.fontWeight,
      quiet: styleMapping.typographies.displayOne.fontWeight,
    },
    letterSpacing: styleMapping.typographies.displayOne.letterSpacing,
    color: styleMapping.typographies.displayOne.color,

    onBackgroundColor: styleMapping.colors.white.hex
  },
}
