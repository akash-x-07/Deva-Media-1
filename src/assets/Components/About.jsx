import React from "react";
import "./About.css";
import ak1 from "../ak1.jpg"; 

function About() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>Why This eBook?</h2>
        <p>
          Tired of traditional advice that doesn't work for Gen Z? This eBook brings real-life strategies, tested habits, and digital money-making hacks tailored for today's teens.
        </p>
        <p>
          From side hustles to self-discipline — learn how to shift your mindset and bank account at the same time.
        </p>
      </div>

      <div className="about-img">
        <img src={ak1} alt="About eBook" />
      </div>
    </section>
  );
}

export default About;  