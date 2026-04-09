export default class AdobeRedStyleMapping {
  static labor = {
    colors: {
      body: {
        hex: '#505050',
      },
      bodyLink: {
        hex: '#3B63FB',
      },
      captionLink: {
        hex: '#959595',
      },
      detailLink: {
        hex: '#505050',
      },
      legal: {
        hex: '#959595',
      },
      columnBackground: {
        hex: '#eaeaea',
      },
      footerLink: {
        hex: '#959595',
      },
      socialIconBackgroundColor: {
        hex: '#F5F5F5',
      },
      actionCardBackgroundColor: {
        hex: '#F5F5F5',
      },
      edexCategory: {
        hex: '#7C7C7C',
      },
    },
    borders: {
      header: '4px solid #eb1000',
    },
  }

  static colors = {
    white: {
      hex: '#FFFFFF',
    },
    black: {
      hex: '#000000',
    },
    adobeRed: {
      hex: '#EB1000',
    },
    buttonExpress: {
      hex: '#5C5CE0'
    },
    buttonQuiet: {
      hex: '#747474',
    },
    blue900: {
      hex: '#3B63FB',
    },
    gray50: {
      hex: '#FFFFFF',
    },
    gray75: {
      hex: '#FDFDFD',
    },
    gray100: {
      hex: '#F8F8F8',
    },
    gray200: {
      hex: '#E6E6E6',
    },
    gray300: {
      hex: '#D5D5D5',
    },
    gray400: {
      hex: '#B1B1B1',
    },
    gray500: {
      hex: '#909090',
    },
    gray600: {
      hex: '#6D6D6D',
    },
    gray700: {
      hex: '#464646',
    },
    gray800: {
      hex: '#222222',
    },
    gray900: {
      hex: '#000000',
    },
    body: {
      hex: '#2C2C2C',
    },
  }

  static spacings = {
    custom: {
      // default for elements without horizontal or vertical spacing
      px0: '0px',
      // product logo regular padding bottom
      px5: '5px',
      // social section spacing
      px6: '6px',
      // product logo regular padding bottom
      px24: '24px',
      // action card image mobile padding
      px30: '30px',
      px34: '34px',
      // header lockup padding top/bottom
      px41: '41px',
      // actioncard default padding top/bottom
      px50: '50px',
      // footer padding with legal subtracted
      px82: '82px',
    },
    vertical: {
      px12: '12px',
      px16: '16px',
      px20: '20px',
      px40: '40px',
      px42: '42px',
      px60: '60px',
      px100: '100px',
    },
    horizontal: {
      px0: '0px',
      px7: '7px',
      px10: '10px',
      px12: '12px',
      px16: '16px',
      px20: '20px',
      px24: '24px',
      px30: '30px',
      px33: '33px',
      px34: '34px',
      px40: '40px',
      px42: '42px',
      px60: '60px',
      px100: '100px',
    },
  }

  static grids = {
    mobile: {
      width: '400px',
      content: '340px',
      contentSpacing: '30px',
      column: '50px',
      columnSpacing: '8px',
    },
    desktop: {
      width: '600px',
      content: '500px',
      contentSpacing: '50px',
      column: '75px',
      columnSpacing: '10px',
    },
  }

  static typographyFontSize = {
    size60: '60px',
    size45: '45px',
    size40: '40px',
    size36: '36px',
    size28: '28px',
    size22: '22px',
    size18: '18px',
    size16: '16px',
    size14: '14px',
    size11: '11px',
  }

  static typographyLineHeight = {
    size57: '60px',//'57px',
    size46: '46px',
    size43: '45px',//'43px',
    size40: '40px',
    size38: '40px',//,'38px',
    size36: '36px',
    size31: '31px',
    size26: '26px',
    size25: '25px',
    size24: '24px',
    size20: '20px',
    size18: '18px',
  }

  static typographyFontWeight = {
    black: 900,
    extraBold: 800,
    bold: 700,
    medium: 500,
    regular: 400,
  }

  static typographyLetterSpacing = {
    minusTwo: '-0.02em',
    minusThree: '-0.02em',
  }

  static typographyFontStyle = {
    regular: 'regular',
    italic: 'italic',
  }

  static typographies = {
    displayOne: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size60,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size57,
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.black,
        quiet: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      },
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex,
      colorOnBackground: AdobeRedStyleMapping.colors.white.hex,
      padding: {
        defaultPaddingBottom: AdobeRedStyleMapping.spacings.vertical.px20,
        responsivePaddingBottomDesktop: AdobeRedStyleMapping.spacings.vertical.px20,
        responsivePaddingBottomMobile: AdobeRedStyleMapping.spacings.vertical.px16,
      }

    },

    displayTwo: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size45,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size43,
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.black,
        quiet: AdobeRedStyleMapping.typographyFontWeight.medium,
      },
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex,
      paddingBottom: AdobeRedStyleMapping.spacings.vertical.px16,
    },

    displayThree: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size40,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size38,
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.black,
        quiet: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      },
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex,
      paddingBottom: AdobeRedStyleMapping.spacings.vertical.px16,
    },

    headingOne: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size36,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size40,
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex,
      paddingBottom: AdobeRedStyleMapping.spacings.vertical.px20,
    },

    headingTwo: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size28,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size31,
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex,
      paddingBottom: AdobeRedStyleMapping.spacings.vertical.px16,
    },

    headingThree: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size22,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size24,
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex,
      paddingBottom: AdobeRedStyleMapping.spacings.vertical.px12,
    },

    headingFour: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size18,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size20,
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex,
      paddingBottom: AdobeRedStyleMapping.spacings.vertical.px12,
    },

    body: {
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.regular,
      fontSize: AdobeRedStyleMapping.typographyFontSize.size18,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size25,
      color: AdobeRedStyleMapping.colors.body.hex,
      linkColor: AdobeRedStyleMapping.labor.colors.bodyLink.hex,
      paddingBottom: AdobeRedStyleMapping.spacings.vertical.px40,
    },

    legal: {
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.regular,
      fontSize: AdobeRedStyleMapping.typographyFontSize.size11,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size18,
      color: AdobeRedStyleMapping.labor.colors.legal.hex,
      paddingBottom: AdobeRedStyleMapping.typographyLineHeight.size18,
    },

    caption: {
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.regular,
      fontSize: AdobeRedStyleMapping.typographyFontSize.size14,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size20,
      fontStyle: {
        regular: AdobeRedStyleMapping.typographyFontStyle.regular,
        italic: AdobeRedStyleMapping.typographyFontStyle.italic,
      },
      color: AdobeRedStyleMapping.colors.gray800.hex,
      linkColor: AdobeRedStyleMapping.labor.colors.captionLink.hex,
      paddingBottom: AdobeRedStyleMapping.spacings.custom.px0,
    },

    detail: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size18,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size20,
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.extraBold,
        light: AdobeRedStyleMapping.typographyFontWeight.regular,
      },
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusThree,
      color: AdobeRedStyleMapping.colors.gray800.hex,
      linkColor: AdobeRedStyleMapping.labor.colors.detailLink.hex,
      paddingBottom: AdobeRedStyleMapping.spacings.vertical.px20,
    },
    cta: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size16,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size20,
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.bold,
      paddingBottom: AdobeRedStyleMapping.spacings.vertical.px100,
      paddingTop: AdobeRedStyleMapping.spacings.custom.px0,
    },
  }
}
