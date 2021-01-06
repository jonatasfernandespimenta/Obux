import React, { useCallback, useEffect, useState } from 'react';

import Menu from '../../Components/Menu';

import Icon from 'react-native-vector-icons/FontAwesome';

import { useInfo } from '../../Contexts/info.context';
import { getuser } from '../../services/api/userService';

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

const Profile = () => {
  const {userName, userCity, userState, userPfp, userDescricao, userAge, userId} = useInfo();

  const [books, setBooks] = useState([]);

  const image = { uri: "https://lcconroy.files.wordpress.com/2014/04/london-rain.jpg" };

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

        <IconContainer onPress={handleEditClick}>
          <Icon name={'ellipsis-v'} size={40} color={'white'} />
        </IconContainer>
        <Container>
          <BgImg source={image}>
            <Pfp>
              <ImagePreview source={{uri: typeof userPfp == 'object' ? userPfp.uri.includes('http://192.168.100.68:3000/files/') ? userPfp.uri : 'http://192.168.100.68:3000/files/' + userPfp.uri : userPfp}}
                resizeMode={'cover'} />
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
              {console.log('MEXICO: ', uri.titulo )}
              <Book onPress={() => {handleEditBook(uri.id)}}>
                <BookCover
                  source={{
                    uri: uri.foto ? uri.foto.includes('http://192.168.100.68:3000/files/') ? 
                      uri.foto : 'http://192.168.100.68:3000/files/' + uri.foto : null,
                    isStatic: true
                  }}
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
