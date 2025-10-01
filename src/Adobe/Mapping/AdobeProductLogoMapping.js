// Application logos to be used for Application Pods, Alternative Application Pods and the like
// Red template app pods use 38 (mobile) + 35 (desktop) height, + 30 alt pod height
// We'll only use 35 for mobile&desktop app pods, and 30 for alt pods
export default class AdobeProductLogoMapping {

  static basePath = 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/red/product_logos/';
  static defaultHeight = 210;
  static defaultColor = 'gray'
  static getLogo = (product, color = this.defaultColor) => {

    if( !product || !color || !this.logos[product] || !this.logos[product]['width'] || !this.logos[product]['images'][color]) return null;

    let width = this.logos[product]['images'][color]['width'] ?? this.logos[product]['width'];
    let height =  this.logos[product]['images'][color]['height'] ?? this.logos[product]['height'] ?? this.defaultHeight;

    return  {
      name: this.logos[product]['name'],
      key: this.logos[product]['key'],
      width: width,
      height: height,
      location: this.logos[product]['images'][color]['location'] ?? this.basePath + this.logos[product]['key'] + '.' + color + '.' + width + 'x' + height + '.png',
    }
  }

  static logos = {
    acrobat: {
      name: 'Adobe Acrobat',
      key: 'acrobat',
      width: 798,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    acrobat_pro: {
      name: 'Adobe Acrobat Pro',
      key: 'acrobat_pro',
      width: 1008,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    acrobat_reader: {
      name: 'Adobe Acrobat Reader',
      key: 'acrobat_reader',
      width: 1176,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    acrobat_sign: {
      name: 'Adobe Acrobat Sign',
      key: 'acrobat_sign',
      width: 1050,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    acrobat_standard: {
      name: 'Adobe Acrobat Standard',
      key: 'acrobat_standard',
      width: 1302,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    after_effects: {
      name: 'Adobe After Effects',
      key: 'after_effects',
      width: 1008,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    creative_cloud: {
      name: 'Adobe Creative Cloud',
      key: 'creative_cloud',
      width: 1134,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    document_cloud: {
      name: 'Adobe Document Cloud',
      key: 'document_cloud',
      width: 1260,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    experience_cloud: {
      name: 'Adobe Experience Cloud',
      key: 'experience_cloud',
      width: 1302,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    express: {
      name: 'Adobe Express',
      key: 'express',
      width: 756,
      images: {
        black: {},
        gray: {
          width: 561,
          height: 105,
          location: "https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/express/adobe_express.grey.561x105.png"
        },
        white: {},
      },
    },
    firefly: {
      name: 'Adobe Firefly',
      key: 'firefly',
      width: 672,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    illustrator: {
      name: 'Adobe Illustrator',
      key: 'illustrator',
      width: 882,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    indesign: {
      name: 'Adobe InDesign',
      key: 'indesign',
      width: 798,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    photoshop: {
      name: 'Adobe Photoshop',
      key: 'photoshop',
      width: 924,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    premiere_pro: {
      name: 'Adobe Premiere Pro',
      key: 'premiere_pro',
      width: 1050,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    scan: {
      name: 'Adobe Scan',
      key: 'scan',
      width: 588,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
    stock: {
      name: 'Adobe Stock',
      key: 'stock',
      width: 672,
      images: {
        black: {},
        gray: {},
        white: {},
      },
    },
  }
}
