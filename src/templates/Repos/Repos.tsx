import React from 'react';
import { ColumnBaseSection } from '../../Styles/Containers';
import { SectionTitle } from '../../Styles/Typography';
import RepoCard from './RepoCard/ReposCard';
import { ReposContainer } from './styles';

const Repos = () => {
  return (
    <ColumnBaseSection>
      <SectionTitle>MY REPOSITORIES</SectionTitle>
      <ReposContainer>
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </ReposContainer>
    </ColumnBaseSection>
  );
};

export default Repos;
