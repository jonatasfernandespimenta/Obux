import styled from 'styled-components/native';

export const Touchable = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const Container = styled.TouchableOpacity`
  border: 1px;
  margin: 10px;
  border-radius: 10px;
  padding: 4px 8px;
  border-color: white;
  align-self: stretch;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Input = styled.TextInput`
  color: white;
`;