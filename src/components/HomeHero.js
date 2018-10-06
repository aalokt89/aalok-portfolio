import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import myPic from '../images/aalok-trivedi-pic@2x.png';
import arrowDownBounded from '../images//icons/arrow-down-bounded.svg';
import styled from 'styled-components';
import { H1 } from './typography';

const HomeHero = () => (
  <HeroWrapper id="hero">
    <ContentContainer>
      <HeroContentGroup>
        <Avatar>
          <img src={myPic} alt="Aalok Trivedi - UI/UX Designer" />
        </Avatar>

        <HeroHeadline>
          <H1 hero>
            Hello! My name is Aalok Trivedi
            <span className="period">.</span>
          </H1>
          <H1 hero>
            I’m a UI/UX designer, and I love solving people-problems with
            simple, elegant, and beautiful solutions
            <span className="period">.</span>
          </H1>
        </HeroHeadline>
      </HeroContentGroup>
    </ContentContainer>

    <DownArrow href="#work-showcase">
      <img src={arrowDownBounded} width="40" alt="arrow-down-bounded" />
    </DownArrow>
  </HeroWrapper>
);

//styles
const HeroWrapper = styled.section`
  display: grid;
  background: ${props => props.theme.color.cream};
  padding: ${props => props.theme.spacing.lg};
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;
`;
const HeroContentGroup = styled.div`
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
  .period {
    color: ${props => props.theme.color.secondary};
  }
`;

const DownArrow = styled(AnchorLink)`
  opacity: 0.8;
  justify-self: center;
  align-self: end;
`;
export default HomeHero;
