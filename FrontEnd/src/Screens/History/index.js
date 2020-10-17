import React from 'react';

import Menu from '../../Components/Menu';
import List from '../../Components/List';

import Header from '../../Components/Header';

import { Scroll } from './styles.js';

const History = () => {
  return(
    <>
      <Header height={50} background={'1E1E1E'} color={'#fff'}>HISTORICO</Header>
      <Scroll>
        <List rate={'3'} profile={false}>Nome do livro</List>
      </Scroll>
      <Menu />
    </>
  );
}

export default History;
