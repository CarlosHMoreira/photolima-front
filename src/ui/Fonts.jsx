import { createGlobalStyle } from 'styled-components';

import ShadowsIntoLight from 'fonts/ShadowsIntoLight/ShadowsIntoLight-Regular.ttf';
import SignikaBold from 'fonts/Signika/Signika-Bold.ttf';
import SignikaLight from 'fonts/Signika/Signika-Light.ttf';
import SignikaRegular from 'fonts/Signika/Signika-Regular.ttf';
import SignikaSemiBold from 'fonts/Signika/Signika-SemiBold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'ShadowsIntoLight';
        src: url(${ShadowsIntoLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'SignikaBold';
        src: url(${SignikaBold}) format('truetype');
        font-weight: 400;
        font-style: bold;
    }

    @font-face {
        font-family: 'SignikaSemiBold';
        src: url(${SignikaSemiBold}) format('truetype');
        font-weight: 300;
        font-style: bold;
    }

    @font-face {
        font-family: 'SignikaRegular';
        src: url(${SignikaRegular}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'SignikaLight';
        src: url(${SignikaLight}) format('truetype');
        font-weight: 100;
        font-style: normal;
    }
`;
