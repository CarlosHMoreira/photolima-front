import { keyframes } from 'styled-components';

const shakeIt = keyframes`
  from {
    transform: rotate(0);
  }
  30% {
    transform: rotate(20deg);
  }
  60% {
    transform: rotate(-20deg);
  }
  to {
    transform: rotate(0);
  }
`;

export default {
  shakeIt,
};
