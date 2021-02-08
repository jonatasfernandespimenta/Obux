import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const InputBar = styled.View`
  flex-direction: row;
  border: solid 1px white;
  border-radius: 10px;
  width: 100%;
  margin: 4px 10px;
  align-self: flex-end;
  padding: 10px;
  color: white;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#ffffff80'
})`
  color: white;
  flex: 1;
  padding: 0px 10px;

`;

export const Icons = styled.View`
  flex: .2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
`;
