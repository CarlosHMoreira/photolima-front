import styled from 'styled-components';

import { pxToRem } from 'helpers/Converters';
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

export const iconResizer = (toStyle) => styled(toStyle)`
  width: ${pxToRem(100)};
  height: ${pxToRem(100)};
`;

export const ServiceListItem = styled.li`
  max-width: 550px;
  margin: 0 auto;
`;

export const ServiceArticle = styled.article`
  margin: ${Sizes.s1} 0;
  border: 3px solid ${({ theme }) => theme.secondary};
  border-radius: 5%;
  background-color: ${({ theme }) => theme.primary};
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

export const ServiceList = styled.ul`
  list-style: none;
  padding: ${pxToRem(5)};
`;
