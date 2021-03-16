import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';

import { createUser } from '../../services/api/userService';

import addPfpIcon from '../../assets/add_pfp.png';

import * as ImagePicker from 'expo-image-picker';

import { Container } from './styles';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

import DateTimePickerModal from "react-native-modal-datetime-picker";

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
  const [pfp, setPfp] = useState([]);
  const [description, setDescription] = useState('');

  const [showDate, setShowDate] = useState(false);
  
  const handleRegisterClick = async () => {
    if(senha !== confirmSenha) {
      Alert.alert('Erro', 'As senhas não coincidem', [
        { text: "OK" }
      ]);
    }else {
      await createUser(nome, dataNasc, telefone, email, cpf, senha, cidade, estado, description, pfp).then(() => {
        Alert.alert('Conta criada com sucesso', 'Sua conta foi criada, basta fazer o login', [
          { text: "OK", onPress: () => navigation.navigate('Login') }
          ],
          { cancelable: true });
      }).catch((err) => {
        console.log(err);
      });  
    }
  };

  const addPfP = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    setPfp({
      uri: result.uri,
      name: 'IMG_' + Math.random(4000),
      type: result.type,
    });

  };

  return (
    <Container>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <Form>

        <TouchableOpacity onPress={addPfP} style={{ marginTop: 30 }}>
          <Image source={pfp.uri ? { uri: pfp.uri} : addPfpIcon} 
            style={{width: 150, 
            height: 150, 
            borderRadius: 150}}
            resizeMode="cover"
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
          autoCapitalize='none'
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
          onChangeText={(text) => setDataNasc(text)}
          value={dataNasc}
          date={true}
          setShow={setShowDate}
        />

        <DateTimePickerModal
          isVisible={showDate}
          mode="date"
          onConfirm={(text) => setDataNasc(text)}
          onCancel={() => setShowDate(false)}
          isDarkModeEnabled={true}
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

      <Row style={{ marginTop: 30 }}>
        <Button
          marginX={15}
          color="blue"
          width={150}
          height={40}
          onPress={handleRegisterClick}>
          Registrar
        </Button>
        <Button
          marginX={15}
          color="blue"
          width={150}
          height={40}
          onPress={() => navigation.navigate('Login')}>
          Voltar
        </Button>
      </Row>
      </Form>
      </KeyboardAvoidingView>
    </Container>
  );
}
