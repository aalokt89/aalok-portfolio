import React from 'react';
import Layout from '../components/layout';
import HomeHero from '../components/HomeHero';
import WorkShowcase from '../components/WorkShowcase';

const IndexPage = () => (
  <Layout>
    <HomeHero />
    <WorkShowcase sectionTitle="My Work" />
  </Layout>
);

export default IndexPage;
