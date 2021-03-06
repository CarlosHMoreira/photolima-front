import styled from 'styled-components';

import { pxToRem } from 'helpers/converters';
import { Sizes } from 'ui';

export const iconResizer = (toStyle) => styled(toStyle)`
  width: ${pxToRem(100)};
  height: ${pxToRem(100)};
`;

export const ServiceList = styled.ul`
  list-style: none;
  padding: ${pxToRem(5)};
  max-width: 550px;
  margin: 0 auto;

  @media screen and (min-width: 1120px) {
    max-width: 1120px;
  }

  @media screen and (min-width: 1680px) {
    max-width: 1680px;
  }
`;

export const ServiceListItem = styled.li`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  max-width: 550px;
  min-width: 300px;
  height: 215px;
  margin: 5px;
`;

export const ServiceArticle = styled.article`
  margin: ${Sizes.s1} 0;
  border: 3px solid ${({ theme }) => theme.secondary};
  border-radius: 5%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.primary};
  height: 100%;
`;

export const ServiceHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ServiceTitle = styled.h1`
  font-size: ${pxToRem(Sizes.s4)};
`;

export const ServiceText = styled.p`
  padding: ${pxToRem(Sizes.s1)};
`;
