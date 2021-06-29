import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-body': ['labor-gwa-footer'],
  'labor-gwa-footer': [],
})

export default class LaborGwaFooter extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'facebook-url': 'string',
    'twitter-url': 'string',
    'instagram-url': 'string',
    'youtube-url': 'string',
    'footer-bg-class': 'string',
  }

  static defaultAttributes = {
    'facebook-url': 'https://www.facebook.com/GWA.Gesamtverband.Kommunikationsagenturen',
    'twitter-url': 'https://twitter.com/gwanews',
    'instagram-url': 'https://www.instagram.com/gwa_agenturen/',
    'youtube-url': 'https://www.youtube.com/channel/UCUk_Z0hd_n0JADYBUXD-7Yg',
    'linkedin-url': 'https://www.linkedin.com/company/10825953',
    'footer-bg-class': 'footer-bg',
  }

  headStyle = (breakpoint) => `
    .labor-gwa-footer-link {
        text-decoration: underline;
        color: #959595;
    }
    .labor-gwa-footer-link:hover {
        text-decoration: none !important;
        cursor: pointer;
    }
  `

  render() {
    let socialElements = ``
    if (this.getAttribute('linkedin-url'))
      socialElements += `
        <mj-social-element
          name="facebook-noshare"
          href="${this.getAttribute('linkedin-url')}"
          background-color="none"
          border-radius="0px"
          padding="10px"
          src="https://www.gwa.de:443/content/uploads/2021/01/socialIconLinkedIn.png"
          alt="LinkedIn"
        ></mj-social-element>
      `
    if (this.getAttribute('youtube-url'))
      socialElements += `
        <mj-social-element
          name="instagram"
          href="${this.getAttribute('youtube-url')}"
          background-color="none"
          border-radius="0px"
          padding="10px"
          src="https://www.gwa.de:443/content/uploads/2021/01/socialIconYouTube.png"
          alt="Youtube"
        ></mj-social-element>
      `
    if (this.getAttribute('twitter-url'))
      socialElements += `
        <mj-social-element
          name="twitter-noshare"
          href="${this.getAttribute('twitter-url')}"
          background-color="none"
          border-radius="0px"
          padding="10px"
          src="https://www.gwa.de:443/content/uploads/2021/01/socialIconTwitter.png"
          alt="Twitter"
        ></mj-social-element>
      `
    if (this.getAttribute('facebook-url'))
      socialElements += `
        <mj-social-element
          name="facebook-noshare"
          href="${this.getAttribute('facebook-url')}"
          background-color="none"
          border-radius="0px"
          padding="10px"
          src="https://www.gwa.de:443/content/uploads/2021/01/socialIconFacebook.png"
          alt="Facebook"
        ></mj-social-element>
      `
    if (this.getAttribute('instagram-url'))
      socialElements += `
        <mj-social-element
          name="instagram"
          href="${this.getAttribute('instagram-url')}"
          background-color="none"
          padding="10px"
          border-radius="0px"
          src="https://www.gwa.de:443/content/uploads/2021/01/socialIconInstagram.png"
          alt="Instagram"
        ></mj-social-element>
      `

    return (
      this.renderMJML(`
      <labor-gwa-section
        section-bg-class="${this.getAttribute('footer-bg-class')}"
        padding-top="40px"
        padding-bottom="20px"
      >
        <mj-group>
          <mj-column width="100%">
            <mj-social align="center" icon-size="40px" icon-height="40px" mode="horizontal">
              ${socialElements}
            </mj-social>
          </mj-column>
        </mj-group>
      </labor-gwa-section>
    `) +
      this.renderMJML(`
      <labor-gwa-section
        section-bg-class="${this.getAttribute('footer-bg-class')}"
        padding-bottom="50px"
      >
        <mj-column>
          ${this.getContent()}
        </mj-column>
      </labor-gwa-section>
    `)
    )
  }
}
