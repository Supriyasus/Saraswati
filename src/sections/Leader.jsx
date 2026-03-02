import React from "react";

export default function Leader() {
  return (
    <section className="leader">
      
      {/* IMAGE */}
      <div className="leader__imageWrapper">
        <img
          src="/nana.png"
          alt="Leader"
          className="leader__image"
        />
      </div>

      {/* CONTENT */}
      <div className="leader__content">

        {/* opening quote */}
        <span className="leader__quote leader__quote--start">“</span>

        <h1 className="leader__heading">
          We must give back to the society from whose resources we generate wealth.
        </h1>

        {/* closing quote */}
        <span className="leader__quote leader__quote--end">”</span>

        <p className="leader__sub">
          Mr. Ganesh Prasad Srivastava | 1st September 1954 – Forever | Chairman Emeritus
        </p>
      </div>

    </section>
  );
}