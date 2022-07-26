import React from 'react';
import { HeroImg, HeroImgContainer, HeroSection, HeroContent, HeroSocialContent } from '../../Styles/Containers';
import { PlainText, Subtitle, Title } from '../../Styles/Typography';
import HeroImage from '../../assets/HeroImage.png';
import Button from '../../components/Button/Button';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>GABRIEL PORTEIRO</Title>
        <Subtitle>FULL-STACK WEB DEVELOPER</Subtitle>
        <PlainText>
          Hello, I’m a Brazilian guy that’s love tecnology and pretend to develop applications that will change
          realities.
        </PlainText>

        <Button Text="HIRE ME" Variant="solid" />

        <HeroSocialContent>
          <h2>Social</h2>
          <h2>Social</h2>
          <h2>Social</h2>
        </HeroSocialContent>
      </HeroContent>

      <HeroImgContainer>
        <HeroImg src={HeroImage} />
      </HeroImgContainer>
    </HeroSection>
  );
};

export default Hero;
