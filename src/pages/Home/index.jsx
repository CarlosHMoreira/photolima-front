import React from 'react';

import ServicesAvailable from 'components/ServicesAvailable';
import OutsidePhoto from 'components/OutsidePhoto';
import ContactSimple from 'components/ContactSimple';

import Banner from './Banner';
import { Section } from './Styled';


const Home = () => (
  <>
    <Banner />

    <Section>
      <ServicesAvailable />
    </Section>

    <OutsidePhoto />

    <ContactSimple />
  </>
);

export default Home;
