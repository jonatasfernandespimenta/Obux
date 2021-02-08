import api from './index';
import mime from 'mime';

export const createUser = async(nome, dataNasc, telefone, email, cpf, senha, cidade, estado, description, file) => {
  const form = new FormData();

  form.append('file', {
    uri: file.uri,
    type: 'image/jpeg',
    name: file.name
  });

  const imageResponse = await api.post('/users/upload', form);
  console.log('data de bascuimento: ', dataNasc)

  const userResponse = await api.post('/users/create', {
    nome,
    dataNasc,
    telefone,
    email,
    cpf,
    senha,
    cidade,
    estado,
    description,
    file: imageResponse.data.filename
  });


  return userResponse;
  
};

export const updateUser = async(userId, nome, cidade, estado, description, file) => {
  const form = new FormData();

  form.append('file', {
    uri: file.uri,
    type: 'image/jpeg',
    name: file.name
  });

  const imageResponse = await api.post('/users/upload', form);
  console.log('USER ID AQUI: ', userId)
  const userResponse = await api.put('/users/update/' + userId, {
    nome,
    cidade,
    estado,
    description,
    file: imageResponse.data.filename
  })

  console.log('USER UPDATE RESPONSE: ', userResponse.data);
  return userResponse;
}

export const updateBook = async(bookId, titulo, editora, autor, ano, genero, qualidade, disponibilidade, sinopse, file) => {

  const form = new FormData();
  form.append('file', {
    uri: file.uri,
    type: 'image/jpeg',
    name: file.name
  });

  const imageResponse = await api.post('/users/upload', form);
  
  const bookResponse = await api.put('/books/update/' + bookId, { 
    titulo,
    editora,
    autor, 
    ano, 
    genero, 
    qualidade, 
    disponibilidade, 
    sinopse,
    foto: imageResponse.data.filename,
  });

  return bookResponse;
}

export const login = async(email, senha) => {
  const loginresponse = await api.post('/users/login', { email, senha });

  return loginresponse;
};

export const getuser = async(id) => {
  return await api.get('/users/' + id);
};

export const getBooks = async() => {
  return await api.get('/books');
};

export const getBook = async(id) => {
  return await api.get('/books/' + id);
};

export const getBookByName = async(titulo) => {
  const response = await api.post('/books/name/', { titulo });
  console.log(response)
  return response;
}

export const delBook = async(bookId) => {
  await api.delete('/books/delete/' + bookId);
}

export const addBook = async(titulo, editora, autor, ano, genero, qualidade, disponibilidade, sinopse, foto, userID) => {
  const form = new FormData();
  
  form.append('file', {
    uri: foto.uri,
    type: 'image/jpeg',
    name: foto.name
  });
  
  const imageResponse = await api.post('/users/upload', form);
  console.log(imageResponse)

  const bookResponse = await api.post('/books/create', { 
    titulo,
    editora,
    autor, 
    ano, 
    genero, 
    qualidade, 
    disponibilidade, 
    sinopse,
    foto: imageResponse.data.filename,
    user: {
      id: userID
    }
  });

  console.log(bookResponse.data)
  return bookResponse;
}
