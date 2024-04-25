import { View, Text,ScrollView, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  const screens = [
    {
      id:1,
      name:"slider",
      item:<Slider />
    },
    {
      id:2,
      name:"categories",
      item:<Categories />
    },
    {
      id:3,
      name:"businessList",
      item:<BusinessList />
    },
  ]

  return (
    <SafeAreaView style={{flex:1}}>
      {/* Header */}
      <Header />
      {/* Slider */}
      <View style = {{padding:10, flex:1}}>
        <FlatList 
          data={screens}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) =>(
            <View>
              {item.item}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}