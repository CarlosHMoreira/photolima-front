import React, { memo, useState, useEffect, useRef } from 'react';

import CameraIcon from 'images/camera.svg';
import {
  HeaderStyled,
  Title,
  LogoContainer,
  NavContainer,
} from './Styled';

const Header = memo(({ children, changeColorScrollY }) => {
  const [isTransparent, setIsTransparent] = useState(true);

  const handleOnScroll = () => setIsTransparent(window.screenY > changeColorScrollY);

  if (changeColorScrollY) {
    useEffect(() => {
      window.addEventListener('scroll', handleOnScroll);
      return () => window.removeEventListener('scroll', handleOnScroll);
    });
  }


  return (
    <HeaderStyled isTransparent={isTransparent}>
      <LogoContainer>
        <CameraIcon />
        <Title>PhotoLima</Title>
      </LogoContainer>

      {children && <NavContainer>children</NavContainer>}

    </HeaderStyled>
  );
});

export default Header;
