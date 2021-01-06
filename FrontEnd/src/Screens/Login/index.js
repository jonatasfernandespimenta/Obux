import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Hr from "react-native-hr-component";

import Button from '../../Components/Button';
import Input from '../../Components/Input';

import logo from '../../assets/LOGO.png';

import { Container, Form } from './styles';

import { login, getuser } from '../../services/api/userService';

import { useInfo } from '../../Contexts/info.context';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { 
    setUserId, 
    setUserName, 
    setUserPhone, 
    setUserEmail, 
    setUserCity, 
    setUserState, 
    setUserPfp, 
    setUserDescricao,
    setBooks,
    setUserAge
  } = useInfo();

  function Person(dob) {
    this.birthday = new Date(dob);
    this.calculateAge = function() {
      const diff = Date.now() - this.birthday.getTime(); 
      const ageDate = new Date(diff); 
      console.log(ageDate.getUTCFullYear()); // 1989
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
  }

  const handleLoginClick = async() => {
    try {
      const loginstatus = await login(email, senha);
      if(loginstatus.data !== false) {
        const User = await getuser(loginstatus.data.id);
        setUserId(loginstatus.data.id);
        setUserName(User.data[0].nome);
        setUserPhone(User.data[0].telefone);
        setUserEmail(User.data[0].email);
        setUserCity(User.data[0].cidade);
        setUserState(User.data[0].estado);
        setUserPfp(User.data[0].file);
        setUserDescricao(User.data[0].description);
        setBooks(User.data[0].books);

        const age = new Person(User.data[0].dataNasc.split('T')[0]).calculateAge();
        setUserAge(age);
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
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
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
    </KeyboardAvoidingView>
    </Container>

  );
}
