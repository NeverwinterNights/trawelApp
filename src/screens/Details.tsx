import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DetailProps, useAppNavigation} from '../types/typesNavi';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Details = ({route}: DetailProps) => {
  const {data} = route.params;
  const navigation = useAppNavigation();
  console.log('address', data.address);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : 'https://cdn.pixabay.com/photo/2017/07/18/17/16/black-2516434_1280.jpg',
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <Icon.Button
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                width: 50,
                paddingRight: 0,
              }}
              onPress={() => navigation.goBack()}
              size={26}
              color={'black'}
              backgroundColor={'white'}
              name="arrow-left-thin"
            />
            <MaterialIcons.Button
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                width: 50,
                paddingRight: 0,
              }}
              onPress={() => {}}
              size={26}
              color={'white'}
              backgroundColor={'#06B2BE'}
              name="favorite"
            />
          </View>
          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-[12px] font-bold text-gray-100">
                {data?.price_level}
              </Text>
              <Text className="text-[32px] font-bold text-gray-100">
                {data?.price}
              </Text>
            </View>
            <View className="px-2 py-1 rounded-md items-center justify-center bg-teal-100">
              <Text>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={25} color={'#8C9EA6'} />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          {data?.rating && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-200 items-center justify-center shadow-md">
                <FontAwesome name="star" size={24} color={'#D58574'} />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.rating}</Text>
                <Text className="text-[#515151]">Ratings</Text>
              </View>
            </View>
          )}
          {data?.price_level && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-200 items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={24} color={'black'} />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.price_level}</Text>
                <Text className="text-[#515151]">Price Level</Text>
              </View>
            </View>
          )}
          {data?.bearing && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-200 items-center justify-center shadow-md">
                <FontAwesome5 name="map-signs" size={24} color={'black'} />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.bearing}</Text>
                <Text className="text-[#515151]">Bearing</Text>
              </View>
            </View>
          )}
        </View>
        <View>
          {data?.description && (
            <Text className="mt-4 tracking-wide text-[#97A6AF] font-semibold text-[16px]">
              {data?.description}
            </Text>
          )}
        </View>
        {data?.cuisine && (
          <View className="flex-row items-center justify-start flex-wrap gap-2 mt-4">
            {data?.cuisine.map(item => (
              <TouchableOpacity
                key={item.key}
                className="px-2 py-1 rounded-md bg-emerald-100">
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
          {data?.phone && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color={'#428299'} />
              <Text className="text-lg">{data?.phone}</Text>
            </View>
          )}
          {data?.email && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="envelope" size={24} color={'#428299'} />
              <Text className="text-lg">{data?.email}</Text>
            </View>
          )}
          {data?.address && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="map-pin" size={24} color={'#428299'} />
              <Text className="text-lg">{data?.address}</Text>
            </View>
          )}
        </View>
        <View className="mt-4 px-4 py-2 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
          <Text className=" text-3xl font-semibold uppercase text-gray-100 tracking-wide">
            Book Now
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
