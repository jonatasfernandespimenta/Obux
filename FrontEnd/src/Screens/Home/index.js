/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Menu from '../../Components/Menu';

import { getBooks, getBookByName } from '../../services/api/userService';

import {
  Container,
  SearchField,
  SearchInput,
  BooksListContainer,
  BookItem,
  BookImage,
} from './styles';

const NUM_COLUMNS = 2;

const Home = () => {
  
  const navigation = useNavigation();
  
  const [data, setData] = useState([]);
  const [bookName, setBookName] = useState('');
  
  useEffect(() => {
    async function loadBooksList() {
      const response = await getBooks();
      setData([...response.data]);
    }
    
    loadBooksList();
  }, []);
  
  const formatBookData = useCallback((dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    
    let totalLastRow = dataList.length - totalRows * numColumns;
    
    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({empty: true});
      totalLastRow++;
    }
    
    return dataList;
  }, []);
  
  const handleNavigateToBookDetails = useCallback(
    (bookId) => {
      navigation.navigate('BookDetails', {
        bookId,
      });
    },
    [navigation],
    );

    const handleGetBook = async (bookName) => {
      const response = await getBookByName(bookName)
      console.log('RESPONSE: ', response.data)
      setData([...response.data]);
    }
    
    const renderBookItem = useCallback(
      ({item}) => {
        if (item.empty) {
          return <BookItem style={{backgroundColor: 'transparent'}} disabled />;
        }
        
        return (
          <BookItem onPress={() => handleNavigateToBookDetails(item.id)}>
          <BookImage
            source={{
              uri: item.foto.includes('http://192.168.100.68:3000/files/') ? 
              item.foto : 'http://192.168.100.68:3000/files/' + item.foto,
              isStatic: true
            }}
            />
        </BookItem>
      );
    },
    [handleNavigateToBookDetails],
  );

  return (
    <>
    <Container>
      <SearchField>
        <FeatherIcon name="search" color="#999" size={17} onPress={() => {handleGetBook(bookName)}} />

        <SearchInput placeholder="Procure por um livro" onSubmitEditing={() => {handleGetBook(bookName)}}
        onChangeText={(text) => setBookName(text)} value={bookName} />
      </SearchField>

      <BooksListContainer
        data={formatBookData(data, NUM_COLUMNS)}
        keyExtractor={(item) => item.id}
        renderItem={renderBookItem}
        numColumns={NUM_COLUMNS}
      />
    </Container>
    <Menu/>
    </>
  );
};

export default Home;
