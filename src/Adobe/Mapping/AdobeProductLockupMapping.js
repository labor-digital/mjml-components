export default class AdobeProductLockupMapping {

  static basePath = 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/red/product_lockups/';
  static defaultHeight = 168;
  static defaultColor = 'red_gray'

  static getLockup = (product, color) => {

    if(!color) {
      color = this.lockups[product]['defaultColor'] ?? this.defaultColor;
    }

    if( !product || !color || !this.lockups[product] || !this.lockups[product]['width'] || !this.lockups[product]['images'][color]) return null;

    let width = this.lockups[product]['images'][color]['width'] ?? this.lockups[product]['width'];
    let height =  this.lockups[product]['images'][color]['height'] ?? this.lockups[product]['height'] ?? this.defaultHeight;

    return  {
      name: this.lockups[product]['name'],
      key: this.lockups[product]['key'],
      // keep it possible to use image specific width/height eg. after an update, otherwise use the default values
      width: width,
      height: height,
      location:
        this.basePath + (this.lockups[product]['images'][color]['location'] ?? this.lockups[product]['key'] + '.' + color + '.' + width + 'x' + height + '.png'),
    }
  }

  static lockups = {
    brand :{
      name: 'Adobe',
      key: 'brand',
      width: 328,
      defaultColor: 'red',
      images: {
        red: {
          location: 'brand.01.red.328x168.png'
        },
        white: {
          location: 'brand.01.white.328x168.png'
        },
      },
    },
    acrobat: {
      name: 'Adobe Acrobat',
      key: 'acrobat',
      width: 732,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    acrobat_pro: {
      name: 'Adobe Acrobat Pro',
      key: 'acrobat_pro',
      width: 920,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    acrobat_reader: {
      name: 'Adobe Acrobat Reader',
      key: 'acrobat_reader',
      width: 1100,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    acrobat_sign: {
      name: 'Adobe Acrobat Reader',
      key: 'acrobat_sign',
      width: 964,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    acrobat_standard: {
      name: 'Adobe Acrobat Standard',
      key: 'acrobat_standard',
      width: 1192,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    after_effects: {
      name: 'Adobe After Effects',
      key: 'after_effects',
      width: 968,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    creative_cloud: {
      name: 'Adobe Creative Cloud',
      key: 'creative_cloud',
      width: 1064,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    document_cloud: {
      name: 'Adobe Document Cloud',
      key: 'document_cloud',
      width: 1156,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    education_exchange :{
      name: 'Education Exchange',
      key: 'education_exchange',
      width: 984,
      defaultColor: 'red',
      images: {
        red: {
          location: 'education_exchange.red.984x168.png'
        },
        white: {
          location: 'education_exchange.white.984x168.png'
        },
      },
    },
    experience_cloud: {
      name: 'Adobe Experience Cloud',
      key: 'experience_cloud',
      width: 1192,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    express: {
      name: 'Adobe Express',
      key: 'express',
      width: 732,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    firefly: {
      name: 'Adobe Firefly',
      key: 'firefly',
      width: 664,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    illustrator: {
      name: 'Adobe Illustrator',
      key: 'illustrator',
      width: 832,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    indesign: {
      name: 'Adobe Indesign',
      key: 'indesign',
      width: 784,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    photoshop: {
      name: 'Adobe Photoshop',
      key: 'photoshop',
      width: 892,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    premiere_pro: {
      name: 'Adobe Premiere Pro',
      key: 'premiere_pro',
      width: 992,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    scan: {
      name: 'Adobe Scan',
      key: 'scan',
      width: 584,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    stock: {
      name: 'Adobe Stock',
      key: 'stock',
      width: 632,
      images: {
        red_black: {},
        red_gray: {},
        red_white: {},
        white_black: {},
      },
    },
    // Lightroom, Edex, Brand
    // Check if needs to be added:
    // spark
    // sign
    // scan
    // rush
    // live
    // behance
    // portfolio
    // animator
    // twitter_ace
    // audition
    // substance 3d
  }
}
