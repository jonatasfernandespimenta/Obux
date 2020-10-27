import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, Alert } from 'react-native';

import { createUser } from '../../services/api/userService';

import addPfpIcon from '../../assets/add_pfp.png';

import ImagePicker from 'react-native-image-picker';

import { Container } from './styles';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

import {Form, Row, Column, ImagePreview} from './styles';

export default function Register({navigation}) {
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
  const [description, setDescription] = useState('');
  
  const handleRegisterClick = async () => {
    if(senha !== confirmSenha) {
      Alert.alert('Erro', 'As senhas não coincidem', [
        { text: "OK" }
      ]);
    }else {
      await createUser(nome, dataNasc, telefone, email, cpf, senha, cidade, estado, pfp, description).then(() => {
        Alert.alert('Conta criada com sucesso', 'Sua conta foi criada, basta fazer o login', [
          { text: "OK", onPress: () => navigation.navigate('Login') }
          ],
          { cancelable: true });
      }).catch((err) => {
        console.log(err);
      });  
    }
  };

  const addPfP = () => {
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
    ImagePicker.showImagePicker(options, response => {
     if(!response.didCancel) {
      setPfp({
        uri: Platform.OS === "android" ? response.uri : response.uri.replace("file://", ""),
        name: response.fileName,
        type: response.type,
      });
     }
    });
  };

  console.log(pfp);

  return (
    <Container>
      <Form>

        <TouchableOpacity onPress={addPfP}>
          <Image source={pfp.uri ? { uri: pfp.uri} : addPfpIcon} 
            style={{width: 150, 
            height: 150, 
            borderRadius: 150}} r
            esizeMode="cover"
          />
        </TouchableOpacity>

        <Text style={{ color: 'white', marginBottom: 10 }}>Adicionar foto</Text>

        <Input
          icon="user"
          iconColor="#fff"
          placeholder="Nome de Usuario *"
          placeholderTextColor="white"
          onChangeText={(text) => setNome(text)}
          value={nome}
        />
        <Input
          icon="envelope"
          iconColor="#fff"
          placeholder="E-mail *"
          placeholderTextColor="white"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Input
          icon="lock"
          iconColor="#fff"
          placeholder="Senha *"
          secureTextEntry={true}
          placeholderTextColor="white"
          onChangeText={(text) => setSenha(text)}
          value={senha}
        />
        <Input
          icon="lock"
          iconColor="#fff"
          placeholder="Confirmar Senha *"
          secureTextEntry={true}
          placeholderTextColor="white"
          onChangeText={(text) => setConfirmSenha(text)}
          value={confirmSenha}
        />
        <Input
          icon="address-card"
          iconColor="#fff"
          placeholder="CPF *"
          placeholderTextColor="white"
          onChangeText={(text) => setCpf(text)}
          value={cpf}
        />
        <Input
          icon="calendar"
          iconColor="#fff"
          placeholder="Data de Nascimento *"
          placeholderTextColor="white"
          onChangeText={(text) => setDataNasc(text)}
          value={dataNasc}
        />
        <Input
          icon="mobile"
          iconColor="#fff"
          placeholder="Telefone *"
          placeholderTextColor="white"
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
        />

        <Row>
          <Column>
            <Input
              icon="home"
              iconColor="#fff"
              placeholder="Cidade *"
              placeholderTextColor="white"
              onChangeText={(text) => setCidade(text)}
              value={cidade}
            />
          </Column>
          <Column fill=".6">
            <Input
              icon="building"
              iconColor="#fff"
              placeholder="Estado *"
              placeholderTextColor="white"
              autoCapitalize="characters"
              maxLength={2}
              onChangeText={(text) => setEstado(text)}
              value={estado}
            />
          </Column>
        </Row>

        <Input 
          icon="file"
          width={250} 
          multiline={true} 
          height={100}
          placeholder="Descrição"
          placeholderTextColor="white"
          onChangeText={(text) => setDescription(text)}
          value={description}
        />

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
