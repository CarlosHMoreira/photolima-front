import React from 'react';

import {
  Wrapper,
  Title,
  Outside,
  Ground,
  Reed,
  SunFlower,
  Trees,
} from './Styled';


const OutsidePhoto = () => (
  <Wrapper>
    <Title>
      Venha sentir o ar fresco e tirar fotos enquanto isso &#128525;
    </Title>

    <Outside aria-hidden="true">
      <Ground>
        <Reed />
        <Trees />
        <SunFlower />
      </Ground>
    </Outside>

  </Wrapper>
);

export default OutsidePhoto;
