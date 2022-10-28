import React from 'react';
import { useGet } from '../../hooks/useGet';
import { ColumnBaseSection } from '../../styles/Containers';
import { SectionTitle } from '../../styles/Typography';
import RepoCard from './RepoCard/ReposCard';
import { ReposContainer } from './styles';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

const Repos = () => {
  const { data: repositories } = useGet<Repository[]>(
    'https://api.github.com/users/GportDev/repos',
  );
  console.log(repositories);

  return (
    <ColumnBaseSection>
      <SectionTitle>MY REPOSITORIES</SectionTitle>
      <ReposContainer>
        {repositories?.map((repository) => {
          return (
            <RepoCard
              key={repository.id}
              name={repository.name}
              description={repository.description}
              url={repository.html_url}
              language={repository.language}
            />
          );
        })}
      </ReposContainer>
    </ColumnBaseSection>
  );
};

export default Repos;
