import styled from "styled-components";

export const Title = styled.h1`
  font-size: var(--h1Desktop);
  @media(max-width: 800px) {
    font-size: var(--h1Mobile);
  }
`

export const Subtitle = styled.h3`
  font-size: var(--h3Desktop);
  @media(max-width: 800px) {
    font-size: var(--h3Mobile);
  }
`

export const PlainText = styled.p`
  font-size: var(--pDesktop);
  @media(max-width: 800px) {
    font-size: var(--pMobile);
  }
`