import React from 'react';
import PropType from 'prop-types';
import workIcon from '../../images//icons/work-icon.svg';
import Button from '../buttons';
import ShowcaseProject2 from './showcaseProject2';
import styled from 'styled-components';
import { H1 } from '../typography';

const WorkShowcase = props => (
  <ShowcaseWrapper id="work-showcase">
    <ShowcaseIntro>
      <img src={workIcon} alt="work-icon" />
      <H1>{props.sectionTitle}</H1>
      <div className="work-illustration" />
      <Button type="secondary" to="/work" label="See More" />
    </ShowcaseIntro>

    <RecentProjectsWrapper>
      {props.data.allPrismicPortfolioProjects.edges.map(project => (
        <ShowcaseProject2
          key={project.node.id}
          projectTitle={project.node.data.project_title.text}
          services={project.node.data.services.text}
          path={`/work/${project.node.uid}/`}
          featuredImage={project.node.data.featured_image.url}
          primaryColor={project.node.data.brand_primary_color}
          secondaryColor={project.node.data.brand_secondary_color}
        />
      ))}
    </RecentProjectsWrapper>
  </ShowcaseWrapper>
);

//styles

const ShowcaseWrapper = styled.section`
  display: grid;
  height: 100vh;
  padding: 0;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'intro work';
  grid-gap: 0;
`;

const ShowcaseIntro = styled.div`
  grid-area: intro;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .work-illustration {
    width: 23.2rem;
    height: 23.2rem;
    background: #eee;
    border-radius: 50%;
    margin-bottom: ${props => props.theme.spacing.med};
  }
`;

const RecentProjectsWrapper = styled.div`
  grid-area: work;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 0;
  color: white;
`;
WorkShowcase.propTypes = {
  sectionTitle: PropType.string.isRequired,
  data: PropType.object.isRequired
};
export default WorkShowcase;
