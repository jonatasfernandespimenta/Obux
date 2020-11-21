import api from './index';
import mime from 'mime';

export const createUser = async(nome, dataNasc, telefone, email, cpf, senha, cidade, estado, pfp, description) => {
  const form = new FormData();

  let newImageUri = 'file:///' + pfp.uri.split('file:/').join('');

  form.append('nome', nome);
  form.append('dataNasc', dataNasc);
  form.append('telefone', telefone);
  form.append('email', email);
  form.append('cpf', cpf);
  form.append('senha', senha);
  form.append('cidade', cidade);
  form.append('estado', estado);
  form.append('pfp', {
    uri: newImageUri,
    type: mime.getType(newImageUri),
    name: newImageUri.split('/').pop()
  });
  form.append('descricao', description);
  
  return await api.post('/createuser', form);
};

export const login = async(email, senha) => {
  return await api.post('/login', { email, senha });
};

export const getuser = async(id) => {
  return await api.get('/getuser/' + id);
};
