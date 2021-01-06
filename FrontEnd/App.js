import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/Routes'
import { InfoContextProvider } from './src/Contexts/info.context';

console.disableYellowBox = true;

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <InfoContextProvider>
        <Routes />
      </InfoContextProvider>
    </>
  );
}
