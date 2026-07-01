import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ImageSlider from "./ImageSlider";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import './styles.css';

const Contact = () => {
  const form = useRef();

  // No need for secrets here, left intentionally, Just don't use my EmailJS keys 😂
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zck1xkp",
        "template_w40hp2o",
        form.current,
        "dlBp6sQi_QMyXsOWn"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>
        <span style={{ color: "#fff" }}>Lets</span>{" "}
        <span style={{ color: "#fd4312" }}>Connect</span>
      </h2>

      <div className="contact-row">
        <div className="contact-box1">
          <ImageSlider />
          <div className="social">
            <p>Or directly on: </p>
            <a
              href="https://www.linkedin.com/in/leonard-ogendo-58ab01225"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/leonardogendo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="c-box2">
          <h4>Networks</h4>

          <div className="network-card">
            <a
              href="https://www.linkedin.com/in/leonard-ogendo-58ab01225"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="network-icon" />
              <span className="network-label">LinkedIn</span>
            </a>
            <p className="network-stats">500+ Connections</p>
          </div>

          <div className="network-card">
            <a
              href="https://github.com/leonardogendo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="network-icon" />
              <span className="network-label">GitHub</span>
            </a>
            <p className="network-stats">8 + Projects</p>
          </div>

          <div className="network-card">
            <a
              href="https://x.com/dev1_leon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="network-icon" />
              <span className="network-label">X</span>
            </a>
            <p className="network-stats">Follow @dev1_leon</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h4>Send Email</h4>

          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="Your Email (For Reply)"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
