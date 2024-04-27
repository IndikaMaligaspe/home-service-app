import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import BussinesListByCategory from '../Screens/BusinessListByCategory/BusinessListByCategory';
import BusinessDetailsScreen from '../Screens/BusinesDetailScreen/BusinessDetailsScreen';
import BusinessList from '../Screens/BusinessList/BusinessList';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="bussines-list-search" component={BusinessList}/>
        <Stack.Screen name="bussines-list" component={BussinesListByCategory}/>
        <Stack.Screen name="bussines-details" component={BusinessDetailsScreen}/>

    </Stack.Navigator>
  )
}