import React from 'react';
import { BaseSection } from '../../styles/Containers';
import { HeroContent, HeroSocialContent } from './styles';
import { PlainText, Subtitle, Title } from '../../styles/Typography';

import {
  Github,
  Medium,
  LinkedIn,
  LinkIcon,
  Mail,
  DownChevron,
} from '../../styles/Icons';
import { IconContext } from 'phosphor-react';

const Hero = () => {
  let iconSize = 0;
  screen.width >= 800 ? (iconSize = 64) : (iconSize = 48);

  return (
    <BaseSection>
      <HeroContent>
        <Title>GABRIEL PORTEIRO</Title>
        <Subtitle>FULL-STACK WEB DEVELOPER</Subtitle>
        <PlainText>
          Hello, I’m a Brazilian guy that loves technology and dream of
          developing applications that will change realities.
        </PlainText>

        <HeroSocialContent>
          <IconContext.Provider value={{ size: iconSize, weight: 'regular' }}>
            <LinkIcon href="https://github.com/GportDev" target="blank">
              <Github />
            </LinkIcon>

            <LinkIcon href="mailto:gportdev@gmail.com" target="blank">
              <Mail />
            </LinkIcon>

            <LinkIcon
              href="https://www.linkedin.com/in/gabriel-porteiro/"
              target="blank"
            >
              <LinkedIn />
            </LinkIcon>

            <LinkIcon href="https://medium.com/@gportdev" target="blank">
              <Medium />
            </LinkIcon>
          </IconContext.Provider>
        </HeroSocialContent>
        <DownChevron size={124} />
      </HeroContent>
    </BaseSection>
  );
};

export default Hero;
