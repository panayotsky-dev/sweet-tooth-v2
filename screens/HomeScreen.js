import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {  Text, View } from 'react-native';

function HomeScreen() {
  return (   
    <View className="flex items-center justify-center bg-black" >
      <Text  className="text-red-500 flex justify-center">Open up App.js to start working on your app!</Text>
      <Text className="text-green-400">TEST</Text>
      <StatusBar style="auto" />
    </View>
   
  )
}

export default HomeScreen