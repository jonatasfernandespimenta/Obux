import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Navbar, Info, BlackContainer, RedContainer, YellowContainer } from './styles';

const Menu = () => {

  const navigation = useNavigation();

  const handleChatClick = () => {
    navigation.navigate('ChatList');
  };

  const handleHomeClick = () => {
    navigation.navigate('Home');
  };

  const handleProfileClick = () => {
    navigation.navigate('Profile');
  };

  const handleHistoryClick = () => {
    navigation.navigate('History');
  };
  
  return(
    <>
    <Navbar>

      <TouchableOpacity onPress={handleChatClick}>
        <Icon name={'comments'} size={30} color={'white'} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleHistoryClick}>
        <Icon name={'calendar'} size={30}  color={'white'}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleHomeClick}>
        <Icon name={'home'} size={30} color={'white'}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleProfileClick}>
        <Icon name={'user'} size={30} color={'white'} />
      </TouchableOpacity>
    </Navbar>
    </>
  );
}

export default Menu;
