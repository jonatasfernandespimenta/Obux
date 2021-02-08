import React from 'react';

import {
  Container,
  Text
} from './styles';

const Button = ({ children, height, background, color }) => (
  <Container height={height} background={background}>
    {children && <Text color={color}>{children}</Text>}
  </Container>
);

export default Button;
