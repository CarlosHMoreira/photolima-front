import React from 'react';
import Header from '../../components/Header';

const HomeLayout = ({ children }) => (
  <>
    <Header changeBgColor />
    <main>
      { children }
    </main>
  </>
);

export default HomeLayout;
