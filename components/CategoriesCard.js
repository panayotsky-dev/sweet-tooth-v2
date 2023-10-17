import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoriesCard = ({imageUrl,title}) => {
  return (

    //touchable button in react-native is touchableOpacity
    <TouchableOpacity className="relative mr-2 ">
        <Image className="w-20 h-20 rounded-xl bg-white"
         source={{
            uri:imageUrl
        }} />
      <Text className="absolute bottom-1 left-1 text-black font-bold ">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard