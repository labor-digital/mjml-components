import { registerDependencies } from 'mjml-validator'
import { BodyComponent } from 'mjml-core'

registerDependencies({
  'mj-body': ['labor-hur-footer'],
  'labor-hur-footer': [],
})

export default class LaborHurFooter extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'facebook-url': 'string',
    'twitter-url': 'string',
    'instagram-url': 'string',
    'youtube-url': 'string',
    'footer-bg-class': 'string',
  }

  static defaultAttributes = {
    'facebook-url': "https://www.facebook.com/huettig.rompf/",
    'twitter-url': "https://twitter.com/huettig_rompf",
    'instagram-url': "https://www.instagram.com/baufinanzierung_huettig_rompf/",
    'youtube-url': "https://www.youtube.com/channel/UCFuE75d7iVT95RpWQnjNNYw",
    'linkedin-url': "https://de.linkedin.com/company/h%C3%BCttig-rompf?trk=similar-pages_result-card_full-click",
    'footer-bg-class': 'footer-bg'
  }

  headStyle = (breakpoint) => `
    .labor-hur-footer-link {
        text-decoration: underline;
        color: #959595;
    }
    .labor-hur-footer-link:hover {
        text-decoration: none !important;
        cursor: pointer;
    }
  `;

  render() {
    let socialElements = ``;
    if(this.getAttribute('facebook-url'))
      socialElements += `
        <mj-social-element
          name="facebook-noshare"
          href="${this.getAttribute('facebook-url')}"
          background-color="none"
          border-radius="0px"
          padding="10px"
          src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-facebook-96.png"
          alt="Facebook"
        ></mj-social-element>
      `;
    if(this.getAttribute('twitter-url'))
      socialElements += `
        <mj-social-element
          name="twitter-noshare"
          href="${this.getAttribute('twitter-url')}"
          background-color="none"
          border-radius="0px"
          padding="10px"
          src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-twitter-96.png"
          alt="Twitter"
        ></mj-social-element>
      `;
    if(this.getAttribute('instagram-url'))
      socialElements += `
        <mj-social-element
          name="instagram"
          href="${this.getAttribute('instagram-url')}"
          background-color="none"
          padding="10px"
          border-radius="0px"
          src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-instagram-96.png"
          alt="Instagram"
        ></mj-social-element>
      `;
    if(this.getAttribute('youtube-url'))
      socialElements += `
        <mj-social-element
          name="instagram"
          href="${this.getAttribute('youtube-url')}"
          background-color="none"
          border-radius="0px"
          padding="10px"
          src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-youtube-96.png"
          alt="Youtube"
        ></mj-social-element>
      `;
    if(this.getAttribute('linkedin-url'))
      socialElements += `
        <mj-social-element
          name="facebook-noshare"
          href="${this.getAttribute('linkedin-url')}"
          background-color="none"
          border-radius="0px"
          padding="10px"
          src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-linkedin-96.png"
          alt="LinkedIn"
        ></mj-social-element>
      `;

    return this.renderMJML(`
      <labor-hur-section
        background-color="#f5f5f5"
        section-bg-class="${this.getAttribute('footer-bg-class')}"
        padding-top="40px"
        padding-bottom="20px"
      >
        <mj-group>
          <mj-column width="100%">
            <labor-hur-typo-headingthree align="center" padding-bottom="15px">Folgen Sie uns auf den sozialen Kanälen</labor-hur-typo-headingthree>
            <mj-social align="center" icon-size="40px" icon-height="40px" mode="horizontal">
              ${socialElements}
            </mj-social>
			<mj-divider width="100%" border-width="2px" border-color="#EAEAEA" padding-bottom="15px" padding-top="15px"></mj-divider>
            <labor-hur-typo-headingthree align="center" padding-bottom="15px">Gut bewertet und ausgezeichnet</labor-hur-typo-headingthree>
            <labor-hur-image
                src="https://mcusercontent.com/83722a04ab73d863daa855f26/images/b59afbee-93c5-4684-9128-834c8f12fe7b.png"
                align="center"
                height="auto"
                width="405px"
                border="false"
                padding-bottom-overwrite="0px"
                background-color="#f5f5f5"
                alt="Hüttig &amp; Rompf AG | *|ENAME|*"
            />
          </mj-column>
        </mj-group>
      </labor-hur-section>
    `) + this.renderMJML(`
      <labor-hur-section
        background-color="#f5f5f5"
        section-bg-class="${this.getAttribute('footer-bg-class')}"
        padding-bottom="50px"
      >
        <mj-column>
          ${this.getContent()}
        </mj-column>
      </labor-hur-section>
    `);
  }
}