import React from 'react';

import Menu from '../../../Components/Menu';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useInfo } from '../../../Contexts/info.context';

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

const EditProfile = () => {
  const image = { uri: "https://lcconroy.files.wordpress.com/2014/04/london-rain.jpg" };

  const {userName, userCity, userState, userPfp, userDescricao} = useInfo();

  return(
    <>
      <Scroll>
        <IconContainer>
          <Icon name={'plus-square'} size={40} color={'white'} />
        </IconContainer>
        <Container>
          <BgImg source={image}>
            <Pfp>
              <ImagePreview source={{uri: userPfp}} />
              <IconContainer>
                <Icon name={'plus-square'} size={40} color={'#ffffff90'} />
              </IconContainer>
            </Pfp>
          </BgImg>

          <InfoContainer>
            <Input placeholderTextColor='#ffffff90' placeholder='Nome' color={'white'} height={40}>{userName}</Input>
            <Row>
              <Input placeholderTextColor='#ffffff90' width={150} placeholder='Cidade'>{userCity}</Input>
              <Input placeholderTextColor='#ffffff90' placeholder='Estado'>{userState}</Input>
            </Row>

            <H2>Descrição:</H2>
            <Input width={250} multiline={true} height={100}>{userDescricao}</Input>

            <Button width={100}>Salvar</Button>
          </InfoContainer>


        </Container>

      </Scroll>
      <Menu />
    </>
  );
}

export default EditProfile;
