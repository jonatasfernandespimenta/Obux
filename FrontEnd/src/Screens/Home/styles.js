import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SearchField = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  padding: 0 15px;
  margin: 30px;
  margin-bottom: 0;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  margin-left: 10px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.5px;
`;

export const BooksListContainer = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 15,
  },
})``;

export const BookItem = styled.TouchableOpacity`
  height: 260px;
  flex: 1;
  border-radius: 4px;
  overflow: hidden;
  margin: 15px;
`;

export const BookImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 100%;
  width: 100%;
`;
