import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ShowcaseProject = props => {
  return (
    <div className="showcase-project">
      <Link to="/" className="project-label">
        <h2>{props.projectTitle}</h2>
        <p>{props.services}</p>
      </Link>
    </div>
  );
};

ShowcaseProject.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired
};
export default ShowcaseProject;
