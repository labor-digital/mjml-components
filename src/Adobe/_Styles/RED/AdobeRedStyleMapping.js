export default class AdobeRedStyleMapping {

  static labor = {
    colors: {
      body: {
        hex: "#505050"
      },
      bodyLink: {
        hex: "#1473E6"
      },
      captionLink: {
        hex: "#959595"
      },
      detailLink: {
        hex: "#505050"
      },
      legal: {
        hex: "#959595"
      },
      columnBackground: {
        hex: "#eaeaea"
      },
      footerLink: {
        hex: "#959595"
      },
      socialIconBackgroundColor: {
        hex: "#F5F5F5"
      }
    },
    borders: {
      header: '4px solid #eb1000',
    }
  }

  static colors = {
    white: {
      hex: "#FFFFFF"
    } ,
    black: {
      hex: "#000000"
    },
    adobeRed: {
      hex: "#EB1000"
    },
    blue900: {
      hex: "#0265DC"
    },
    gray50: {
      hex: "#FFFFFF"
    },
    gray75: {
      hex: "#FDFDFD"
    },
    gray100: {
      hex: "#F8F8F8"
    },
    gray200: {
      hex: "#E6E6E6"
    },
    gray300: {
      hex: "#D5D5D5"
    },
    gray400: {
      hex: "#B1B1B1"
    },
    gray500: {
      hex: "#909090"
    },
    gray600: {
      hex: "#6D6D6D"
    },
    gray700: {
      hex: "#464646"
    },
    gray800: {
      hex: "#222222"
    },
    gray900: {
      hex: "#000000"
    },
    body: {
      hex: "#2C2C2C"
    }
  };

  static grids = {
    mobile : {
      width: "400px",
      content: "340px",
      contentSpacing: "30px",
      column: "50px",
      columnSpacing: "8px",
    },
    desktop: {
      width: "600px",
      content: "500px",
      contentSpacing: "50px",
      column: "75px",
      columnSpacing: "10px",
    }
  }

  static spacings = {
    vertical : {
      px0: "0px",
      px16: "16px",
      px20: "20px",
      px40: "40px",
      px42: "42px",
      px60: "60px",
      px100: "100px",
    },
    horizontal : {
      px0: "0px",
      px7: "7px",
      px10: "10px",
      px16: "16px",
      px20: "20px",
      px24: "24px",
      px30: "30px",
      px33: "33px",
      px34: "34px",
      px40: "40px",
      px42: "42px",
      px60: "60px",
      px100: "100px",
    }
  };

  static typographyFontSize = {
    size60: "60px",
    size45: "45px",
    size40: "40px",
    size36: "36px",
    size28: "28px",
    size22: "22px",
    size18: "18px",
    size16: "16px",
    size14: "14px",
    size11: "11px",
  }

  static typographyLineHeight = {
    size57: "57px",
    size43: "43px",
    size40: "40px",
    size38: "38px",
    size36: "36px",
    size31: "31px",
    size25: "25px",
    size24: "24px",
    size20: "20px",
    size18: "18px"
  }

  static typographyFontWeight = {
    black : 900,
    extraBold: 800,
    bold: 700,
    regular: 600,
  }

  static typographyLetterSpacing = {
    minusTwo : "-2%",
    minusThree: "-3%",
  }

  static typographyFontStyle = {
    italic: "italic"
  }

  static typographies = {
    displayOne: {
      variants: ["quiet"],
      fontSize: AdobeRedStyleMapping.typographyFontSize.size60,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size57,
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.black,
        quiet: AdobeRedStyleMapping.typographyFontWeight.extraBold
      },
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex,
    },

    displayTwo: {
      variants: ["quiet"],
      fontSize: AdobeRedStyleMapping.typographyFontSize.size45,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size43,
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.black,
        quiet: AdobeRedStyleMapping.typographyFontWeight.extraBold
      },
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex,
    },

    displayThree: {
      variants: ["quiet"],
      fontSize: AdobeRedStyleMapping.typographyFontSize.size40,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size38,
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.black,
        quiet: AdobeRedStyleMapping.typographyFontWeight.extraBold
      },
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex,
    },

    headingOne: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size36,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size40,
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex
    },

    headingTwo: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size28,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size31,
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex
    },

    headingThree: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size22,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size24,
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex
    },

    headingFour: {
      fontSize: AdobeRedStyleMapping.typographyFontSize.size18,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size20,
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusTwo,
      color: AdobeRedStyleMapping.colors.black.hex
    },

    body: {
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.regular,
      fontSize: AdobeRedStyleMapping.typographyFontSize.size18,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size25,
      color: AdobeRedStyleMapping.colors.body.hex,
      linkColor: AdobeRedStyleMapping.labor.colors.bodyLink.hex,
    },

    legal: {
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.regular,
      fontSize: AdobeRedStyleMapping.typographyFontSize.size11,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size18,
      color: AdobeRedStyleMapping.labor.colors.legal.hex
    },

    caption: {
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.regular,
      fontSize: AdobeRedStyleMapping.typographyFontSize.size14,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size20,
      fontStyle: AdobeRedStyleMapping.typographyFontStyle.italic,
      color: AdobeRedStyleMapping.colors.gray800.hex,
      linkColor: AdobeRedStyleMapping.labor.colors.captionLink.hex,
    },

    detail: {
      variants: ["light"],
      fontSize: AdobeRedStyleMapping.typographyFontSize.size18,
      lineHeight: AdobeRedStyleMapping.typographyLineHeight.size20,
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.bold,
        light: AdobeRedStyleMapping.typographyFontWeight.regular
      },
      letterSpacing: AdobeRedStyleMapping.typographyLetterSpacing.minusThree,
      color: AdobeRedStyleMapping.colors.gray800.hex,
      linkColor: AdobeRedStyleMapping.labor.colors.detailLink.hex,
    },

  };
}
