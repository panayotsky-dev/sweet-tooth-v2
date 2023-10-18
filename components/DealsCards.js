import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import {MapPinIcon} from 'react-native-heroicons/solid'

const DealsCards = ({
    id,imageUrl,title,rating,genre,adress,short_description,dishes,long,lat,
}) => {
  return (
    <TouchableOpacity key={id} className="bg-white mr-3 shadow-sm">
        <Image source={{uri:imageUrl}} className="h-36 w-64 rounded-sm" />
        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="teal" opacity={0.5} size={22} />
                    <Text className="text-sm text-gray-500">
                        <Text className="text-black">{rating} . </Text>
                          {genre}
                    </Text>
                </View>
                <View className="flex-row space-x-1 items-center">
                        <MapPinIcon color="gray" opacity={0.4} size={22} />
                        <Text className="text-xs text-gray-500">Nearby | {adress}</Text>
                </View>
        </View>
      
    </TouchableOpacity>
  )
}

export default DealsCards