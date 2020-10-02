import styled from 'styled-components/native';

import bg from '../../assets/bg.jpg';

export const Container = styled.ImageBackground.attrs({
  source: bg,
  blurRadius: 1.5
})`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})`
  margin: 10px;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Column = styled.View`
  flex: ${({ fill }) => fill || '1'};
`;

export const Input = styled.TextInput`
  color: white;
  border: 1px;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  border-color: white;
  flex: 1;
  align-self: stretch;
`;

export const ImagePreview = styled.Image.attrs({
  resizeMode: 'cover',
})`
  border-radius: 48px;
  width: 48px;
  height: 48px;
`;