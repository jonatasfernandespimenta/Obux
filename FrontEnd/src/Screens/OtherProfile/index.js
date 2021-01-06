import React, {useState, useEffect, useCallback} from 'react';

import Menu from '../../Components/Menu';

import Icon from 'react-native-vector-icons/FontAwesome';

import { getuser } from '../../services/api/userService';

import {useNavigation, useRoute} from '@react-navigation/native';

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
  BookCover
} from './styles';

const Profile = () => {
  const {params} = useRoute();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [books, setBooks] = useState([]);
  const [pfp, setPfp] = useState();
  const [age, setAge] = useState(0);

  function Person(dob) {
    this.birthday = new Date(dob);
    this.calculateAge = function() {
      const diff = Date.now() - this.birthday.getTime(); 
      const ageDate = new Date(diff); 
      console.log(ageDate.getUTCFullYear()); // 1989
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
  }

  useEffect(() => {
    async function loadUserData() {
      const response = await getuser(params.userId);
      setName(response.data[0].nome);
      setLocation(response.data[0].cidade + ', ' + response.data[0].estado);
      setDescription(response.data[0].description)
      setBooks(response.data[0].books);
      setPfp(response.data[0].file)
      const age = new Person(response.data[0].dataNasc.split('T')[0]).calculateAge();
      setAge(age)
    }
    
    loadUserData();
  }, [params]);

  const handleNavigateToBookDetails = useCallback(
    (bookId) => {
      navigation.navigate('BookDetails', {
        bookId,
      });
    },
    [navigation],
  );

  const image = { uri: "https://lcconroy.files.wordpress.com/2014/04/london-rain.jpg" };

  const navigation = useNavigation();

  return(
    <>
      <Scroll>
        <Container>
          <BgImg source={image}>
            <Pfp>
              <ImagePreview source={{uri: typeof pfp == 'object' ? pfp.uri : 'http://192.168.100.68:3000/files/' + pfp}}
               resizeMode={'cover'} />
            </Pfp>
          </BgImg>

          <InfoContainer>
            <H1>{name}</H1>
            <H3>Idade: {age} / {location} </H3>

            <Row>
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              <Icon name={'star'} color={'gray'} size={20} style={{ margin: 2 }} />
            </Row>

            <H2>Descrição:</H2>
            <H2 style={{ width: 250 }}>{description}</H2>
          </InfoContainer>

        </Container>

        <Text>Biblioteca</Text>
        <BookContainer>
          
          {
            books.map((uri) => (
              <>
              <Book onPress = {() => {handleNavigateToBookDetails(uri.id)}}>
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
        </BookContainer>

      </Scroll>
      <Menu />
    </>
  );
}

export default Profile;
