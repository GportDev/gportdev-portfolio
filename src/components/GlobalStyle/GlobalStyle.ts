import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: var(--backgroundGradient);
    background-repeat: no-repeat;
    color: #FFF;
    margin: 0;
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
    --h1Desktop: 3.5rem;
    --h2Desktop: 3rem;
    --h3Desktop: 2rem;
    --h4Deskotp: 1.5rem;
    --pDesktop: 1.25rem;

    --h1Mobile: 2rem;
    --h2Mobile: 1.5rem;
    --h3Mobile: 1.25rem;
    --h4Deskotp: 1.05rem;
    --pMobile: 1rem;

    /* --SIZES-- */
    --sectionSpacer: 5rem;

    /* --EFFECTS-- */
    --simpleShadow: 0px 2px 6px rgba(0, 0, 0, 0.35);
  }
`