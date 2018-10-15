import React from 'react';
import PropType from 'prop-types';
import Button from '../buttons';
import ShowcaseProject3 from './showcaseProject3';
import styled from 'styled-components';
import { H1 } from '../typography';
import Icon from '../icons';

class WorkShowcase extends React.Component {
  render() {
    return (
      <ShowcaseWrapper id="work-showcase">
        <ShowcaseIntro>
          <Icon name="work" width={64} />
          <H1>{this.props.sectionTitle}</H1>
          <div className="work-illustration" />
          <Button type="secondary" to="/work" label="See More" />
        </ShowcaseIntro>

        <RecentProjectsWrapper>
          {this.props.data.allPrismicPortfolioProjects.edges.map(project => (
            <ShowcaseProject3
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
  }
}

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
