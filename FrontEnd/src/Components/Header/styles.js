import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({ background }) => background && css`
    background: ${`#${background || 'fa695f'}`};
  `}

  ${({ height }) => height && css`
    height: ${`${height}px`};
  `}
  justify-content: center;
`;

export const Text = styled.Text`
  align-self: center;

  color: ${({ color }) => color };

  font-size: 20px;
`;
