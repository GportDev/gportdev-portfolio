import React from 'react';
import { Subtitle, CardText } from '../../../Styles/Typography';
import {
  ArrowIcon,
  CardContainer,
  CardFooter,
  CardHeader,
  DevIconsContainer,
  GitImg,
} from './styles';

const RepoCard = () => {
  return (
    <CardContainer>
      <CardHeader>
        <Subtitle>NLW-2022</Subtitle>
        <GitImg />
      </CardHeader>
      <CardText>
        Widget de envio de feedbacks para reutilizar em qualquer site.
      </CardText>
      <CardFooter>
        <DevIconsContainer>
          <p>icon1</p>
          <p>icon2</p>
          <p>icon3</p>
          <p>icon4</p>
        </DevIconsContainer>
        <ArrowIcon size={40} />
      </CardFooter>
    </CardContainer>
  );
};

export default RepoCard;
