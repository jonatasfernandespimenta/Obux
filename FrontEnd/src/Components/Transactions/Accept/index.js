import React, { useState } from 'react';

import { SentContainer, H2, CheckProposal, Title, Proposal } from '../styles';
import Button from '../../Button';

const Accept = ({ set, handleInfo }) => {
  const handleButtonPress = () => {
    handleInfo();
    set(true)
  }

  return(
    <>
      <SentContainer>
        <H2>Você recebeu uma proposta</H2>
        <Button marginY={10} width={120} background={'#007019'} height={40} onPress={handleButtonPress}>Ver</Button>
      </SentContainer>
    </>
  );
}

export default Accept;
