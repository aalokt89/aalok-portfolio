import React from 'react';
import AnchorLInk from 'react-anchor-link-smooth-scroll';
import myPic from '../images/aalok-trivedi-pic@2x.png';
import arrowDownBounded from '../images//icons/arrow-down-bounded.svg';
import styled from 'styled-components';
import { H1 } from './Typography';

const HomeHero = () => (
  <SectionWrapper>
    <Container>
      <HeroCallout>
        <Avatar className="avatar">
          <img src={myPic} alt="Aalok Trivedi - UI/UX Designer" />
        </Avatar>

        <HeroHeadline>
          <H1 hero>Hello! My name is Aalok Trivedi.</H1>
          <H1 hero>
            I’m a UI/UX designer, and I love solving people-problems with
            simple, elegant, and beautiful solutions.
          </H1>
        </HeroHeadline>
      </HeroCallout>
    </Container>

    <AnchorLInk className="arrow-down" href="#work-showcase">
      <img src={arrowDownBounded} width="40" alt="arrow-down-bounded" />
    </AnchorLInk>
  </SectionWrapper>
);

//Styles
const SectionWrapper = styled.section`
  background: $cream;
  padding: ${props => props.theme.spacing.lg};
  height: calc(100vh - 12.8rem);
  align-items: center;
  justify-items: start;
`;

const Container = styled.div`
  max-width: 110rem;
  margin: auto;
}
`;

const HeroCallout = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 8.8rem 5fr;
  grid-gap: ${props => props.theme.spacing.reg};
`;

const Avatar = styled.div`
  grid-column: span 1;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: start;

  img {
    max-width: 8.8rem;
    height: 0 auto;
  }
`;

const HeroHeadline = styled.div`
  grid-column: span 1;
`;

export default HomeHero;
