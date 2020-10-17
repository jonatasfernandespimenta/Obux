import api from '../index';

export const createUser = async (nome, dataNasc, email, telefone, cpf, senha, cidade, estado, pfp) => {
    const form = new FormData;

    form.append('nome', nome);
    form.append('nome', nome);
    form.append('email', email);
    form.append('telefone', telefone);
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
