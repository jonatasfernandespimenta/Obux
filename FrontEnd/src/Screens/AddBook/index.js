import React from 'react';

import Menu from '../../Components/Menu';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import CheckBox from '@react-native-community/checkbox';

import { Red, Container, Text, BookPlus, Col, Row, Title, InputsContainer, Scroll, Hr, Center } from './styles.js';

import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return(
    <>
    <Scroll>
    <Container>
      <Red>
        <Title>    Disponibilidade:</Title>
        <Col>
          <Row>
            <CheckBox onFillColor={'#2D2D2D'} />
            <Text>Troca</Text>
          </Row>

          <Row>
            <CheckBox onFillColor={'#2D2D2D'} />
            <Text>Empréstimo</Text>
          </Row>

          <Row>
            <CheckBox onFillColor={'#2D2D2D'} />
            <Text>Ambos</Text>
          </Row>
        </Col>
      </Red>
      <BookPlus><Icon name="plus" color="white" size={40} /></BookPlus>
    </Container>

    <Input placeholder={'Titulo'} placeholderTextColor={'#ffffff90'} />
    <InputsContainer>
      <Input placeholder={'Autor'} placeholderTextColor={'#ffffff90'} />
      <Input placeholder={'Editora'} placeholderTextColor={'#ffffff90'} />
      <Input placeholder={'Qualidade'} placeholderTextColor={'#ffffff90'} />
      <Input placeholder={'Gênero'} placeholderTextColor={'#ffffff90'} />
      <Input placeholder={'Ano'} placeholderTextColor={'#ffffff90'} />
      <Hr/>
      <Title>Sinopse:</Title>
      <Input width={250} multiline={true} height={100} />
    </InputsContainer>

    <Center>
      <Button width={150} height={40} marginX={10} background={'#007019'} >Salvar</Button>
      <Button width={150} height={40} marginX={10}>Cancelar</Button>
    </Center>
    </Scroll>
    <Menu />
    </>
  );
}

export default Home;
