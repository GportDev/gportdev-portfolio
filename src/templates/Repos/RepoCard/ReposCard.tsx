import React from 'react';
import { icons } from '../../../utils/icons';

import {
  ArrowIcon,
  CardContainer,
  CardFooter,
  CardHeader,
  CardLink,
  DevIcon,
  DevIconsContainer,
  GitImg,
} from './styles';

function handleName(name: string) {
  const convertedName = name
    .toUpperCase()
    .replaceAll('-', ' ')
    .replaceAll('_', ' ');

  return convertedName;
}

interface RepoCardProps {
  name: string; //name
  description: string; //description
  url: string; //html_url
  language: string; //language
}

const RepoCard = ({ name, description, url, language }: RepoCardProps) => {
  return (
    <CardLink href={url} target="blank">
      <CardContainer>
        <CardHeader>
          <h3>{handleName(name)}</h3>
          <GitImg
            src={'https://avatars.githubusercontent.com/u/71458971?v=4'}
          />
        </CardHeader>
        <p>{description}</p>
        <CardFooter>
          <DevIconsContainer>
            <DevIcon src={icons.get(language)} />
          </DevIconsContainer>
          <ArrowIcon size={40} />
        </CardFooter>
      </CardContainer>
    </CardLink>
  );
};

export default RepoCard;
