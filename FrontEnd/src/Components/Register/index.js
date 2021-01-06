import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, Alert } from 'react-native';

import addPfpIcon from '../../assets/add_pfp.png';

import ImagePicker from 'expo-image-picker';

import { Container } from './styles';
import Button from '../Button';
import Input from '../Input';

import {Form, Row, Column, ImagePreview} from './styles';

export default function Register({navigation, createUser}) {
  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pfp, setPfp] = useState({ uri: '', name: '', type: '' });
  
  const handleRegisterClick = async () => {
    if(senha !== confirmSenha) {
      Alert.alert('Erro', 'As senhas não coincidem', [
        { text: "OK" }
      ]);
    }else {
      createUser(nome, dataNasc, email, telefone, cpf, senha, cidade, estado, pfp).then(() => {
        Alert.alert('Conta criada com sucesso', 'Sua conta foi criada, basta fazer o login', [
          { text: "OK", onPress: () => navigation.navigate('Login') }
          ],
          { cancelable: true });
      }).catch((err) => {
        console.log(err);
      });  
    }
  };

  const addPfP = async () => {
    const options = {
      title: 'Selecionar foto de perfil',
      takePhotoButtonTitle: 'Tirar foto...',
      mediaType: 'photo',
      allowsEditing: true,
      chooseFromLibraryButtonTitle: 'Escolher da galeria...',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    await ImagePicker.launchImageLibraryAsync(options, response => {
      setPfp({
        uri: response.uri,
        name: response.fileName,
        type: response.type,
      });
    });
  };

  return (
    <Container>
      <Form>

        <TouchableOpacity onPress={addPfP}>
          <Image source={pfp.uri ? { uri: pfp.uri} : addPfpIcon} style={{width: 150, height: 150, borderRadius: 150}} resizeMode="cover"/>
        </TouchableOpacity>

        <Text style={{ color: 'white', marginBottom: 10 }}>Adicionar foto</Text>

        <Input
          icon="account"
          iconColor="#fff"
          placeholder="Nome de Usuario"
          placeholderTextColor="white"
          onChangeText={(text) => setNome(text)}
          value={nome}
        />
        <Input
          icon="email"
          iconColor="#fff"
          placeholder="E-mail"
          placeholderTextColor="white"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Input
          icon="lock"
          iconColor="#fff"
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="white"
          onChangeText={(text) => setSenha(text)}
          value={senha}
        />
        <Input
          icon="lock-alert"
          iconColor="#fff"
          placeholder="Confirmar Senha"
          secureTextEntry={true}
          placeholderTextColor="white"
          onChangeText={(text) => setConfirmSenha(text)}
          value={confirmSenha}
        />
        <Input
          icon="account-card-details"
          iconColor="#fff"
          placeholder="CPF"
          placeholderTextColor="white"
          onChangeText={(text) => setCpf(text)}
          value={cpf}
        />
        <Input
          icon="calendar"
          iconColor="#fff"
          placeholder="Data de Nascimento"
          placeholderTextColor="white"
          onChangeText={(text) => setDataNasc(text)}
          value={dataNasc}
        />
        <Input
          icon="cellphone"
          iconColor="#fff"
          placeholder="Telefone"
          placeholderTextColor="white"
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
        />

        <Row>
          <Column>
            <Input
              icon="home"
              iconColor="#fff"
              placeholder="Cidade"
              placeholderTextColor="white"
              onChangeText={(text) => setCidade(text)}
            />
          </Column>
          <Column fill=".6">
            <Input
              icon="city-variant"
              iconColor="#fff"
              placeholder="Estado"
              placeholderTextColor="white"
              maxLength={2}
              onChangeText={(text) => setEstado(text)}
            />
          </Column>
        </Row>

        <Button
          marginY={20}
          color="blue"
          width={200}
          height={40}
          onPress={handleRegisterClick}>
          Registrar
        </Button>
      </Form>
    </Container>
  );
}
