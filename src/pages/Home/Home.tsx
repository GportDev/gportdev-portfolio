import React from 'react';
import { PageContainer } from '../../styles/Containers';
import Hero from '../../templates/Hero/Hero';
import Repos from '../../templates/Repos/Repos';

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <Repos />
    </PageContainer>
  );
};

export default Home;
