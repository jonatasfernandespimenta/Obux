import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login';
import Register from '../Screens/Register';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
  );
};

export default AuthRoutes;