import React from 'react';

import Menu from '../../Components/Menu';
import List from '../../Components/List';

import Header from '../../Components/Header';

import { Scroll } from './styles.js';

const Home = () => {
  return(
    <>
      <Header height={50} background={'1E1E1E'} color={'#fff'}>CONVERSAS</Header>
      <Scroll>
        <List rate={'3'} profile={true}>Jose Mayer / RJ</List>
      </Scroll>
      <Menu />
    </>
  );
}

export default Home;
