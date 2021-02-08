import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: red;
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

export const InputContainer = styled.View`
  margin-bottom: 15%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Column = styled.View`
  flex: ${({ fill }) => fill || '1'};
`;

export const IconContainer = styled.TouchableOpacity`
  border-radius: 100px;
  height: 45px;
  width: 45px;
  background: #970000;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
