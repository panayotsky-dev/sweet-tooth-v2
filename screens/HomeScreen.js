import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';

import React, { useLayoutEffect } from 'react'
import {  Image, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserIcon,ChevronDownIcon,AdjustmentsHorizontalIcon,AdjustmentsVerticalIcon,MagnifyingGlassIcon} from 'react-native-heroicons/outline'



function HomeScreen() {
    const navigation = useNavigation();


    //Soon as screen mounts do something
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false,
      })
    
    }, [])
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 pt-1 items-center mx-4 space-x-2 ">
        <Image
          source={require("../assets/logo.png")}
          className="w-7 h-7  p-4  rounded-full "
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Delivery is available!
          </Text>
          <Text className="font-bold text-lg ">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={25} color="#00CCBB" />
      </View>
      {/* SearchBar */}
      <View className="flex-row space-x-2 items-center pb-2 mx-4  ">
        <View className="flex-row space-x-2 items-center bg-gray-100 p-3 rounded-full flex-1">
          <MagnifyingGlassIcon  size={20} color="#00CCBB"/>
        
             <TextInput placeholder='Search your perfect coffee' keyboardType='default' />
            
        </View>
        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen