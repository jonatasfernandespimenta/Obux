import React, { useEffect, useState } from 'react';

import Menu from '../../Components/Menu';
import List from '../../Components/List';

import Button from '../../Components/Button';
import Header from '../../Components/Header';

import { useInfo } from '../../Contexts/info.context';
import { getuser } from '../../services/api/userService';

import Moment from 'moment';

import { Scroll } from './styles.js';
import { Book, BookCover, CheckProposal, H2, Proposal, Title } from '../../Components/Transactions/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const History = () => {
  Moment.locale('br');
  const { userId } = useInfo();
  const [info, setInfo] = useState();
  const [receivedInfo, setReceivedInfo] = useState();
  const [check, setCheck] = useState(null);

  useEffect(() => {
    async function fetchInfo() {
      const res = await getuser(userId);
      setInfo(res.data[0].transactions);
      setReceivedInfo(res.data[0].receivedTransactions);
    };
    fetchInfo()
  }, [])

  return(
    <>
      <Header height={90} background={'1E1E1E'} color={'#fff'}>HISTORICO</Header>

      {check && 
      <CheckProposal>
        <Proposal>
          <Title>Detalhes da proposta</Title>
          <H2>Data de entrega: {Moment(check.due).format('DD/MMM/YYYY')}</H2>
          <H2>Livro: </H2>
          <Book>
            <BookCover source={{
              uri: check.book.foto
            }} />
          </Book>

          <Button marginY={10} marginX={10} width={120} height={40} onPress={() => {setCheck(null)}}>Fechar</Button>

        </Proposal>
      </CheckProposal>
      }

      <Scroll>
        {
          info ? info.filter((item) => item.accepted).map(item => {
            return(
              <TouchableOpacity onPress={() => setCheck(item)}>
                <List profile={false} uri={item.book.foto} >{item.book.titulo}</List>
              </TouchableOpacity>
            )
          }) : null
        }

        {
          receivedInfo ? receivedInfo.filter((item) => item.accepted).map(item => {
            return(
              <TouchableOpacity onPress={() => setCheck(item)}>
                <List profile={false} uri={'http://192.168.100.68:3000/files/'+item.book.foto} >{item.book.titulo}</List>
              </TouchableOpacity>
            )
          }) : null
        }

      </Scroll>
      <Menu />
    </>
  );
}

export default History;
