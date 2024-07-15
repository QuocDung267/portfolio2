const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="title-box">
          <h1>Get in touch</h1>
          <img src="./images/theme_pattern.svg" alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src="./images/mail_icon.svg" alt="" />{" "}
                <p>greatstackdev@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src="./images/call_icon.svg" alt="" /> <p>+772-825-524</p>
              </div>
              <div className="contact-detail">
                <img src="./images/location_icon.svg" alt="" />{" "}
                <p>CA, United States</p>
              </div>
            </div>
          </div>
          <form className="contact-right">
            <input
              type="hidden"
              name="subject"
              defaultValue="New Submission from Portfolio"
            />
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows={8}
              placeholder="Enter your message"
              defaultValue={""}
            />
            <div
              className="h-captcha"
              data-captcha="true"
              data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            >
              <iframe
                src="https://newassets.hcaptcha.com/captcha/v1/9e8eaa2/static/hcaptcha.html#frame=checkbox&id=0ibgngzb5cmr&host=greatstack.in&sentry=true&reportapi=https%3A%2F%2Faccounts.hcaptcha.com&recaptchacompat=off&custom=false&hl=en&tplinks=on&pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&sitekey=50b2fe65-b00b-4b9e-ad62-3ba471098be2&theme=light&origin=https%3A%2F%2Fgreatstack.in"
                tabIndex={0}
                frameBorder={0}
                scrolling="no"
                allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'"
                title="Widget containing checkbox for hCaptcha security challenge"
                data-hcaptcha-widget-id="0ibgngzb5cmr"
                data-hcaptcha-response=""
                style={{
                  pointerEvents: "auto",
                  width: 303,
                  height: 78,
                  overflow: "hidden",
                }}
              />
              <textarea
                id="h-captcha-response-0ibgngzb5cmr"
                name="h-captcha-response"
                style={{ display: "none" }}
                defaultValue={""}
              />
            </div>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
            <p />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
