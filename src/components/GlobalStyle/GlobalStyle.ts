import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: var(--backgroundGradient);
    background-repeat: no-repeat;
    color: #FFF;
    min-height: 100vh;
  }

  :root {
    /* --COLORS-- */
    --backgroundGradient: linear-gradient(100.14deg, #1A1A1B 24%, #333F44 92.42%) ;
    --black: #1A1A1B;
    --gray: #333F44;
    --aquaGreen: #37AA9C;
    --lightBlue: #94F3E4;
    --lightOrange: #ECB365;

    /* --TYPOGRAPHY-- */
    --h1Desktop: 5.6rem;
    --h2Desktop: 4.8rem;
    --h3Desktop: 3.2rem;
    --h4Deskotp: 2.4rem;
    --pDesktop: 2rem;

    --h1Mobile: 4rem;
    --h2Mobile: 3.2rem;
    --h3Mobile: 2.4rem;
    --h4Deskotp: 2rem;
    --pMobile: 1.6rem;
    /* --SIZES-- */

    --sectionSpacer: 8rem;
  }
`