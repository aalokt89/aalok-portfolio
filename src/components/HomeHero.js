import React from 'react';
import AnchorLInk from 'react-anchor-link-smooth-scroll';
import myPic from '../images/aalok-trivedi-pic@2x.png';
import arrowDownBounded from '../images//icons/arrow-down-bounded.svg';

const HomeHero = () => (
  <section id="hero">
    <div className="container">
      <div className="hero-callout">
        <div className="avatar">
          <img src={myPic} alt="Aalok Trivedi - UI/UX Designer" />
        </div>

        <div className="hero-headline">
          <h1>Hello! My name is Aalok Trivedi.</h1>
          <h1>
            I’m a UI/UX designer, and I love solving people-problems with
            simple, elegant, and beautiful solutions.
          </h1>
        </div>
      </div>
    </div>

    <AnchorLInk className="arrow-down" href="#work-showcase">
      <img src={arrowDownBounded} width="40" alt="arrow-down-bounded" />
    </AnchorLInk>
  </section>
);

export default HomeHero;
