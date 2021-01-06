import React, { useState } from 'react';

import { View, TextInput, TouchableOpacity } from 'react-native';

import { Container, InputBar, Input, Icons } from './style';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer({ onSend }) {
  const [msg, setMsg] = useState('');

  const handlePress = () => {
    if(msg) {
      onSend(msg);
      setMsg('');
    }
  }

  return (
    <Container>
      <InputBar>
        <Input
          value={msg}
          placeholder='Digite uma mensagem'
          onChangeText={(value) => setMsg(value)}
        />

        <Icons>
          <TouchableOpacity onPress={handlePress}>
            <Icon name="paper-plane" size={20} color="white" />
          </TouchableOpacity>

        </Icons>
      </InputBar>
    </Container>
  );
}

//<TouchableOpacity>
//  <Icon name="microphone" size={30} color="black" />
//</TouchableOpacity>
