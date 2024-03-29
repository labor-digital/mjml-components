import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-body': ['labor-adobe-footer'],
  'labor-adobe-footer': [],
})

export default class LaborAdobeFooter extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'facebook-url': 'string',
    'twitter-url': 'string',
    'instagram-url': 'string',
    'youtube-url': 'string',
    'footer-bg-class': 'string',
  }

  static defaultAttributes = {
    'facebook-url': '',
    'twitter-url': '',
    'instagram-url': '',
    'youtube-url': '',
    'footer-bg-class': 'footer-bg',
  }

  headStyle = (breakpoint) => `
    .labor-adobe-footer-link {
        text-decoration: underline;
        color: #959595;
    }
    .labor-adobe-footer-link:hover {
        text-decoration: none !important;
        cursor: pointer;
    }
  `

  render() {
    let socialElements = ``
    if (this.getAttribute('facebook-url'))
      socialElements += `
        <mj-social-element
          name="facebook-noshare"
          href="${this.getAttribute('facebook-url')}"
          background-color="none"
          border-radius="0px"
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/footer/facebook.959595.100x64.png"
          alt="Facebook"
        ></mj-social-element>
      `
    if (this.getAttribute('instagram-url'))
      socialElements += `
        <mj-social-element
          name="instagram"
          href="${this.getAttribute('instagram-url')}"
          background-color="none"
          border-radius="0px"
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/footer/instagram.959595.100x64.png"
          alt="Instagram"
        ></mj-social-element>
      `
    if (this.getAttribute('rss-url'))
      socialElements += `
        <mj-social-element
          name="rss"
          href="${this.getAttribute('rss-url')}"
          background-color="none"
          border-radius="0px"
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/footer/rss.959595.100x64.png"
          alt="RSS"
        ></mj-social-element>
      `
    if (this.getAttribute('twitter-url'))
      socialElements += `
        <mj-social-element
          name="twitter-noshare"
          href="${this.getAttribute('twitter-url')}"
          background-color="none"
          border-radius="0px"
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/footer/x.959595.100x64.png"
          alt="Twitter"
        ></mj-social-element>
      `
    if (this.getAttribute('youtube-url'))
      socialElements += `
        <mj-social-element
          name="youtube"
          href="${this.getAttribute('youtube-url')}"
          background-color="none"
          border-radius="0px"
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/footer/youtube.959595.120x64.png"
          alt="YouTube"
        ></mj-social-element>
      `
    if (this.getAttribute('linkedin-url'))
      socialElements += `
        <mj-social-element
          name="linkedin-noshare"
          href="${this.getAttribute('linkedin-url')}"
          background-color="none"
          border-radius="0px"
          src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/footer/linkedin.959595.100x64.png"
          alt="LinkedIn"
        ></mj-social-element>
      `
    return (
      this.renderMJML(`
      <labor-adobe-section
        section-bg-class="${this.getAttribute('footer-bg-class')}"
        padding-top="40px"
        padding-bottom="40px"
      >
        <mj-group>
          <mj-column width="30%">
            <mj-image
              src="https://landing.adobe.com/dam/uploads/2024/na/labor-email-assets/footer/adobe-logo.fa0f00.60x80.png"
              width="30px"
              height="40px"
              align="left"
              alt="Adobe logo"
            />
          </mj-column>
          <mj-column width="70%">
            <mj-social align="right" icon-size="50px" icon-height="32px" mode="horizontal">
              ${socialElements}
            </mj-social>
          </mj-column>
        </mj-group>
      </labor-adobe-section>
    `) +
      this.renderMJML(`
      <labor-adobe-section
        section-bg-class="${this.getAttribute('footer-bg-class')}"
        padding-bottom="100px"
      >
        <mj-column>
          ${this.getContent()}
        </mj-column>
      </labor-adobe-section>
    `)
    )
  }
}
