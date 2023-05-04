import React from 'react';
import {Text, View} from 'react-native';
import {DetailProps} from '../types/typesNavi';

export const Details = ({route}: DetailProps) => {
  const {imageURL, title, location} = route.params.param;
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{title}</Text>
      <Text>{location}</Text>
      <Text>{imageURL}</Text>
    </View>
  );
};
