import styled from 'styled-components';

import { pxToRem } from 'helpers/converters';
import { Sizes, ZIndex } from 'ui';


export const Img = styled.img`
  width: 100%;
  filter: brightness(90%);
  z-index: ${ZIndex.Background};
`;

export const Article = styled.article`
  position: absolute;
  min-width: 300px;
  width: 40%;
  top: 10vw;
  right: 0
`;

export const Title = styled.h1`
  font-family: 'ShadowsIntoLight';
  font-size: ${pxToRem(46.44)};
  color: ${({ theme }) => theme.secondaryLight};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.text};

  @media screen and (min-width:818px) {
    font-size: ${pxToRem(Sizes.s7)};
  }
`;

export const Section = styled.section`
  margin: 60 0;
`;
