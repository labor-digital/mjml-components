import { BodyComponent } from 'mjml-core'
import { MJMLCustomComponent } from 'mjml-custom-component-decorator'
import AdobeRedStyleMapping from '../../Styles/AdobeRedStyleMapping'

export default @MJMLCustomComponent({
  tag: 'labor-adobe-footer',
  attributes: {
    'facebook-url': { type: 'string', default: '' },
    'x-url': { type: 'string', default: '' },
    'instagram-url': { type: 'string', default: '' },
    'youtube-url': { type: 'string', default: '' },
    'tiktok-url': { type: 'string', default: '' },
    'discord-url': { type: 'string', default: '' },
    'linkedin-url': { type: 'string', default: '' },
    'footer-bg-class': { type: 'string', default: 'footer-bg' },
    'overwrite-padding-bottom': { type: 'unit(px,%)' },
  },
  allowedParentTags: ['mj-body'],
  allowedChildTags: ['labor-adobe-typo-legal'],
})

class LaborAdobeFooter extends BodyComponent {
  static endingTag = false

  static additionalAttributes = {
    desktopLeftRightPadding: AdobeRedStyleMapping.grids.desktop.contentSpacing,
    mobileLeftRightPadding: AdobeRedStyleMapping.grids.mobile.contentSpacing,
    linkColor: AdobeRedStyleMapping.labor.colors.footerLink.hex,
    align: 'left',
    socialIconBackgroundColor: AdobeRedStyleMapping.labor.colors.socialIconBackgroundColor.hex,
    socialIconBorderRadius: AdobeRedStyleMapping.spacings.custom.px0,

    socialSectionPaddingTop: AdobeRedStyleMapping.spacings.custom.px34,
    socialSectionLogoPaddingTop: AdobeRedStyleMapping.spacings.custom.px6,
    socialSectionPaddingTopResponsive: AdobeRedStyleMapping.spacings.vertical.px60,

    socialSectionPaddingBottom: AdobeRedStyleMapping.spacings.vertical.px40,
    // 80px to consider the default 18px padding bottom for legal text
    contentSectionPaddingBottom: AdobeRedStyleMapping.spacings.custom.px82,
  }

  headStyle = (breakpoint) => `
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
    const basepath = "https://landing.adobe.com/dam/uploads/2025/na/labor-email-assets/red/footer_icons/"
    const footerBgClass = this.getAttribute('footer-bg-class') || 'footer-bg'
    const overwritePaddingBottom = this.getAttribute('overwrite-padding-bottom')

    const facebookUrl = this.getAttribute('facebook-url')
    const instagramUrl = this.getAttribute('instagram-url')
    const youtubeUrl = this.getAttribute('youtube-url')
    const xUrl = this.getAttribute('x-url')
    const tiktokUrl = this.getAttribute('tiktok-url')
    const discordUrl = this.getAttribute('discord-url')
    const linkedinUrl = this.getAttribute('linkedin-url')

    const backgroundColor = LaborAdobeFooter.additionalAttributes.socialIconBackgroundColor
    const iconRadius = LaborAdobeFooter.additionalAttributes.socialIconBorderRadius

    let socialElements = ''

    if (facebookUrl)
      socialElements += `
        <mj-social-element
          name="facebook-noshare"
          href="${facebookUrl}"
          src="${basepath}facebook-logo-condensed.100x64.png"
          alt="Facebook"
          background-color="${backgroundColor}"
          border-radius="${iconRadius}"
        ></mj-social-element>
      `
    if (instagramUrl)
      socialElements += `
        <mj-social-element
          name="instagram"
          href="${instagramUrl}"
          src="${basepath}instagram-logo.100x64.png"
          alt="Instagram"
          background-color="${backgroundColor}"
          border-radius="${iconRadius}"
        ></mj-social-element>
      `
    if (youtubeUrl)
      socialElements += `
        <mj-social-element
          name="youtube"
          href="${youtubeUrl}"
          src="${basepath}youtube-logo.100x64.png"
          alt="YouTube"
          background-color="${backgroundColor}"
          border-radius="${iconRadius}"
        ></mj-social-element>
      `
    if (xUrl)
      socialElements += `
        <mj-social-element
          name="x-noshare"
          href="${xUrl}"
          src="${basepath}x-logo.100x64.png"
          alt="X"
          background-color="${backgroundColor}"
          border-radius="${iconRadius}"
        ></mj-social-element>
      `
    if (tiktokUrl)
      socialElements += `
        <mj-social-element
          name="tiktok"
          href="${tiktokUrl}"
          src="${basepath}tiktok-logo.100x64.png"
          alt="TikTok"
          background-color="${backgroundColor}"
          border-radius="${iconRadius}"
        ></mj-social-element>
      `
    if (discordUrl)
      socialElements += `
        <mj-social-element
          name="discord"
          href="${discordUrl}"
          src="${basepath}discord-logo.100x64.png"
          alt="Discord"
          background-color="${backgroundColor}"
          border-radius="${iconRadius}"
        ></mj-social-element>
      `
    if (linkedinUrl)
      socialElements += `
        <mj-social-element
          name="linkedin-noshare"
          href="${linkedinUrl}"
          src="${basepath}linkedin-logo.100x64.png"
          alt="LinkedIn"
          background-color="${backgroundColor}"
          border-radius="${iconRadius}"
        ></mj-social-element>
      `

    return (
      this.renderMJML(`
        <labor-adobe-section
          section-bg-class="${footerBgClass}"
          padding-bottom="${LaborAdobeFooter.additionalAttributes.socialSectionPaddingBottom}"
          padding-top="${LaborAdobeFooter.additionalAttributes.socialSectionPaddingTop}"
        >
          <mj-column vertical-align="top" width="30%" padding-top="${LaborAdobeFooter.additionalAttributes.socialSectionLogoPaddingTop}">
            <mj-image
              src="${basepath}adobe-logo.red.320x76.png"
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
          section-bg-class="${footerBgClass}"
          padding-bottom="${overwritePaddingBottom || LaborAdobeFooter.additionalAttributes.contentSectionPaddingBottom}"
        >
          <mj-column>
            ${this.props.content}
          </mj-column>
        </labor-adobe-section>
      `)
    )
  }
}
