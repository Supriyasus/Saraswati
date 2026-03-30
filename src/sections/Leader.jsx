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
          कर्म ही रचता है जीवन की हर दिशा, जो जैसा करता है, वैसा ही फल देखता।
        </h1>

        {/* closing quote */}
        <span className="leader__quote leader__quote--end">”</span>

        <p className="leader__sub">
          Mr. G.P Srivastava | 1st September 1954 – Forever | Founder and Chairman
        </p>
      </div>

    </section>
  );
}