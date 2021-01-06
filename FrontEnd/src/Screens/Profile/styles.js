import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.TouchableOpacity`
  height: 50px;
  width: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: 5px;
  z-index: 1;
`;

export const TrashContainer = styled.TouchableOpacity`
  height: 50px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: red;
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
  justify-content: center;
`;

export const Book = styled.TouchableOpacity`
  background: red;
  margin: 10px;
  width: 100px;
  height: 180px;
`;

export const BookCover = styled.Image`
  width: 100%;
  height: 180px;
`;

export const BookPlus = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: gray;
  margin: 10px;
  width: 100px;
  height: 180px;
  color: white;
`;

export const Text = styled.Text`
  border-bottom-width: 1px;
  border-bottom-color: white;
  color: white;
  font-size: 15px;
  width: 40%;
  margin-left: 25px;
`;

export const InfoContainer = styled.View`
  padding: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Pfp = styled.TouchableOpacity`
  margin-top: 100px;
  height: 160px;
  width: 160px;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 50px;
`;
