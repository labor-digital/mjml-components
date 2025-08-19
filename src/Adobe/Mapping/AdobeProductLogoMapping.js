
// Application logos to be used for Application Pods, Alternative Application Pods and the like
// Red template app pods use 38 (mobile) + 35 (desktop) height, + 30 alt pod height
// We'll only use 35 for mobile&desktop app pods, and 30 for alt pods
export default class AdobeProductLogoMapping {
  static logos = {
    acrobat: {
      name: 'Adobe Acrobat',
      images: {
        regular: {
          width: '500px',
          height: '70px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/acrobat/adobe_acrobat.black.500x70.png'
        },
        alt: {
          width: '392px',
          height: '60px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/acrobat/adobe_acrobat.black.392x60.png',
        }
      }
    },
    ccx: {
      name: 'Adobe Express',
      images: {
        regular: {
          width: '320px',
          height: '70px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/express/adobe_express.black.320x70.png'
        },
        alt: {
          width: '320px',
          height: '60px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/express/adobe_express.black.320x60.png',
        },
        black: {
          width: '561px',
          height: '105px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/express/adobe_express.black.561x105.png'
        },
        grey: {
          width: '561px',
          height: '105px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/express/adobe_express.grey.561x105.png',
        },
        white: {
          width: '561px',
          height: '105px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/express/adobe_express.white.561x105.png',
        }
      },
    },
    firefly: {
      name: 'Adobe Firefly',
      images: {
        regular: {
          width: '500px',
          height: '70px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/firefly/adobe_firefly.black.500x70.png'
        },
        alt: {
          width: '392px',
          height: '60px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/firefly/adobe_firefly.black.392x60.png',
        }
      },
    },
    lightroom: {
      name: 'Adobe Lightroom',
      images: {
        regular: {
          width: '500px',
          height: '70px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/lightroom/adobe_lightroom.black.500x70.png'
        },
        alt: {
          width: '392px',
          height: '60px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/lightroom/adobe_lightroom.black.392x60.png',
        }
      }
    },
    photoshop: {
      name: 'Adobe Photoshop',
      images: {
        regular: {
          width: '500px',
          height: '70px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/photoshop/adobe_photoshop.black.500x70.png'
        },
        alt: {
          width: '392px',
          height: '60px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/photoshop/adobe_photoshop.black.392x60.png',
        }
      }
    },
    premiere_pro: {
      name: 'Adobe Premiere Pro',
      images: {
        regular: {
          width: '500px',
          height: '70px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/premiere_pro/adobe_premiere_pro.black.500x70.png'
        },
        alt: {
          width: '392px',
          height: '60px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/premiere_pro/adobe_premiere_pro.black.392x60.png',
        }
      }
    },
    stock: {
      name: 'Adobe Stock',
      images: {
        regular: {
          width: '500px',
          height: '70px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/adobe_stock.black.500x70.png'
        },
        alt: {
          width: '392px',
          height: '60px',
          location: 'https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/logos/adobe_stock.black.392x60.png',
        }
      }
    },
  }
}
