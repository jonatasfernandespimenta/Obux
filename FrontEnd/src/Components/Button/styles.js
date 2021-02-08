import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ background }) => background || '#970000' };

  justify-content: center;
  align-items: center;
  margin: ${({ marginX, marginY }) => `${marginY || 0}px ${marginX || 0}px`};
  ${({ width }) => width && css`
    width: ${`${width}px`};
  `}
  ${({ height }) => height && css`
    height: ${`${height}px`};
  `}

  padding: 1px 0;

  border-radius: 10px;

`;

export const Text = styled.Text`
  color: ${({ textColor }) => textColor || 'white' };
  font-size: 18px;
`;
