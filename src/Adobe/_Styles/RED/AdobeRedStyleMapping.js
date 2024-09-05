export default class AdobeRedStyleMapping {

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
    }
  };

  static laborColors = {
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
    }
  }

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
      px0: "0px"
    }
  };

  static typographyFontWeight = {
    black : 900,
    extraBold: 800,
    bold: 700,
    regular: 600,
  }

  static typographies = {
    displayOne: {
      variants: ["quiet"],
      fontSize: "60px",
      lineHeight: "57px",
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.black,
        quiet: AdobeRedStyleMapping.typographyFontWeight.extraBold
      },
      letterSpacing: "-2%",
      color: AdobeRedStyleMapping.colors.black,
    },

    displayTwo: {
      variants: ["quiet"],
      fontSize: "45px",
      lineHeight: "43px",
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.black,
        quiet: AdobeRedStyleMapping.typographyFontWeight.extraBold
      },
      letterSpacing: "-2%",
      color: AdobeRedStyleMapping.colors.black,
    },

    displayThree: {
      variants: ["quiet"],
      fontSize: "40px",
      lineHeight: "38px",
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.black,
        quiet: AdobeRedStyleMapping.typographyFontWeight.extraBold
      },
      letterSpacing: "-2%",
      color: AdobeRedStyleMapping.colors.black,
    },

    headingOne: {
      fontSize: "36px",
      lineHeight: "40px",
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: "-2%",
      color: AdobeRedStyleMapping.colors.black
    },

    headingTwo: {
      fontSize: "28px",
      lineHeight: "31px",
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: "-2%",
      color: AdobeRedStyleMapping.colors.black
    },

    headingThree: {
      fontSize: "22px",
      lineHeight: "24px",
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: "-2%",
      color: AdobeRedStyleMapping.colors.black
    },

    headingFour: {
      fontSize: "18px",
      lineHeight: "20px",
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.extraBold,
      letterSpacing: "-2%",
      color: AdobeRedStyleMapping.colors.black
    },

    body: {
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.regular,
      fontSize: "18px",
      lineHeight: "25px",
      color: AdobeRedStyleMapping.colors.gray800,
      linkColor: AdobeRedStyleMapping.laborColors.bodyLink,
    },

    legal: {
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.regular,
      fontSize: "11px",
      lineHeight: "18px",
    },

    caption: {
      fontWeight: AdobeRedStyleMapping.typographyFontWeight.regular,
      fontSize: "14px",
      lineHeight: "20px",
      fontStyle: "italic",
      color: AdobeRedStyleMapping.colors.gray800,
      linkColor: AdobeRedStyleMapping.laborColors.captionLink,
    },

    detail: {
      variants: ["light"],
      fontSize: "18px",
      lineHeight: "20px",
      fontWeight: {
        normal: AdobeRedStyleMapping.typographyFontWeight.bold,
        light: AdobeRedStyleMapping.typographyFontWeight.regular
      },
      letterSpacing: "-3%",
      color: AdobeRedStyleMapping.colors.gray800,
      linkColor: AdobeRedStyleMapping.laborColors.detailLink,
    },

  };
}
