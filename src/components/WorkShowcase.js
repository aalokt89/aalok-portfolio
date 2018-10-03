import React from 'react';
import PropType from 'prop-types';
import workIcon from '../images//icons/work-icon.svg';
import Button from './Buttons';
import ShowcaseProject from './ShowcaseProject';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../components/theme';
import { H1 } from './Typography';
// import { lighten } from 'polished';

const WorkShowcase = props => {
  return (
    <ThemeProvider theme={theme}>
      <WorkShowcaseContainer>
        <WorkIntro>
          <img src={workIcon} alt="work-icon" />
          <H1>{props.sectionTitle}</H1>
          <WorkIllustration />

          <Button secondary label="See More" />
        </WorkIntro>

        <RecentProjects>
          {props.data.allPrismicPortfolioProjects.edges.map(project => (
            <ShowcaseProject
              key={project.node.id}
              projectTitle={project.node.data.project_title.text}
              services={project.node.data.services.text}
            />
          ))}
        </RecentProjects>
      </WorkShowcaseContainer>
    </ThemeProvider>
  );
};

//Styles
const WorkShowcaseContainer = styled.section`
  display: grid;
  height: 100vh;
  padding: 0;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'intro work';
  grid-gap: 0;
  text-align: center;
`;

const WorkIntro = styled.div`
  grid-area: intro;
  padding: ${props => props.theme.spacing.med};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RecentProjects = styled.div`
  grid-area: work;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 0;
  color: white;
`;

const WorkIllustration = styled.div`
  width: 23.2rem;
  height: 23.2rem;
  background: #eee;
  border-radius: 50%;
  margin-bottom: ${props => props.theme.spacing.med};
`;

WorkShowcase.propTypes = {
  theme: PropType.string,
  sectionTitle: PropType.string.isRequired,
  data: PropType.object.isRequired
};

export default WorkShowcase;
