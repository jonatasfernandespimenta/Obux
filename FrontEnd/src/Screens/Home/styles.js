import styled from 'styled-components/native';

export const Book = styled.View`
  background: red;
  margin: 10px;
  width: 100px;
  height: 180px;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  }
})`
  width: 100%;
  margin-bottom: 50px;
`;
