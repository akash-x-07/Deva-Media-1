import React from "react";
import "./DownloadCTA.css";

function DownloadCTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-heading">Ready to Transform Your Life?</h2>
        <p className="cta-subheading">
          Download your free Gen Z Mindset eBook now and start your journey toward clarity and success!
        </p>
        <div className="cta-buttons">
          <a href="/GenZMindset.pdf" download className="cta-button">📘 Download Now</a>
          <a href="#" className="cta-button buy-button">💻 Buy e-Book ₹599</a>
          <a href="#" className="cta-button hard-button">📚 Buy Hard Copy ₹899</a>
        </div>
      </div>
    </section>
  );
}

export default DownloadCTA;
