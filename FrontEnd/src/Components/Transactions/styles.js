import styled from 'styled-components/native';

export const Container = styled.View`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: #00000090;
`;

export const CheckProposal = styled.View`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: #00000090;
`;

export const SentContainer = styled.View`
  width: 100%;
  height: 15%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #111111;
`;

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-bottom-width: 1px;
  border-color: white;
  color: white;
  margin: 10px;
`;

export const H2 = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: white;
  text-align: center;
`;

export const Proposal = styled.View`
  border-radius: 10px;
  width: 90%;
  height: 90%;
  background: #2b2b2b;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin: 15px;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
  margin-bottom: 10px;
`;

export const Selected = styled.View`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #fc030360;
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

export const Row = styled.View`
  flex-direction: row;
`;
