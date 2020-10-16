import React from 'react';

import Menu from '../../Components/Menu';
import List from '../../Components/List';

import { Scroll } from './styles.js';

const Home = () => {
  return(
    <>
      <Scroll>
        <List rate={'3'} profile={true}>Jose Mayer / RJ</List>
      </Scroll>
      <Menu />
    </>
  );
}

export default Home;
