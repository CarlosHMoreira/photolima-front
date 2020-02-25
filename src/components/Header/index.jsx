import React from 'react';

import CameraIcon from 'images/camera.svg';
import {
  HeaderStyled,
  Title,
  LogoContainer,
  NavContainer,
} from './Styled';

const Header = ({ children }) => (
  <HeaderStyled>

    <LogoContainer>
      <CameraIcon />
      <Title>PhotoLima</Title>
    </LogoContainer>

    {children && <NavContainer>children</NavContainer>}

  </HeaderStyled>
);

export default Header;
