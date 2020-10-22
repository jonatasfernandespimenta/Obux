import React, { useState } from 'react';
import { Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Hr from "react-native-hr-component";

import Button from '../../Components/Button';
import Input from '../../Components/Input';

import logo from '../../assets/LOGO.png';

import { Container, Form } from './styles';

import { login } from '../../services/api/userService';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginClick = async() => {
    try {
      const loginstatus = await login(email, senha);

      if(loginstatus.data.login) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro no login', 'Email ou senha incorretos', [
          { text: "OK" }
          ],
          { cancelable: true });
      }
      
    } catch (error) {
      console.log(error);
    }

  };

  const handleRegisterClick = () => {
    navigation.navigate('Register');
  };

  return (
    <Container>
      <Form>
        <Image 
          source={ logo }
          style={{ width: 200, height: 200}}
        />
        <Input placeholder='E-mail' placeholderTextColor="white" onChangeText={(text) => setEmail(text)} value={email} />
        
        <Input placeholder='Senha' secureTextEntry={true} placeholderTextColor="white" onChangeText={(text) => setSenha(text)} value={senha} />
        
        <Button marginY={20} color="blue" width={200} onPress={handleLoginClick} height={40} >Logar</Button>
        
        <Hr lineColor="white" width={1} text="Não possui uma conta?" textStyles={{ color: "white" }} />
        
        <Button marginY={20} color="blue" width={200} height={40} onPress={handleRegisterClick} >Registrar</Button>
      </Form>
    </Container>

  );
}
