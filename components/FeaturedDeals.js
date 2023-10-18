import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import DealsCards from './DealsCards'
import {ChevronDoubleRightIcon} from 'react-native-heroicons/outline'


const FeaturedDeals = ({id,title,description}) => {
  return (
    <View className="px-2">
      <View className="flex-row mt-4 items-center justify-between ">
        <Text className="font-bold text-lg pl-4">{title}</Text>
        <ChevronDoubleRightIcon size={20} opacity={0.6} color="teal" />
      </View>
      <Text className="text-xs text-gray-400 pl-4">{description}</Text>

      <ScrollView horizontal
      className="pt-4"
      contentContainerStyle={{paddingHorizontal:15,}}
      showsHorizontalScrollIndicator={false}>
          <DealsCards id={1}
          imageUrl='https://links.papareact.com/gn7' title='requiterBest' rating={5} genre='Box' adress='Varna' short_description='for better interviews' dishes='yes' long='4' lat='5'
          />
           <DealsCards id={1}
          imageUrl='https://links.papareact.com/gn7' title='requiterBest' rating={5} genre='Box' adress='Varna' short_description='for better interviews' dishes='yes' long='4' lat='5'
          />
           <DealsCards id={1}
          imageUrl='https://links.papareact.com/gn7' title='requiterBest' rating={5} genre='Box' adress='Varna' short_description='for better interviews' dishes='yes' long='4' lat='5'
          />
      </ScrollView>
    </View>
  )
}

export default FeaturedDeals