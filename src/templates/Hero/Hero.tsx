import React from 'react';
import { BaseSection } from '../../Styles/Containers';
import { HeroContent, HeroSocialContent } from './styles';

import { PlainText, Subtitle, Title } from '../../Styles/Typography';

import { Github, Medium, LinkedIn, LinkIcon, Mail } from '../../Styles/Icons';
import { IconContext } from 'phosphor-react';

const Hero = () => {
  return (
    <BaseSection>
      <HeroContent>
        <Title>GABRIEL PORTEIRO</Title>
        <Subtitle>FULL-STACK WEB DEVELOPER</Subtitle>
        <PlainText>
          Hello, I’m a Brazilian guy that loves technology and pretend to
          develop applications that will change realities.
        </PlainText>

        <HeroSocialContent>
          <IconContext.Provider value={{ size: 48, weight: 'regular' }}>
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
      </HeroContent>
    </BaseSection>
  );
};

export default Hero;
