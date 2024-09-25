import AdobeRedStyleMapping from '../AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping

export const LaborAdobeFooter = {
  dependencies: {
    'mj-body': ['labor-adobe-footer'],
    'labor-adobe-footer': [],
  },
  endingTag: true,
  allowedAttributes:  {
    'facebook-url': 'string',
    'twitter-url': 'string',
    'instagram-url': 'string',
    'youtube-url': 'string',
    'footer-bg-class': 'string',
  },
  defaultAttributes: {
    'facebook-url': '',
    'twitter-url': '',
    'instagram-url': '',
    'youtube-url': '',
    'footer-bg-class': 'footer-bg',
  },
  additionalAttributes: {
    desktopLeftRightPadding: styleMapping.grids.desktop.contentSpacing,
    mobileLeftRightPadding: styleMapping.grids.mobile.contentSpacing,
    linkColor: styleMapping.labor.colors.footerLink.hex,
    align: 'left',
    socialIconBackgroundColor: styleMapping.labor.colors.socialIconBackgroundColor.hex,
    socialIconBorderRadius: "0px",
    socialSectionPaddingTop: "40px",
    socialSectionPaddingBottom: "40px",
    contentSectionPaddingBottom: "100px"
  },
}
