import AdobeRedStyleMapping from '../../AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeTypoDetail = {
  dependencies: {
    'mj-column': ['labor-adobe-typo-detail'],
    'labor-adobe-typo-detail': [],
  },
  endingTag: true,
  allowedAttributes: {
    'on-background': 'boolean',
    'padding-bottom': 'unit(px,%)',
    'type': 'enum(normal,light)',
  },
  defaultAttributes: {
    'on-background': false,
    'padding-bottom': styleMapping.spacings.vertical.px0,
    'type': 'normal'
  },
  additionalAttributes: {
    fontSize: styleMapping.typographies.detail.fontSize,
    lineHeight: styleMapping.typographies.detail.lineHeight,
    fontWeight: styleMapping.typographies.detail.fontWeight,
    color: styleMapping.typographies.detail.color,
    linkColor: styleMapping.typographies.detail.linkColor,

    onBackgroundColor: styleMapping.colors.white.hex
  },
}
