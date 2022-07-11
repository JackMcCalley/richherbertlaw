import React from "react";

function Testimonials() {
  const Testimonial = ({ text, name }) => {
    return (
      <div>
        <p>"{text}"</p>
        <div> ~ {name}</div>
      </div>
    );
  };

  return (
    <div>
      <h1>Testimonials</h1>
      <Testimonial
        name="Skiye via Avvo.com"
        text="He was personable, professional and extremely knowledgeable. Organized, direct and honest. Aggressive and dedicated individual - what other lawyer would reach out to you at all hours of the night to discuss case details? None other...only this gentleman. Highly recommended. Very."
      />
    </div>
  );
}

export default Testimonials;
