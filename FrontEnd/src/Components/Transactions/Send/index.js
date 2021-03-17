import React, { useState, useEffect } from 'react';

import { useInfo } from '../../../Contexts/info.context';

import { Container, Book, BookCover, Proposal, ButtonContainer, Title, H2, Scroll, Selected } from '../styles';
import { BookContainer } from '../../../Screens/Profile/styles';

import { Image } from 'react-native';

import { getuser } from '../../../services/api/userService';
import {useNavigation, useRoute} from '@react-navigation/native';

import Button from '../../../Components/Button';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { createProposal } from '../../../services/api/chatService';

const Send = ({ receiverId, done }) => {

  const { setShow, userId, setTransactionId } = useInfo();
  const [showDate, setShowDate] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState();
  const [books, setBooks] = useState();

  const handleSelectBook = async (id) => {
    if(selectedBooks === id) {
      setSelectedBooks();
    } else {
      setSelectedBooks(id);
    }
  };

  useEffect(() => {
    async function loadUserData() {
      const response = await getuser(receiverId);
      setBooks(response.data[0].books);
    }
    
    loadUserData();
  }, []);

  const handleCreateProposal = async(date) => {
    const res = await createProposal(date, userId, receiverId, selectedBooks);
    setTransactionId(res.data.id)
    setShow(false);
    done(true);
  }

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <Container>
      <Proposal>
        <Title>Criação de proposta</Title>
        <H2>Selecione um livro para pegar emprestado</H2>
        <Scroll>
        <BookContainer>
        {
          books ? books.map((uri) => (
            <Book onPress={() => {handleSelectBook(uri.id)}}>
              {selectedBooks === uri.id ? <Selected/> : null}
              <BookCover
                source={{
                  uri: uri.foto.replace('192.168.100.68', 'localhost'),
                  isStatic: true
                }}
              />
            </Book>
          ))
        : null
        }

        </BookContainer>
        </Scroll>

        <DateTimePickerModal
          isVisible={showDate}
          mode="date"
          color={'white'}
          onConfirm={handleCreateProposal}
          onCancel={() => setShowDate(false)}
          isDarkModeEnabled={false}
        />

        <ButtonContainer>
          <Button width={100} height={35} marginX={10} background={'#007019'} onPress={() => {setShowDate(true)}}>Próximo</Button>
          <Button width={100} height={35} marginX={10} onPress={handleCancel}>Cancelar</Button>
        </ButtonContainer>
      </Proposal>
    </Container>
  );
}

export default Send;
