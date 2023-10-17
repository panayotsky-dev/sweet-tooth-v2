import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:20,
        paddingTop:10,
    }}
     horizontal 
     showsHorizontalScrollIndicator={false}>
      
      <CategoriesCard imageUrl='https://firebasestorage.googleapis.com/v0/b/sweet-tooth-panayotsky.appspot.com/o/Images%2F1681860704565-Coffee-Cup-mockup-by-TUHOMUHOzzzsas.png?alt=media&token=0e96aa32-28cd-4970-bb83-221c52fc86a3' title="testing1" />
      <CategoriesCard imageUrl='https://firebasestorage.googleapis.com/v0/b/sweet-tooth-panayotsky.appspot.com/o/Images%2F1681860704565-Coffee-Cup-mockup-by-TUHOMUHOzzzsas.png?alt=media&token=0e96aa32-28cd-4970-bb83-221c52fc86a3' title="testing2" />
      <CategoriesCard imageUrl='https://firebasestorage.googleapis.com/v0/b/sweet-tooth-panayotsky.appspot.com/o/Images%2F1681860704565-Coffee-Cup-mockup-by-TUHOMUHOzzzsas.png?alt=media&token=0e96aa32-28cd-4970-bb83-221c52fc86a3' title="testing3" />
      <CategoriesCard imageUrl='https://firebasestorage.googleapis.com/v0/b/sweet-tooth-panayotsky.appspot.com/o/Images%2F1681860704565-Coffee-Cup-mockup-by-TUHOMUHOzzzsas.png?alt=media&token=0e96aa32-28cd-4970-bb83-221c52fc86a3' title="testing4" />
      <CategoriesCard imageUrl='https://firebasestorage.googleapis.com/v0/b/sweet-tooth-panayotsky.appspot.com/o/Images%2F1681860704565-Coffee-Cup-mockup-by-TUHOMUHOzzzsas.png?alt=media&token=0e96aa32-28cd-4970-bb83-221c52fc86a3' title="testing5" />
    </ScrollView>
  )
}

export default Categories