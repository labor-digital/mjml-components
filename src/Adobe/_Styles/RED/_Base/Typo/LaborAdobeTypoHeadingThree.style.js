import AdobeRedStyleMapping from '../../AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeTypoHeadingThree = {
  dependencies: {
    'mj-column': ['labor-adobe-typo-heading-three'],
    'labor-adobe-typo-heading-three': [],
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
    fontSize: styleMapping.typographies.headingThree.fontSize,
    lineHeight: styleMapping.typographies.headingThree.lineHeight,
    fontWeight: styleMapping.typographies.headingThree.fontWeight,
    letterSpacing: styleMapping.typographies.headingThree.letterSpacing,
    color: styleMapping.typographies.headingThree.color,

    onBackgroundColor: styleMapping.colors.white.hex,
  },
}
