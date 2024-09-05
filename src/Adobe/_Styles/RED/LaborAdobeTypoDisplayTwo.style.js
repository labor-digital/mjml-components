import AdobeRedStyleMapping from './AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeTypoDisplayTwo = {
  dependencies: {
    'mj-column': ['labor-adobe-typo-display-two'],
    'labor-adobe-typo-display-two': [],
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
    fontSize: styleMapping.typographies.displayTwo.fontSize,
    lineHeight: styleMapping.typographies.displayTwo.lineHeight,
    fontWeight: {
      normal: styleMapping.typographies.displayTwo.fontWeight,
      quiet: styleMapping.typographies.displayTwo.fontWeight,
    },
    letterSpacing: styleMapping.typographies.displayTwo.letterSpacing,

    onBackgroundColor: styleMapping.colors.white.hex,
    color: styleMapping.typographies.displayTwo.color
  },
}
