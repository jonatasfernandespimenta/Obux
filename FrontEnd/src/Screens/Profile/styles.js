import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: center;
  margin-top: -185px;
  margin-right: -350px;
`;

export const H1 = styled.Text`
  font-size: 25px;
  color: white;
`;

export const Row = styled.View`
  flex-direction: row;
  margin: 5px;
`;

export const H2 = styled.Text`
  font-size: 15px;
  color: white;
`;

export const H3 = styled.Text`
  font-size: 12px;
  color: white;
`;

export const BookContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px;
  padding: 10px;
`;

export const Book = styled.View`
  background: red;
  margin: 10px;
  width: 100px;
  height: 180px;
`;

export const Text = styled.Text`
  border-bottom-width: 1px;
  border-bottom-color: white;
  color: white;
  font-size: 15px;
  width: 40%;
  margin-left: 20px;
`;

export const InfoContainer = styled.View`
  padding: 50px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Pfp = styled.TouchableOpacity`
  margin-top: 100px;
  height: 160px;
  width: 160px;
  border-radius: 100px;
  background-color: white;
  margin-bottom: 15px;
`;

export const ImagePreview = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 160px;
  width: 160px;
  border-radius: 100px;
`;

export const BgImg = styled.ImageBackground`
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  }
})`
  width: 100%;
`;
