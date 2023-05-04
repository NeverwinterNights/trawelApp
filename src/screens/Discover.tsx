import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ItemMenu} from '../components/ItemMenu';
import Entypo from 'react-native-vector-icons/Entypo';
import {ItemCard} from '../components/ItemCard';

type DiscoverPropsType = {};

export const Discover = ({}: DiscoverPropsType) => {
  // const navigation = useAppNavigation();
  const [inputValue, setInputValue] = useState('');
  const [type, setType] = useState('restaurants');
  const [isLoading, setIsLoading] = useState(true);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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
      <View className="flex-row items-center mx-4 bg-gray-100 rounded-xl py-1 px-4 mt-4">
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          className="flex-1"
          placeholder={'Type city name'}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator
          size={'large'}
          color={'#0B646B'}
          className="flex-1 items-center justify-center"
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-row justify-between items-center mt-8 px-8">
            <ItemMenu
              id={'hotels'}
              title={'Hotels'}
              image={require('../../assets/hotel.png')}
              type={type}
              setType={setType}
            />
            <ItemMenu
              id={'attractions'}
              title="Attractions"
              image={require('../../assets/attraction.png')}
              type={type}
              setType={setType}
            />
            <ItemMenu
              id={'restaurants'}
              title="Restaurants"
              image={require('../../assets/restaurants.png')}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <Entypo name="arrow-long-right" color={'#A0C4C7'} size={24} />
              </TouchableOpacity>
            </View>
            <View className="px-4 mt-8 flex-row flex-wrap items-center justify-evenly">
              {mainData.length > 0 ? (
                <>
                  <ItemCard
                    title="Rio De Janeiro"
                    imageURL="https://media.istockphoto.com/id/1445004264/photo/charming-medieval-village-on-a-snowy-winters-day.jpg?s=1024x1024&w=is&k=20&c=4QXZUVSuhE9mZ00v6Q4cWghqXAn3PbOw3_5duDwWHgA="
                    location="Brazil"
                  />
                  <ItemCard
                    title="Night in the city"
                    imageURL="https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_1280.jpg"
                    location="Monaco"
                  />
                  <ItemCard
                    title="Night in the city"
                    imageURL="https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_1280.jpg"
                    location="Monaco"
                  />
                  <ItemCard
                    title="Night in the city"
                    imageURL="https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_1280.jpg"
                    location="Monaco"
                  />
                  <ItemCard
                    title="Night in the city"
                    imageURL="https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_1280.jpg"
                    location="Monaco"
                  />
                  <ItemCard
                    title="Night in the city"
                    imageURL="https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_1280.jpg"
                    location="Monaco"
                  />
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center justify-center space-y-8">
                    <Image
                      className="w-32 h-32 object-cover"
                      source={require('../../assets/NotFound.png')}
                    />
                    <Text className="text-2xl font-semibold text-[#428288]">
                      No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
