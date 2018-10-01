import React from 'react';
import PropType from 'prop-types';
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
      {props.data.allPrismicPortfolioProjects.edges.map(project => (
        <ShowcaseProject
          key={project.node.id}
          projectTitle={project.node.data.project_title.text}
          services={project.node.data.services.text}
        />
      ))}
    </div>
  </section>
);

WorkShowcase.propTypes = {
  sectionTitle: PropType.string.isRequired,
  data: PropType.object.isRequired
};
export default WorkShowcase;
