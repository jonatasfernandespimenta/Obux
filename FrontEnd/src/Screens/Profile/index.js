import React, { useCallback, useEffect, useState } from 'react';

import Menu from '../../Components/Menu';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useInfo } from '../../Contexts/info.context';
import { getuser } from '../../services/api/userService';

import * as ImagePicker from 'expo-image-picker'

import {
  Menu as PopMenu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import { 
  Scroll,
  Container,
  Pfp,
  BgImg,
  H1,
  H2,
  H3,
  InfoContainer,
  Row,
  Text,
  BookContainer,
  Book,
  BookPlus,
  ImagePreview,
  IconContainer,
  BookCover
} from './styles';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = () => {
  const {userName, userCity, userState, userPfp, userDescricao, userAge, userId} = useInfo();

  const [books, setBooks] = useState([]);
  const [thumb, setThumb] = useState(null);

  const navigation = useNavigation();

  const handleEditClick = () => {
    navigation.navigate('EditProfile');
  };

  const handleEditBook = useCallback(
    (bookId) => {
      navigation.navigate('UpdateBook', {
        bookId,
      });
    },
    [navigation],
    );

  const handleBookClick = () => {
    navigation.navigate('AddBook');
  };

  const handleThumb = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
  
    setThumb({
      uri: result.uri,
      name: 'IMG_' + Math.random(4000),
      type: result.type,
    });
  
  };

  useEffect(() => {
    const fetchData = async() => {
      const response = await getuser(userId);
      setThumb(response.data[0].thumb);
    };
    fetchData();
  }, []);

  useFocusEffect(() => {
    async function loadUserData() {
      const response = await getuser(userId);
      setBooks(response.data[0].books);
    }
    
    loadUserData();
  }, []);

  return(
    <>
      <Scroll>


        <IconContainer>
          <PopMenu>
            <MenuTrigger>
              <Icon name={'ellipsis-v'} size={40} color={'white'} />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={handleEditClick}>
                <Text style={{ color: 'black', width: '100%' }}>Editar perfil</Text>
              </MenuOption>
              <MenuOption onSelect={() => navigation.navigate('Login')}>
                <Text style={{ color: 'red' }}>Sair</Text>
              </MenuOption>
            </MenuOptions>
          </PopMenu>
        </IconContainer>

        <IconContainer style={{ marginLeft: 350 }} onPres={handleThumb}>
          <Icon name={'pencil'} size={30} color={'#ccc'} />
        </IconContainer>

        <Container>
          <BgImg source={{uri: thumb}}>
            <Pfp>
              <ImagePreview source={{uri: 'userPfp'}} resizeMode={'cover'} />
            </Pfp>
          </BgImg>

          <InfoContainer>
            <H1>{userName}</H1>
            <H3>Idade: {userAge} / {userCity}, {userState} </H3>

            <Row>
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={ 'gray' } size={20} style={{ margin: 2 }} />
            </Row>

            <H2>Descrição:</H2>
            <H2 style={{ width: 250 }}>{userDescricao}</H2>
          </InfoContainer>

        </Container>

        <Text>Biblioteca</Text>
        <BookContainer>
          
          {
            books.map((uri) => (
              <>
              <Book onPress={() => {handleEditBook(uri.id)}}>
                <BookCover
                  source={{uri: uri.foto.replace('192.168.100.68', 'localhost')}}
                />
              </Book>
              </>
            ))
          }
          
          <BookPlus onPress={handleBookClick}><Icon name="plus" color="white" size={50} /></BookPlus>
        </BookContainer>

      </Scroll>
      <Menu />
    </>
  );
}

export default Profile;
