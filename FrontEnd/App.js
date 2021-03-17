import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/Routes'
import { InfoContextProvider } from './src/Contexts/info.context';

import { MenuProvider } from 'react-native-popup-menu';

console.disableYellowBox = true;

export default function App() {
  return (
    <>
      <StatusBar hidden />
        <InfoContextProvider>
          <MenuProvider>
            <Routes />
          </MenuProvider>
      </InfoContextProvider>
    </>
  );
}
