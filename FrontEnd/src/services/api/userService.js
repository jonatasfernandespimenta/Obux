import api from './index';

export const createUser = async (nome, dataNasc, telefone, email, cpf, senha, cidade, estado, pfp) => {
      const form = new FormData;
      
      form.append('nome', nome);
      form.append('dataNasc', dataNasc);
      form.append('telefone', telefone);
      form.append('email', email);
      form.append('cpf', cpf);
      form.append('senha', senha);
      form.append('cidade', cidade);
      form.append('estado', estado);
      form.append('pfp', pfp);
      return await api.post('/createuser', form);
};

export const login = async (email, senha) => {
  return await api.post('/login', { email, senha });
};

export const getuser = async(id) => {
  return await api.get('/getuser/' + id);
};
