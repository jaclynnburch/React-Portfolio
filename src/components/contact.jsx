import React from "react";
import "../../styles/index.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact</h1>
            <form>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label for="email">Email address:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
    
      </form>
    </div>
  );
};

export default Contact;