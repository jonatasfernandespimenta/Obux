import styled from 'styled-components/native';

import bg from '../../assets/bg.jpg';

export const Container = styled.ImageBackground.attrs({
  source: bg,
  blurRadius: 1.5
})`
  flex: 1;
`;

export const Form = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;
