import styled from 'styled-components';

import { pxToRem } from 'helpers/converters';
import { Sizes } from 'ui';

import ReedSvg from 'images/reed.svg';
import SunFlowerSvg from 'images/sunflower.svg';
import TreesSvg from 'images/trees.svg';

export const Title = styled.h1`
  max-width: ${pxToRem(752)};
  padding-right: ${pxToRem(Sizes.s3)};
  float: right;
  font-family: 'ShadowsIntoLight';
  font-size: ${pxToRem(Sizes.s6)};
  color: ${({ theme }) => theme.text};
  text-align: right;
  z-index: 1;
`;

export const Wrapper = styled.div`
  min-height: 400px;
`;

export const Outside = styled.div`
  position: relative;
  min-height: 400px;
  z-index: -1;
`;

export const Ground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50px;
  min-width: 150px;
  width: 60%;
  max-width: 630px;
  background-color: green;
  border-top-right-radius: 100%;
`;

export const Reed = styled(ReedSvg)`
  position: absolute;
  bottom: 40px;
  width: 30%;
  max-width: 106px;
`;

export const SunFlower = styled(SunFlowerSvg)`
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 30%
  
`;

export const Trees = styled(TreesSvg)`
  position: absolute;
  max-width: 400px;
  bottom: 0;
`;
