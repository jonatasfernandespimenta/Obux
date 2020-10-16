import React from 'react';

import Menu from '../../Components/Menu';

import Icon from 'react-native-vector-icons/FontAwesome';

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
  ImagePreview,
  IconContainer
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const image = { uri: "https://lcconroy.files.wordpress.com/2014/04/london-rain.jpg" };

  const navigation = useNavigation();

  const handleEditClick = () => {
    navigation.navigate('EditProfile');
  };

  const pfp = {uri: 'https://cdn.dicionariopopular.com/imagens/hipster-og.jpg'}

  return(
    <>
      <Scroll>

        <IconContainer onPress={handleEditClick}>
          <Icon name={'ellipsis-v'} size={40} color={'white'} />
        </IconContainer>
        <Container>
          <BgImg source={image}>
            <Pfp>
              <ImagePreview source={pfp} />
            </Pfp>
          </BgImg>

          <InfoContainer>
            <H1>Franklin Clinton</H1>
            <H3>Idade: 23 / New York, NY </H3>

            <Row>
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'gray'} size={20} style={{ margin: 2 }} />
            </Row>

            <H2>Descrição:</H2>
            <H2 style={{ width: 250 }}>Muito maneiro compartilhar livros e eu sou um hipster barbudão.</H2>
          </InfoContainer>

        </Container>

        <Text>Biblioteca</Text>
        <BookContainer>
          <Book/><Book/><Book/>
          <Book/><Book/><Book/>
          <Book/><Book/><Book/>
        </BookContainer>

      </Scroll>
      <Menu />
    </>
  );
}

export default Profile;
