import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Discover: undefined;
};

export type NavigationMainType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<NavigationMainType>(); // позволяет типизировать навигейшен в комп
