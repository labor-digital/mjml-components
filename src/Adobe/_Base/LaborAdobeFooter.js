import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'
import AdobeRedStyleMapping from '../_Styles/RED/AdobeRedStyleMapping'

const styleMapping = AdobeRedStyleMapping;

registerDependencies({
  'mj-body': ['labor-adobe-footer'],
  'labor-adobe-footer': ['labor-adobe-typo-legal'],
});

export default class LaborAdobeFooter extends BodyComponent {

  static endingTag = true;
  static allowedAttributes =  {
    'facebook-url': 'string',
    'x-url': 'string',
    'instagram-url': 'string',
    'youtube-url': 'string',
    'tiktok-url': 'string',
    'discord-url': 'string',
    'footer-bg-class': 'string',
  };
  static defaultAttributes = {
    'facebook-url': '',
    'x-url': '',
    'instagram-url': '',
    'youtube-url': '',
    'tiktok-url': '',
    'discord-url': '',
    'footer-bg-class': 'footer-bg',
  };

  static additionalAttributes = {
    desktopLeftRightPadding: styleMapping.grids.desktop.contentSpacing,
    mobileLeftRightPadding: styleMapping.grids.mobile.contentSpacing,
    linkColor: styleMapping.labor.colors.footerLink.hex,
    align: 'left',
    socialIconBackgroundColor: styleMapping.labor.colors.socialIconBackgroundColor.hex,
    socialIconBorderRadius: styleMapping.spacings.vertical.px0,

    socialSectionPaddingTop: styleMapping.spacings.vertical.px34,
    socialSectionLogoPaddingTop: styleMapping.spacings.vertical.px6,
    socialSectionPaddingTopResponsive: styleMapping.spacings.vertical.px60,

    socialSectionPaddingBottom: styleMapping.spacings.vertical.px40,
    contentSectionPaddingBottom: styleMapping.spacings.vertical.px100
  }
holy
  headStyle = (breakpoint) => `
    .labor-adobe-footer-link {
        text-decoration: underline;
        color: ${LaborAdobeFooter.additionalAttributes.linkColor};
    }
    .labor-adobe-footer-link:hover {
        text-decoration: none !important;
        cursor: pointer;
    }
    
    

    @media only screen and (max-width:${breakpoint}) {
      .labor-adobe-footer-section-social-column-responsive {
        padding-top: ${LaborAdobeFooter.additionalAttributes.socialSectionPaddingTopResponsive}
      }
      
      .labor-adobe-footer-section-social-responsive {
        text-align: -webkit-center;
      }
    }
  `

  render() {
    let socialElements = ``
    if (this.getAttribute('facebook-url'))
      socialElements += `
        <mj-social-element
          name="facebook-noshare"
          href="${this.getAttribute('facebook-url')}"
          background-color="${LaborAdobeFooter.additionalAttributes.socialIconBackgroundColor}"
          border-radius="0px"
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/red/footer/facebook-logo.50x32.png"
          alt="Facebook"
        ></mj-social-element>
      `
    if (this.getAttribute('instagram-url'))
      socialElements += `
        <mj-social-element
          name="instagram"
          href="${this.getAttribute('instagram-url')}"
          background-color="${LaborAdobeFooter.additionalAttributes.socialIconBackgroundColor}"
          border-radius="${LaborAdobeFooter.additionalAttributes.socialIconBorderRadius}"
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/red/footer/instagram-logo.50x32.png"
          alt="Instagram"
        ></mj-social-element>
      `
    if (this.getAttribute('youtube-url'))
      socialElements += `
        <mj-social-element
          name="youtube"
          href="${this.getAttribute('youtube-url')}"
          background-color="${LaborAdobeFooter.additionalAttributes.socialIconBackgroundColor}"
          border-radius="${LaborAdobeFooter.additionalAttributes.socialIconBorderRadius}"
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/red/footer/youtube-logo.50x32.png"
          alt="YouTube"
        ></mj-social-element>
      `
    if (this.getAttribute('x-url'))
      socialElements += `
        <mj-social-element
          name="x-noshare"
          href="${this.getAttribute('x-url')}"
          background-color="${LaborAdobeFooter.additionalAttributes.socialIconBackgroundColor}"
          border-radius="${LaborAdobeFooter.additionalAttributes.socialIconBorderRadius}"
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/red/footer/x-logo.50x32.png"
          alt="X"
        ></mj-social-element>
      `

    if (this.getAttribute('tiktok-url'))
      socialElements += `
        <mj-social-element
          name="tiktok"
          href="${this.getAttribute('tiktok-url')}"
          background-color="${LaborAdobeFooter.additionalAttributes.socialIconBackgroundColor}"
          border-radius="${LaborAdobeFooter.additionalAttributes.socialIconBorderRadius}"
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/red/footer/tiktok-logo.50x32.png"
          alt="TikTok"
        ></mj-social-element>
      `
    if (this.getAttribute('discord-url'))
      socialElements += `
        <mj-social-element
          name="tiktok"
          href="${this.getAttribute('tiktok-url')}"
          background-color="${LaborAdobeFooter.additionalAttributes.socialIconBackgroundColor}" 
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/red/footer/discord-logo.50x32.png"
          alt="Discord"
        ></mj-social-element>
      `
    return (
      this.renderMJML(`
      <labor-adobe-section
        section-bg-class="${this.getAttribute('footer-bg-class')}"     
        padding-bottom=${LaborAdobeFooter.additionalAttributes.socialSectionPaddingBottom}
        padding-top=${LaborAdobeFooter.additionalAttributes.socialSectionPaddingTop}
      >
     
        <mj-column vertical-align="top" width="30%" padding-top=${LaborAdobeFooter.additionalAttributes.socialSectionLogoPaddingTop}>
          <mj-image
            src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/red/footer/adobe-logo.red.320x76.png"
            width="80px"
            height="19px"
            align="left"
            alt="Adobe logo"
          />
        </mj-column>
        <mj-column vertical-align="top" width="70%" css-class="labor-adobe-footer-section-social-column-responsive">
          <mj-social align="right" icon-size="50px" icon-height="32px" mode="horizontal" css-class="labor-adobe-footer-section-social-responsive">
            ${socialElements}
          </mj-social>
        </mj-column>
      </labor-adobe-section>
    `) +
      this.renderMJML(`
      <labor-adobe-section
        section-bg-class="${this.getAttribute('footer-bg-class')}"
        padding-bottom=${LaborAdobeFooter.additionalAttributes.contentSectionPaddingBottom}
      >
        <mj-column>
          ${this.getContent()}
        </mj-column>
      </labor-adobe-section>
    `)
    )
  }
}
