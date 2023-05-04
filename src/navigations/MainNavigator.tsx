import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Discover} from '../screens/Discover';
import {Home} from '../screens/Home';
import {RootStackParamList} from '../types/typesNavi';
import {Details} from '../screens/Details';

export const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Discover'} component={Discover} />
      <Stack.Screen name={'Details'} component={Details} />
    </Stack.Navigator>
  );
};
