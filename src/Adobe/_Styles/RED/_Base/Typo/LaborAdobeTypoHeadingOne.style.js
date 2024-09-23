import AdobeRedStyleMapping from '../../AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeTypoHeadingOne = {
  dependencies: {
    'mj-column': ['labor-adobe-typo-heading-one'],
    'labor-adobe-typo-heading-one': [],
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
    fontSize: styleMapping.typographies.headingOne.fontSize,
    lineHeight: styleMapping.typographies.headingOne.lineHeight,
    fontWeight: styleMapping.typographies.headingOne.fontWeight,
    letterSpacing: styleMapping.typographies.headingOne.letterSpacing,
    color: styleMapping.typographies.headingOne.color,

    onBackgroundColor: styleMapping.colors.white.hex,
  },
}
