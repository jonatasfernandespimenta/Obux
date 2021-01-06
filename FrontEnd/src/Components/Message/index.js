import React from 'react';

import { Author, Container, Text, Message } from './styles';

export default function Messages({ author, message, received, children }) {
  return (
    <Container received={received}>
      <Author received={received}>
        <Text size="10" color="gray">{author}</Text>
      </Author>
      <Message received={received}>
        {children && children}
        <Text>{message}</Text>
      </Message>
    </Container>
  );
}
