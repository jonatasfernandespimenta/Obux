import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Linking} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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

const BookDetails = () => {
  const {params} = useRoute();
  const {setOptions} = useNavigation();

  const [book, setBook] = useState();

  useEffect(() => {
    async function loadBookData() {
      // const response = await api.get(`/getbook/${params.bookId}`);
      // setBook(response.data);

      setBook({
        id: 1,
        autor: 'Roberto Carlos',
        titulo: 'O milagre da cela 8',
        sinopse:
          'Gandalf envolve Bilbo em uma festa para Thorin e seu grupo de anões, que cantam sobre recuperar a Montanha Solitária e seu vasto tesouro do dragão Smaug.[11] Quando a música termina, Gandalf revela um mapa que mostra uma porta secreta na montanha e propõe que um estupefato Bilbo sirva como "ladrão" daexpedição.[12] Os anões ridicularizam tal ideia, mas o hobbit, indignado, junta-se a eles mesmo sem querer.[13] O grupo viaja rumo às terras selvagens,[14] onde Bilbo e Gandalf salvam a companhia de um grupo de trolls[15]. Este último os leva à Rivendell,[16] onde Elrond revela os segredos do mapa que Thorin possui para a entrada secreta de Erebor.[17] Passando por cima das Montanhas Sombrias, eles são capturados por goblins e conduzidos ao subterrâneo profundo.[18] Embora Gandalf consiga resgatá-los, Bilbo acaba separado dos demais no momento da fuga.',
        foto:
          'https://images-na.ssl-images-amazon.com/images/I/61VxEKq8B1L._SX365_BO1,204,203,200_.jpg',
      });
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
    (userId) => {
      navigation.navigate('ChatList', {
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
            <UserImage
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/0/01/Jos%C3%A9_Mayer_Foto_final.jpg',
              }}
            />

            <UserName>José Meyer</UserName>

            <UserAge>70 anos</UserAge>

            <UserAddress>Rio de Janeiro, RJ</UserAddress>

            <BookAvailability>Disponível</BookAvailability>
          </User>

          {book?.foto && (
            <BookImage
              source={{
                uri: book.foto,
              }}
            />
          )}
        </Header>

        <Body>
          <BookInfo>
            {book?.autor && <BookAuthor>Autor: {book.autor}</BookAuthor>}

            <BookCondition>Condição: Pouco usado</BookCondition>

            {book?.sinopse && (
              <BookSynopsis>
                <BookSynopsisTitle>Sinopse:</BookSynopsisTitle>

                <BookSynopsisContent>{book.sinopse}</BookSynopsisContent>
              </BookSynopsis>
            )}
          </BookInfo>
        </Body>
      </Container>

      <WhatsappFAB onPress={handleSendMessage}>
        <MaterialCommunityIcon name="whatsapp" color="#fff" size={25} />
      </WhatsappFAB>
    </>
  );
};

export default BookDetails;
