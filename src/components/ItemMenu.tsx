import React, {Dispatch, SetStateAction} from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ItemMenuPropsType = {
  title: string;
  image: ImageSourcePropType;
  id: string;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
};

export const ItemMenu = ({
  image,
  title,
  id,
  type,
  setType,
}: ItemMenuPropsType) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={'items-center justify-center space-y-2'}>
      <View
        className={`w-24 h-24 p-2 items-center justify-center  shadow-sm rounded-full ${
          type === title.toLowerCase() ? 'bg-gray-200' : ''
        }`}>
        <Image source={image} className="w-full h-full  object-contain" />
      </View>
      <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};
