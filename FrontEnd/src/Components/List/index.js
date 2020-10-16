import React from 'react';

import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Text,
  Chat,
  Rate
} from './styles';

const ChatList = ({ children, rate, profile }) => (
    <>
        <Chat rate={rate} profile={profile}>
          <Text>FOTO</Text>
          <Text>{children}</Text>
          {profile ? <>
            <Rate>
              <Text>{rate + '/5'}</Text>
              <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
            </Rate></>
            : console.log()
          }
        </Chat>
    </>
  );

export default ChatList;
