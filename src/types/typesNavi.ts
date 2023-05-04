import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ItemCardPropsType} from '../components/ItemCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Discover: undefined;
  Details: {param: ItemCardPropsType};
};

export type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export type NavigationMainType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<NavigationMainType>(); // позволяет типизировать навигейшен в комп
