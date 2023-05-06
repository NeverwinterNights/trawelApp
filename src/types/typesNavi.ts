import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootObjectChild} from './dataTypes';

export type RootStackParamList = {
  Home: undefined;
  Discover: undefined;
  Details: {data: RootObjectChild};
};

export type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export type NavigationMainType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<NavigationMainType>(); // позволяет типизировать навигейшен в комп
