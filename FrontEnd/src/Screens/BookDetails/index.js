import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Menu from '../../Components/Menu';

import {
  Container,
  Header,
  User,
  UserImage,
  UserName,
  UserAge,
  UserAddress,
  BookAvailability,
  BookImage,
  Body,
  BookInfo,
  BookAuthor,
  BookCondition,
  BookSynopsis,
  BookSynopsisTitle,
  BookSynopsisContent,
  WhatsappFAB,
} from './styles';

import { getBook, getuser } from '../../services/api/userService';
import { createChat } from '../../services/api/chatService';

import { useInfo } from '../../Contexts/info.context';

import { TouchableOpacity } from 'react-native-gesture-handler';

const BookDetails = () => {
  const {params} = useRoute();
  const {setOptions} = useNavigation();

  const [book, setBook] = useState();
  const [user, setUser] = useState();
  const [location, setLocation] = useState('');
  const [userid, setUserId] = useState(0);
  const [avl, setAvl] = useState('');
  const [pfp, setPfp] = useState('');
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

  const { userId } = useInfo();

  useEffect(() => {
    async function loadBookData() {
      const response = await getBook(params.bookId);

      setBook(response.data[0]);
      setUser(response.data[0].user.nome);
      setUserId(response.data[0].user.id);
      setLocation(response.data[0].user.cidade + ', ' + response.data[0].user.estado);
      setPfp(response.data[0].user.file);
   
      if(response.data[0].disponibilidade === 0) { setAvl('Troca') }
      if(response.data[0].disponibilidade === 1) { setAvl('Emprestimo') }
      if(response.data[0].disponibilidade === 2) { setAvl('Troca/Emprestimo') }

      setAge(new Person(response.data[0].user.dataNasc.split('T')[0]).calculateAge());
      
    }
    
    loadBookData();
  }, [params]);

  useEffect(() => {
    setOptions({
      title: book?.titulo ? book.titulo : 'Detalhes do livro',
    });
  }, [book, setOptions]);

  const navigation = useNavigation();
  
  const handleSendMessage = useCallback(
    async (user_Id) => {

      await createChat(user_Id, userId);

      const userData = await getuser(user_Id)
      const user_info = userData.data[0]
      navigation.navigate('Chat', { user_info });
    },
    [navigation],
  );

  const handleNavigateToProfile = useCallback(
    (userId) => {
      navigation.navigate('OtherProfile', {
        userId,
      });
    },
    [navigation],
  );

  return (
    <>
      <Container>
        <Header>
          <User>
            <TouchableOpacity onPress={() => handleNavigateToProfile(userid)}>
            <UserImage
              source={{
                uri: pfp,
                isStatic: true
              }}
            />
            </TouchableOpacity>

            <UserName>{user}</UserName>

            <UserAge>{age}</UserAge>

            <UserAddress>{location}</UserAddress>

            <BookAvailability>{avl}</BookAvailability>
          </User>

          {book?.foto && (
            <BookImage
            source={{
              uri: book.foto,
              isStatic: true
            }}
            />
          )}
        </Header>

        <Body>
          <BookInfo>
            {book?.titulo && <BookAuthor>Titulo: {book.titulo || ''}</BookAuthor>}
            {book?.autor && <BookAuthor>Autor: {book.autor || ''}</BookAuthor>}
            
            {book?.genero && <BookAuthor>Gênero: {book.genero || ''}</BookAuthor>}
            {book?.ano && <BookAuthor>Ano: {book.ano || ''}</BookAuthor>}

            {book?.qualidade && <BookCondition>Condição: {book.qualidade || ''}</BookCondition>}

            {book?.sinopse && (
              <BookSynopsis>
                <BookSynopsisTitle>Sinopse:</BookSynopsisTitle>

                <BookSynopsisContent>{book.sinopse || ''}</BookSynopsisContent>
              </BookSynopsis>
            )}
          </BookInfo>
        </Body>
      </Container>

      <WhatsappFAB onPress={() => {handleSendMessage(userid)}}>
        <MaterialCommunityIcon name="chat" color="#fff" size={25} onPress={() => {handleSendMessage(userid)}} />
      </WhatsappFAB>
      <Menu/>
    </>
  );
};

export default BookDetails;
