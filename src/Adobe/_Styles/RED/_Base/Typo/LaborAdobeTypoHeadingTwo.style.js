import AdobeRedStyleMapping from '../../AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeTypoHeadingTwo = {
  dependencies: {
    'mj-column': ['labor-adobe-typo-heading-two'],
    'labor-adobe-typo-heading-two': [],
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
    fontSize: styleMapping.typographies.headingTwo.fontSize,
    lineHeight: styleMapping.typographies.headingTwo.lineHeight,
    fontWeight: styleMapping.typographies.headingTwo.fontWeight,
    letterSpacing: styleMapping.typographies.headingTwo.letterSpacing,
    color: styleMapping.typographies.headingTwo.color,

    onBackgroundColor: styleMapping.colors.white.hex,
  },
}
