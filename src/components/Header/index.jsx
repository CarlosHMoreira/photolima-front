import React, { useState, useEffect } from 'react';

import CameraIcon from 'images/camera.svg';
import {
  HeaderStyled,
  Title,
  LogoLink,
  NavContainer,
} from './Styled';

import { throttle } from 'helpers/composers';

const Header = ({ children }) => {
  const [isTransparent, setIsTransparent] = useState(true);

  const handleOnScroll = throttle(() => setIsTransparent(window.scrollY < 20), 700);

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
    return () => window.removeEventListener('scroll', handleOnScroll);
  });


  return (
    <HeaderStyled isTransparent={isTransparent}>
      <LogoLink to="/">
        <CameraIcon />
        <Title>PhotoLima</Title>
      </LogoLink>

      {children && <NavContainer>children</NavContainer>}

    </HeaderStyled>
  );
};

export default Header;
