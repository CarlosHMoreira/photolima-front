import React from 'react';

import {
  Img, Article, Title,
} from './Styled';
import BannerImg from 'images/banner.jpg';

const Banner = () => (
  <>
    <Img
      src={BannerImg}
      alt="Mão segurando lente de camera profissional com paisagem de lagoa"
    />

    <Article>
      <Title>
        Você por outro ângulo.
      </Title>
    </Article>
  </>
);

export default Banner;
