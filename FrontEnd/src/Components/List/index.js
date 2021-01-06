import React from 'react';

import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Text,
  Chat,
  Rate,
  UserImage
} from './styles';

const ChatList = ({ children, rate, profile, uri }) => (
    <>
        <Chat rate={rate} profile={profile}>
          <UserImage source={{uri: uri}} />
          <Text>{children}</Text>
            <Rate>
            {profile ?
              <>
                <Text>{rate + '/5'}</Text>
                <Icon name={'star'} color={'yellow'} size={20} style={{ margin: 2 }} />
              </>
            : null}
            </Rate>
        </Chat>
    </>
  );

export default ChatList;
