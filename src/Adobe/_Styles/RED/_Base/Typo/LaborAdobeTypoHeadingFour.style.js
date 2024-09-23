import AdobeRedStyleMapping from '../../AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeTypoHeadingFour = {
  dependencies: {
    'mj-column': ['labor-adobe-typo-heading-four'],
    'labor-adobe-typo-heading-four': [],
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
    fontSize: styleMapping.typographies.headingFour.fontSize,
    lineHeight: styleMapping.typographies.headingFour.lineHeight,
    fontWeight: styleMapping.typographies.headingFour.fontWeight,
    letterSpacing: styleMapping.typographies.headingFour.letterSpacing,
    color: styleMapping.typographies.headingFour.color,

    onBackgroundColor: styleMapping.colors.white.hex,
  },
}
