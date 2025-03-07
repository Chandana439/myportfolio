import React from "react";
import { Slide, JackInTheBox } from "react-awesome-reveal";
const ContactMe = () => {
  return (
    <section id="ContactMe" className="contact--section">
      <div className="contact--section--title">
        <h3 className="contact--title">
          <Slide direction="up">Get In Touch : )</Slide>
        </h3>
      </div>

      <div className="contact--ways">
        <div className="contact--email">
          <h4>Email Me</h4>
          <p>Send me an email, I'll get back to you asap</p>
          <button
            className="btn btn-primary btn-outline-primary"
            onClick={() =>
              (window.location.href = "mailto:chandana.ganesu@gmail.com")
            }
          >
            chandana.ganesu39@gmail.com
          </button>
        </div>
        <div className="contact--linkedin">
          <h4>Connect on LinkedIn</h4>
          <p>Let's connect & share valuable insights</p>
          <button
            className="btn btn-primary btn-outline-primary"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/chandana-ganesu-b5aa60287",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            linkedin.com/in/chandana-ganesu
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
