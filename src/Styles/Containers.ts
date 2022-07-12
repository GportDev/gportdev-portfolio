import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1170px;
  padding: 0 2rem;
  margin: 0 auto;
`
export const HeroSection = styled.section`
  display: flex;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeroImg = styled.img`
  max-height: 90%;
  max-height: 90%;
`
