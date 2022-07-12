import { HeroImg, HeroSection, HeroText, PageContainer } from "../../Styles/Containers"
import { PlainText, Subtitle, Title } from "../../Styles/Typography";
import HeroImage from "../../assets/HeroImage.png"

const Home = () => {
  return (
    <PageContainer>
      <h1>Header</h1>
      <HeroSection>
        <HeroText>
          <Title>GABRIEL PORTEIRO</Title>
          <Subtitle>FULL-STACK WEB DEVELOPER</Subtitle>
          <PlainText>
            Hello, I’m a Brazilian guy that’s love tecnology and pretend to develop applications that will change realities.
          </PlainText>
          <h2>Button</h2>
          <h2>Social</h2>
        </HeroText>
        <HeroImg src={HeroImage}/>
      </HeroSection>
    </PageContainer>
  );
};

export default Home;