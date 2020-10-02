import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import darkTheme from '../styles/themes/dark';

import AuthRoutes from './auth';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer theme={darkTheme.navigation}>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Auth" component={AuthRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;