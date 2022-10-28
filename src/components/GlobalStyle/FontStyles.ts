import { createGlobalStyle } from 'styled-components';
import JTRegular from '../../assets/fonts/JetBrainsMono-Regular.woff2';
import JTMedium from '../../assets/fonts/JetBrainsMono-Medium.woff2';
import JTBold from '../../assets/fonts/JetBrainsMono-Bold.woff2';
import JTThin from '../../assets/fonts/JetBrainsMono-Thin.woff2';

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'JetBrainsMono';
  src:
    url(${JTRegular}) format('woff2'),
    url(${JTMedium}) format('woff2'),
    url(${JTBold}) format('woff2'),
    url(${JTThin}) format('woff2');
}
`;
