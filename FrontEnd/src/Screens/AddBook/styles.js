import styled from 'styled-components/native';

export const Red = styled.View`
  background: #970000;
  height: 150px;
  width: 55%;
  border-radius: 10px;
  padding: 4px;
`;

export const Center = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const Text = styled.Text`
  color: white;
  font-size: 15px;
`;

export const Title = styled.Text`
  color: white;
  margin: 2px;
  font-size: 15px;
`;

export const BookPlus = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: gray;
  width: 30%;
  height: 180px;
  color: white;
`;

export const BookCover = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  margin: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputsContainer = styled.View`
  margin: 20px;
  align-self: center;
  background: #333;
  border-radius: 15px;
  width: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Hr = styled.View`
  background: white;
  width: 95%;
  height: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  }
})`
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
`;

export const CheckBox = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  border-style: solid;
  border-color: #2D2D2D;
  border-width: 1px;
  margin: 2px;
  border-radius: 3px;
  background: ${({enabled}) => (enabled ? '#2D2D2D' : 'transparent')};
`;
