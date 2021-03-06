import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 1170px;
  padding: 0 2rem;
  display: flex;
  height: 7.5rem;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled.img`
  @media(max-width: 800px) {
    max-height: 50%;
  }
`