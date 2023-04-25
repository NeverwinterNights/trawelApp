import React, {useEffect} from 'react';
import {MainNavigator} from './src/navigations/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
