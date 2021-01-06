import React, { useEffect, useState } from 'react';

import Menu from '../../../Components/Menu';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useInfo } from '../../../Contexts/info.context';

import { updateUser } from '../../../services/api/userService';

import * as ImagePicker from 'expo-image-picker';

import { 
  Scroll,
  Container,
  Pfp,
  BgImg,
  H2,
  InfoContainer,
  Row,
  ImagePreview,
  IconContainer
} from '../styles';

import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const image = { uri: "https://lcconroy.files.wordpress.com/2014/04/london-rain.jpg" };


  const {
    userName, 
    userCity, 
    userState, 
    userPfp, 
    userDescricao, 
    userId, 
    setUserName, 
    setUserCity, 
    setUserState, 
    setUserPfp, 
    setUserDescricao,
  } = useInfo();

  const navigation = useNavigation();

  const addPfP = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    setUserPfp({
      uri: result.uri,
      name: 'IMG_' + Math.random(4000),
      type: result.type,
    });
  };

  const handleUpdate = async() => {
    await updateUser(userId, userName, userCity, userState, userDescricao, userPfp);
    navigation.navigate('Profile');
  }

  return(
    <>
      <Scroll>
        <IconContainer>
          <Icon name={'plus-square'} size={40} color={'white'} />
        </IconContainer>
        <Container>
          <BgImg source={image}>
            <Pfp onPress={addPfP}>
              <ImagePreview source={{uri: userPfp}} />
              <IconContainer onPress={addPfP}>
                <Icon name={'plus-square'} size={40} color={'#ffffff90'} />
              </IconContainer>
            </Pfp>
          </BgImg>

          <InfoContainer>
            <Input 
              placeholderTextColor='#ffffff90'
              placeholder='Nome'
              color={'white'}
              height={40}
              value={userName}
              onChangeText={(text) => setUserName(text)}
             />
            <Row>
              <Input 
                placeholderTextColor='#ffffff90' 
                width={200} 
                placeholder='Cidade'
                value={userCity}
                onChangeText={(text) => setUserCity(text)}
              />

              <Input 
                placeholderTextColor='#ffffff90' 
                placeholder='Estado'
                value={userState}
                onChangeText={(text) => {setUserState(text)}}
              />
            </Row>

            <H2>Descrição:</H2>
            <Input 
              width={250} 
              multiline={true} 
              height={100}
              value={userDescricao}
              onChangeText={(text) => {setUserDescricao(text)}}
            />

            <Button width={130} height={30} onPress={handleUpdate}>Salvar</Button>
          </InfoContainer>


        </Container>

      </Scroll>
      <Menu />
    </>
  );
}

export default EditProfile;
