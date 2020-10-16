import React from 'react';
import { Text } from 'react-native';

import Input from '../../Components/Input';
import Menu from '../../Components/Menu';

import { Book, Scroll, Container } from './styles';

const Home = () => {
  return(
    <>

      <Input icon={'search'} size={15} placeholderTextColor="#ffffff80" placeholder={'Buscar...'} />

      <Scroll>
        <Container>
          <Book/><Book/><Book/><Book/><Book/><Book/><Book/><Book/><Book/><Book/><Book/><Book/>
        </Container>
      </Scroll>
      <Menu/>
    </>
  );
}

export default Home;
