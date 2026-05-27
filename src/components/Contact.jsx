import { useState } from "react";
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setLoading(true);
    const formPayload = new FormData();
    formPayload.append("access_key", "3c71ce0d-fa1f-49b0-b2f9-303fc1f7f37a");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);
    formPayload.append("subject", "New Portfolio Contact Message");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      alert("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <section id="Contact">
      <div className="section-wrap">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-heading">Contact <span>Me</span></h2>

        <div className="contact-grid fade-up">
          <div>
            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <div><h4>Address</h4><p>Faridabad, Dabua Colony, Haryana</p></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">✉️</div>
              <div><h4>Email</h4><a href="mailto:itsmandeep970@gmail.com">itsmandeep970@gmail.com</a></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">📞</div>
              <div><h4>Phone</h4><a href="tel:9355263697">(+91) 9355263697</a></div>
            </div>
          </div>

          <form className="contact-form-inner" onSubmit={handleSubmit}>
            {submitted ? (
              <div style={{ color: "#0be6ea", fontSize: "1.1rem", padding: "2rem 0" }}>
                ✅ Message sent! I'll get back to you soon.
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }} disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
