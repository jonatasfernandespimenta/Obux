import React, { useEffect, useState } from 'react';

import Menu from '../../Components/Menu';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import * as ImagePicker from 'expo-image-picker';

import { useInfo } from '../../Contexts/info.context';

import CheckBox from '@react-native-community/checkbox';

import { updateBook } from '../../services/api/userService';

import { 
  Red, 
  Container, 
  Text, 
  BookPlus, 
  Col, 
  Row, 
  Title, 
  InputsContainer, 
  Scroll, 
  Hr, 
  Center, 
  BookCover, 
  TrashContainer 
} from './styles.js';

import { getBook, delBook, getuser } from '../../services/api/userService';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  const {params} = useRoute();

  const { setBooks, books, userId } = useInfo();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [editora, setEditora] = useState('');
  const [year, setYear] = useState(0);
  const [genre, setGenre]  = useState('');
  const [quality, setQuality] = useState('');
  const [dispo, setDispo] = useState(0);
  const [sinopse, setSinopse] = useState('');
  const [cover, setCover] = useState([]);
  useEffect(() => {
    async function loadBookData() {
      const response = await getBook(params.bookId);
      setTitle(response.data[0].titulo);
      setAuthor(response.data[0].autor);
      setEditora(response.data[0].editora);
      setQuality(response.data[0].qualidade);
      setGenre(response.data[0].genero);
      setYear(response.data[0].ano);
      setDispo(response.data[0].disponibilidade);
      setSinopse(response.data[0].sinopse);
      setCover(response.data[0].foto);
    }
    
    loadBookData();
  }, [params]);
  
  const handleOk = async() => {
    await delBook(params.bookId);
    const User = await getuser(userId);
    setBooks(User.data[0].books)
    navigation.navigate('Profile')
  }

  const handleTrash = async() => {
    Alert.alert('Deseja deletar seu livro?', 'Ao pressionar "ok", seu livro será deletado! Clique fora da tela para cancelar', [
      { text: "OK", onPress: handleOk }
      ],
      { cancelable: true });
  }

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

  const handleUpdateBook = async() => {
    const response = await updateBook(params.bookId, title, editora, author, year, genre, quality, dispo, sinopse, cover);
    console.log(response)
    setBooks([...books, response]);

    navigation.navigate('Profile')
  }

  return(
    <>
    <Scroll>
    <Container>
      <Red>
        <Title>    Disponibilidade:</Title>
        <Col>
          <Row>
            <CheckBox onFillColor={'#2D2D2D'} onValueChange={() => setDispo(0)} value={dispo == 1 || dispo == 2 ? false : true}  />
            <Text>Troca</Text>
          </Row>

          <Row>
            <CheckBox onFillColor={'#2D2D2D'} onValueChange={() => setDispo(1)} value={dispo == 0 || dispo == 2 ? false : true} />
            <Text>Empréstimo</Text>
          </Row>

          <Row>
            <CheckBox onFillColor={'#2D2D2D'} onValueChange={() => setDispo(2)} value={dispo == 0 || dispo == 1 ? false : true} />
            <Text>Ambos</Text>
          </Row>
        </Col>
      </Red>
      <BookPlus onPress={addCover}>
        <BookCover source={{uri: cover.uri}} 
          resizeMode="cover"
        />
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
      <Icon onPress={handleTrash} name={"trash"} size={35} color={'white'} />
    </Center>

    <Center>
      <Button width={130} height={40} marginX={10} background={'#007019'} onPress={handleUpdateBook} >Salvar</Button>
      <Button width={130} height={40} marginX={10} onPress={handleCancelClick}>Cancelar</Button>
    </Center>

    </Scroll>
    <Menu />
    </>
  );
}

export default Home;
