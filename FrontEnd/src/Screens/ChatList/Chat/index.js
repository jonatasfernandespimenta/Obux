import React, { useCallback, useEffect, useRef, useState } from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import SendTransaction from '../../../Components/Transactions/Send';
import AcceptTransaction from '../../../Components/Transactions/Accept';

import Menu from '../../../Components/Menu';
import List from '../../../Components/List';;
import ChatInput from '../../../Components/Footer';

import { useInfo } from '../../../Contexts/info.context';
import Moment from 'moment';

import { createMessage, getTransaction, updateProposal, getChat } from '../../../services/api/chatService';

import Button from '../../../Components/Button';
import Message from '../../../Components/Message';

import { Scroll, InputContainer, Column, IconContainer } from '../styles.js';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Book, BookCover, CheckProposal, H2, Proposal, Row, Title, Container } from '../../../Components/Transactions/styles';
import { KeyboardAvoidingView } from 'react-native';

const Chat = () => {
  const {params} = useRoute();
  const { userId } = useInfo();

  Moment.locale('br');

  const { show, setShow, transactionId } = useInfo();

  const scrollRef = useRef(null);

  const [check, setCheck] = useState(false);
  const [info, setInfo] = useState();
  const [messages, setMessages] = useState([]);
  const [done, setDone] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  const navigation = useNavigation();

  useEffect(async() => {
    const chatId = params.chatId;
    const res = await getChat(chatId);

    setChatMessages(res.data[0].messages);
  }, [])

  const handleInfo = async() => {

    const res = await getTransaction(transactionId);
    setInfo(res.data[0]);
  }

  const handleSendTransaction = () => {
    if(show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  const handleAccept = async() => {
    await updateProposal(transactionId, true)
    setCheck(false);
  }

  const sendMsg = async (text) => {
    const chatId = params.chatId;

    await createMessage(userId, chatId, text)

    setChatMessages((oldState) => [...oldState, { author: 'You', message: text }]);
  };

  const handleNavigateToProfile = useCallback(
    (userId) => {
      navigation.navigate('OtherProfile', {
        userId,
      });
    },
    [navigation],
  );

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 5 : 0

//console.log(info)

  return(
    <>
    {show && <SendTransaction receiverId={params?.user_info.id} done={setDone} />}

      {check && 
        <CheckProposal>
        <Proposal>
          <Title>Você recebeu uma proposta</Title>
          <H2>Data de entrega: {info ? Moment(info.due).format('DD/MMM/YYYY') : null}</H2>
          <H2>Livro a ser emprestado: </H2>
          <Book>
          <BookCover source={{
              uri: info?.book.foto,
              isStatic: true
            }} />
          </Book>

          <Row>
            <Button marginY={10} marginX={10} width={120} background={'#007019'} onPress={handleAccept} height={40}>Aceitar</Button>
            <Button marginY={10} marginX={10} width={120} height={40} onPress={() => {setCheck(false)}}>Recusar</Button>
          </Row>

        </Proposal>
      </CheckProposal>
      } 

      <TouchableOpacity onPress={() => handleNavigateToProfile(params?.user_info?.id)}>
        <List rate={'3'} uri={params?.user_info?.file.replace('192.168.100.68', 'localhost')}
        profile={true}>{params?.user_info?.nome} / {params?.user_info?.estado}</List>
      </TouchableOpacity>

      {done && <AcceptTransaction set={setCheck} handleInfo={handleInfo} />}
      <FlatList
        ref={scrollRef}
        data={chatMessages}
        renderItem={({ item }) => (
          <Message author={item.userId === userId} message={item.text} received={item.userId !== userId} />
          )}
          keyExtractor={(item, index) => index.toString()}
          onContentSizeChange={() => scrollRef.current.scrollToEnd()}
          />
      
      <KeyboardAvoidingView behavior='position'>
        <InputContainer>
          <Column fill=".6">
            <IconContainer onPress={handleSendTransaction}>
              <Icon name={'address-card'} size={25} color={'white'} onPress={handleSendTransaction} />
            </IconContainer>
          </Column>
          <Column fill="3">
            <ChatInput onSend={sendMsg} placeholder={'Escreva uma mensagem...'} />
          </Column>
        </InputContainer>
        <Menu />
      </KeyboardAvoidingView>
    </>
  );
}

export default Chat;
