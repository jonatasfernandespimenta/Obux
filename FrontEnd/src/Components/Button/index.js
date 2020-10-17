import React from 'react';

import {
  Container,
  Text,
} from './styles';

const Button = ({ color, textColor, width, height, marginX, marginY, children, onPress, background }) => (
  <Container color={color} background={background} width={width} height={height} marginX={marginX} marginY={marginY} onPress={onPress} >
    {children && <Text>{children}</Text>}
  </Container>
);

export default Button;
