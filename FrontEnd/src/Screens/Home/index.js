/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Menu from '../../Components/Menu';

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

  useEffect(() => {
    async function loadBooksList() {
      // const response = await api.get('nome-da-rota');
      // setData(response.data);

      setData([
        {
          id: 1,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61VxEKq8B1L._SX365_BO1,204,203,200_.jpg',
        },
        {
          id: 2,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61VxEKq8B1L._SX365_BO1,204,203,200_.jpg',
        },
        {
          id: 3,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/61VxEKq8B1L._SX365_BO1,204,203,200_.jpg',
        },
      ]);
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

  const renderBookItem = useCallback(
    ({item}) => {
      if (item.empty) {
        return <BookItem style={{backgroundColor: 'transparent'}} disabled />;
      }

      return (
        <BookItem onPress={() => handleNavigateToBookDetails(item.id)}>
          <BookImage
            source={{
              uri: item.image,
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
        <FeatherIcon name="search" color="#999" size={17} />

        <SearchInput placeholder="Procure por um livro" />
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
