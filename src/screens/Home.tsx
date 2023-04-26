import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useAppNavigation} from '../types/typesNavi';

type HomePropsType = {};

export const Home = ({}: HomePropsType) => {
  const navigation = useAppNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      {/*  Header*/}
      <View className="flex-row mt-8 px-4 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] font-semibold text-3xl">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] font-semibold text-3xl">Travel</Text>
      </View>
      {/*  Second*/}
      <View className="mt-8 px-4 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          dignissimos eligendi eum facere
        </Text>
      </View>
      {/*  Circles*/}
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-[90px] -right-36" />
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36" />
      {/*  Image*/}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation={'fadeIn'}
          easing={'ease-in-out'}
          source={require('../../assets/hero.png')}
          className="w-full h-full"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Discover')}
          className="absolute bottom-20 w-24 h-24 border-[#00BCC9] border-t-4 border-r-4 border-l-2 rounded-full items-center justify-center">
          <Animatable.View
            iterationCount={'infinite'}
            animation={'pulse'}
            easing={'ease-in-out'}
            className=" items-center justify-center w-20 h-20 rounded-full bg-[#00BCC9]">
            <Text className="text-gray-50 text-[40px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
