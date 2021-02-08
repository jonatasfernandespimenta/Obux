import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import darkTheme from '../styles/themes/dark';

import AuthRoutes from './auth';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import EditProfile from '../Screens/Profile/EditProfile';
import ChatList from '../Screens/ChatList';
import History from '../Screens/History';
import AddBook from '../Screens/AddBook';
import BookDetails from '../Screens/BookDetails';
import OtherProfile from '../Screens/OtherProfile';
import UpdateBook from '../Screens/UpdateBook';
import Chat from '../Screens/ChatList/Chat';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer theme={darkTheme.navigation}>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Auth" component={AuthRoutes} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="AddBook" component={AddBook} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
        <Stack.Screen name="OtherProfile" component={OtherProfile} />
        <Stack.Screen name="UpdateBook" component={UpdateBook} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
