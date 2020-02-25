import React from 'react';

import { Img, Article, Title } from './Styled';
import BannerImg from 'images/banner.jpg';
import ServicesAvailable from './ServicesAvailable';

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

const Home = () => (
  <>
    <Banner />
    <ServicesAvailable />
  </>
);

export default Home;
