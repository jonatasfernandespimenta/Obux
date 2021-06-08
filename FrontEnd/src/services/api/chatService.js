import { AsyncStorage } from 'react-native';
import api from './index';

export const getChats = async() => {
  return await api.get('/chats');
};

export const createChat = async(chattingWith, userId) => {
  const data = {
    chattingWith,
    user: {
      id: userId
    }
  }

  const res = await api.post('/chats/create', data, {
    headers: {'access-token': await AsyncStorage.getItem('@token')}
  });
  console.log('RESPOSTA AQUI: ', res.data);
  return res;
};

export const createProposal = async(due, userid, receiverid, bookid) => {
  const data = {
    due,
    user: {
      id: userid
    },
    receiver: {
      id: receiverid
    },
    book: {
      id: bookid
    }
  };

  return await api.post('/transactions/create', data, {
    headers: {'access-token': await AsyncStorage.getItem('@token')}
  });
}

export const updateProposal = async(transactionId, accepted) => {
  const data = {
    accepted: accepted
  };

  return await api.put('/transactions/update/' + transactionId, data, {
    headers: {'access-token': await AsyncStorage.getItem('@token')}
  });
}

export const getTransaction = async(id) => { return await api.get('/transactions/' + id) }

export const createMessage = async(userId, chatId, text) => { 
  return await api.post('/messages/', {
    userId,
    chatId,
    text
  }, {
    headers: {'access-token': await AsyncStorage.getItem('@token')}
  })
}
