import React, { useState } from 'react';

import Menu from '../../Components/Menu';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import * as ImagePicker from 'expo-image-picker';

import { useInfo } from '../../Contexts/info.context';



import { addBook } from '../../services/api/userService';

import { Red, Container, Text, BookPlus, Col, Row, Title, InputsContainer, Scroll, Hr, Center, BookCover, CheckBox } from './styles.js';


import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();

  const { userId, setBooks, books } = useInfo();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [editora, setEditora] = useState('');
  const [year, setYear] = useState(0);
  const [genre, setGenre]  = useState('');
  const [quality, setQuality] = useState('');
  const [dispo, setDispo] = useState(0);
  const [sinopse, setSinopse] = useState('');
  const [cover, setCover] = useState([]);

  
  const addCover = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    setCover({
      uri: result.uri,
      name: 'IMG_' + Math.random(4000),
      type: result.type,
    });
    
  };
  
  const handleCancelClick = () => {
    navigation.navigate("Profile");
  };

  const handleCreateBook = async() => {
    const response = await addBook(title, editora, author, year, genre, quality, dispo, sinopse, cover, userId);
    setBooks([...books, response]);

    navigation.navigate('Profile');
  }

  return(
    <>
    <Scroll>
    <Container>
      <Red>
        <Title>    Disponibilidade:</Title>
        <Col>
          <Row>
            <CheckBox onPress={() => setDispo(0)} value={dispo == 1 || dispo == 2 ? false : true} enabled={dispo === 0 ? true : false} />
            <Text>Troca</Text>
          </Row>

          <Row>
            <CheckBox onPress={() => setDispo(1)} value={dispo == 0 || dispo == 2 ? false : true} enabled={dispo === 1 ? true : false} />
            <Text>Empréstimo</Text>
          </Row>

          <Row>
            <CheckBox onPress={() => setDispo(2)} value={dispo == 0 || dispo == 1 ? false : true} enabled={dispo === 2 ? true : false} />
            <Text>Ambos</Text>
          </Row>
        </Col>
      </Red>
      <BookPlus onPress={addCover}>
          {
            cover.uri ?
            <BookCover source={{ uri: cover.uri}} 
              resizeMode="cover"
            /> :
          <Icon name="plus" color="white" size={40} />
          }
      </BookPlus>
    </Container>

    <Input placeholder={'Titulo'} placeholderTextColor={'#ffffff90'} onChangeText={(text) => setTitle(text)} value={title} />
    <InputsContainer>
      <Input placeholder={'Autor'} placeholderTextColor={'#ffffff90'}  onChangeText={(text) => setAuthor(text)} value={author} />
      <Input placeholder={'Editora'} placeholderTextColor={'#ffffff90'} onChangeText={(text) => setEditora(text)} value={editora} />
      <Input placeholder={'Qualidade'} placeholderTextColor={'#ffffff90'} onChangeText={(text) => setQuality(text)} value={quality} />
      <Input placeholder={'Gênero'} placeholderTextColor={'#ffffff90'} onChangeText={(text) => setGenre(text)} value={genre} />
      <Input placeholder={'Ano'} placeholderTextColor={'#ffffff90'} onChangeText={(text) => setYear(text)} value={year} />
      <Hr/>
      <Title>Sinopse:</Title>
      <Input width={250} multiline={true} height={100} onChangeText={(text) => setSinopse(text)} value={sinopse} />
    </InputsContainer>

    <Center>
      <Button width={130} height={40} marginX={10} background={'#007019'} onPress={handleCreateBook} >Salvar</Button>
      <Button width={130} height={40} marginX={10} onPress={handleCancelClick}>Cancelar</Button>
    </Center>
    </Scroll>
    <Menu />
    </>
  );
}

export default Home;
