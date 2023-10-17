import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import DealsCards from './DealsCards'

const FeaturedDeals = ({id,title,description}) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px4">
        <Text className="font-bold text-lg">{title}</Text>
      </View>
      <Text className="text-xs text-gray-400">{description}</Text>

      <ScrollView horizontal
      className="pt-4"
      contentContainerStyle={{paddingHorizontal:15,}}
      showsHorizontalScrollIndicator={false}>
          <DealsCards />
      </ScrollView>
    </View>
  )
}

export default FeaturedDeals