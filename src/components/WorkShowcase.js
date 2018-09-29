import React from 'react';
import workIcon from '../images//icons/work-icon.svg';
import Button from './Buttons';
import ShowcaseProject from './ShowcaseProject';

const WorkShowcase = props => (
  <section id="work-showcase">
    <div className="work-intro">
      <img src={workIcon} alt="work-icon" />
      <h1>{props.sectionTitle}</h1>
      <div className="work-illustration" />
      <Button type="secondary" label="See More" />
    </div>
    <div className="recent-projects">
      <ShowcaseProject projectTitle="Hinge" />
      <ShowcaseProject projectTitle="Strypes" />
      <ShowcaseProject projectTitle="Market Aces" />
    </div>
  </section>
);

export default WorkShowcase;
