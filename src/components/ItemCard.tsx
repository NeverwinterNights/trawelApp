import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useAppNavigation} from '../types/typesNavi';
import {RootObjectChild} from '../types/dataTypes';

export type ItemCardPropsType = {
  imageURL: string;
  title: string;
  location: string;
  data: RootObjectChild;
};

export const ItemCard = ({
  imageURL,
  title,
  location,
  data,
}: ItemCardPropsType) => {
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {data})}
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 w-[182px] shadow-md bg-white my-2">
      <Image
        source={{uri: imageURL}}
        className="w-full h-40 rounded-md object-cover"
      />
      <Text className=" text-[18px] text-[#428299] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
      </Text>
      <View className="flex-row items-center space-x-1">
        <Fontisto name="map-marker-alt" color={'#8597A2'} size={20} />
        <Text className=" text-[14px] text-[#428288] font-bold">
          {location?.length > 18 ? `${location.slice(0, 18)}...` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
