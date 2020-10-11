import React, {useRef} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  IconContainer,
  Input,
  Touchable,
} from './styles';

export default function InputComponent({ icon, iconColor, ...rest }) {
   const inputRef = useRef(null);
   return (
    <Touchable onPress={() => inputRef.current.focus()}>
        <Container>
            {icon && (
                <IconContainer>
                    <Icon name={icon} color={iconColor || '#fff'} size={16}/>
                </IconContainer>
            )}
            <Input {...rest} ref={inputRef} />
        </Container>
    </Touchable>
   );
}
