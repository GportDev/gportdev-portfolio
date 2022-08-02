import React from 'react';
import {
  HeroImg,
  HeroImgContainer,
  HeroSection,
  HeroContent,
  HeroSocialContent,
} from '../../Styles/Containers';

import { PlainText, Subtitle, Title } from '../../Styles/Typography';
import HeroImage from '../../assets/HeroImage.png';
import Button from '../../components/Button/Button';
import { Instagram, Linkdein, LinkIcon, Mail } from '../../Styles/Icons';
import { IconContext } from 'phosphor-react';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>GABRIEL PORTEIRO</Title>
        <Subtitle>FULL-STACK WEB DEVELOPER</Subtitle>
        <PlainText>
          Hello, I’m a Brazilian guy that’s love tecnology and pretend to
          develop applications that will change realities.
        </PlainText>

        <Button Text="HIRE ME" Variant="solid" />
        <HeroSocialContent>
          <IconContext.Provider value={{ size: 48, weight: 'regular' }}>
            <LinkIcon
              href="https://www.linkedin.com/in/gabriel-porteiro/"
              target="blanck"
            >
              <Linkdein />
            </LinkIcon>

            <LinkIcon href="mailto:gportdev@gmail.com" target="blanck">
              <Mail />
            </LinkIcon>

            <LinkIcon
              href="https://www.instagram.com/gb_porteiro/"
              target="blanck"
            >
              <Instagram />
            </LinkIcon>
          </IconContext.Provider>
        </HeroSocialContent>
      </HeroContent>

      <HeroImgContainer>
        <HeroImg src={HeroImage} />
      </HeroImgContainer>
    </HeroSection>
  );
};

export default Hero;
