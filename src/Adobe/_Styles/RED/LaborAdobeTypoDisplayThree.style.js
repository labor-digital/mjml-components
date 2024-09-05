import AdobeRedStyleMapping from './AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeTypoDisplayThree = {
  dependencies: {
    'mj-column': ['labor-adobe-typo-display-three'],
    'labor-adobe-typo-display-three': [],
  },
  endingTag: true,
  allowedAttributes:  {
    'on-background': 'boolean',
    'type': 'enum(normal,quiet,bold)',
    'padding-bottom': 'unit(px,%)',
  },
  defaultAttributes: {
    'on-background': false,
    'type': 'normal',
    'padding-bottom': styleMapping.spacings.vertical.px0,
  },
  additionalAttributes: {
    fontSize: styleMapping.typographies.displayThree.fontSize,
    lineHeight: styleMapping.typographies.displayThree.lineHeight,
    fontWeight: {
      normal: styleMapping.typographies.displayThree.fontWeight,
      quiet: styleMapping.typographies.displayThree.fontWeight,
    },
    letterSpacing: styleMapping.typographies.displayThree.letterSpacing,
    onBackgroundColor: styleMapping.colors.white.hex,
    color: styleMapping.typographies.displayThree.color
  },
}