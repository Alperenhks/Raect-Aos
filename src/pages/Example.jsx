// src/sections/About.js
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Example = () => {
  useScrollAnimation({ duration: 1500, easing: 'ease-out', once: false });

  return (
    <section className="examp">
      <div className="examp__content" data-aos="flip-right">
        <h1>React animsyon</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium enim ipsam quae beatae nihil temporibus iusto earum ut repellat eum at voluptatem labore tempore, quaerat impedit magnam, repellendus exercitationem.</p>
      </div>
    </section>
  );
};

export default Example;
