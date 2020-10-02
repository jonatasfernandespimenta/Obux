import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Components/Login';
import RegisterContainer from '../Containers/Auth/RegisterContainer';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={RegisterContainer}/>
    </Stack.Navigator>
  );
};

export default AuthRoutes;