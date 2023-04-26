import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useAppNavigation} from '../types/typesNavi';

type DiscoverPropsType = {};

export const Discover = ({}: DiscoverPropsType) => {
  const navigation = useAppNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/*  Header*/}
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[38px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[34px] ">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-100 rounded-md items-center justify-center">
          <Image
            source={require('../../assets/avatar.png')}
            className="w-full h-full rounded-md object-cover shadow-lg"
          />
        </View>
      </View>
      {/*  Search*/}

    </SafeAreaView>
  );
};
