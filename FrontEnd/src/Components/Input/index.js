import React, {useRef} from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  IconContainer,
  Input,
  Touchable,
} from './styles';

export default function InputComponent({ icon, iconColor, date, setShow, ...rest }) {
   const inputRef = useRef(null);
   return (
    <Touchable onPress={date ? () => {setShow(true)} : () => inputRef.current.focus()}>
        <Container onPress={date ? () => {setShow(true)} : null}>
            {icon && (
                <IconContainer>
                    <Icon name={icon} color={iconColor || '#fff'} size={16}/>
                </IconContainer>
            )}
            {date ? <Text style={{color: 'white', marginTop: 8}}>Data de nascimento</Text> : <Input {...rest} ref={inputRef} />}
        </Container>
    </Touchable>
   );
}
