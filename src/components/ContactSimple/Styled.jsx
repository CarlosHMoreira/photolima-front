import styled from 'styled-components';

import { pxToRem } from 'helpers/converters';
import { Sizes } from 'ui';

export const Wrapper = styled.section`
  padding: 60px 3px;
  background-color: ${({ theme }) => theme.primaryDark};
  text-align: center;
  color: ${({ theme }) => theme.secondary};
`;

export const Title = styled.h1`
  font-family: 'ShadowsIntoLight';
  font-size: ${pxToRem(Sizes.s7)};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.text};
`;

export const A = styled.a`
  color: ${({ theme }) => theme.secondary};
  font-size: ${pxToRem(Sizes.s4)};
  text-decoration: none;
  word-break: break-word;

  strong {
    color: ${({ theme }) => theme.secondaryLight};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.secondaryDark};
  }
`;
