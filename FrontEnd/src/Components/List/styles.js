import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 15px;
  color: white;
`;

export const Chat = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background: #333333;
  border-bottom-width: 1;
  border-color: #ffffff50;
`;

export const Rate = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  }
})`
  width: 100%;
  height: 100%;
`;

export const UserImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 70px;
  width: 70px;
  border-radius: 55px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

