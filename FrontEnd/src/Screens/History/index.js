import React from 'react';

import Menu from '../../Components/Menu';
import List from '../../Components/List';

import { Scroll } from './styles.js';

const History = () => {
  return(
    <>
      <Scroll>
        <List rate={'3'} profile={false}>Nome do livro</List>
      </Scroll>
      <Menu />
    </>
  );
}

export default History;
