import { createGlobalStyle } from 'styled-components';
import Sizes from './Sizes';

const NormalizeStyles = createGlobalStyle`
   body {
    font-family: 'SignikaRegular', 'Calibri', 'Helvetica';
    font-size: ${Sizes.s2}px
  } 
`;

export default NormalizeStyles;
