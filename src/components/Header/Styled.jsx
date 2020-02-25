import styled from 'styled-components';

import { Sizes, Animations, ZIndex } from 'ui';
import { pxToRem } from 'helpers/Converters';


export const HeaderStyled = styled.header`
  width: 100%;
  height: ${pxToRem(80)};
  padding: 5px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: ${ZIndex.HeaderFixed};
`;

export const NavContainer = styled.nav`
  height: 100%;
`;

export const Title = styled.h1`
  font-family: 'ShadowsIntoLight';
  font-size: ${pxToRem(Sizes.s6)};
  position: relative;
  display: inline-block;
  top: -20px;
  margin: 0;
  color: ${({ theme }) => theme.primary};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.text};
`;

export const LogoContainer = styled.div`
  svg {
    height: 100%;
    will-change: transform;
  }

  svg:hover {
    animation: ${Animations.shakeIt} 1.5s ease-in-out;
  }
`;
