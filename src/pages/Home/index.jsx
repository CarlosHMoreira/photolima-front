import React from 'react';

import ServicesAvailable from 'components/ServicesAvailable';
import OutsidePhoto from 'components/OutsidePhoto';

import Banner from './Banner';
import { Section } from './Styled';


const Home = () => (
  <>
    <Banner />

    <Section>
      <ServicesAvailable />
    </Section>

    <Section>
      <OutsidePhoto />
    </Section>
  </>
);

export default Home;
