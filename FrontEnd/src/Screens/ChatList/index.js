import React, { useEffect, useState } from 'react';

import Menu from '../../Components/Menu';
import List from '../../Components/List';

import Header from '../../Components/Header';

import { Scroll } from './styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import { getuser } from '../../services/api/userService';

import { useInfo } from '../../Contexts/info.context';

const ChatList = () => {

  const [userInfo, setUserInfo] = useState([]);

  const { userId } = useInfo();
  const { params } = useRoute();

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      const chatRes = await getuser(userId);
      const userChats = chatRes.data[0].chats.map((user) => user.chattingWith)
      await Promise.all(
        userChats.map(async(info) => { 
          const res = await getuser(info)
          return res.data[0];
        })
      ).then(users => setUserInfo([{user: users, chatId: chatRes.data[0].chats.map((user) => user.id)}]));
    }
    fetchData();
  }, []);

  console.log('copel: ', userInfo);

  const handleChat = (user_info) => {
    navigation.navigate('Chat', { user_info });
  }

  return(
    <>
      <Header height={90} background={'1E1E1E'} color={'#fff'}>CONVERSAS</Header>
      <Scroll>
        {
          userInfo.map((info) => (
            <>
            <TouchableOpacity onPress={() => handleChat(info)}>
              <List rate={'3'} profile={true} uri={'http://192.168.100.68:3000/files/'+info.user[0].file} >
                {info.user[0].nome}
              </List>
            </TouchableOpacity>
            </>
          ))
        }

      </Scroll>
      <Menu />
    </>
  );
}

export default ChatList;
