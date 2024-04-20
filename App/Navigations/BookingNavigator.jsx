import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from '../Screens/Booking/BookingScreen';
import BusinessDetailsScreen from '../Screens/BusinesDetailScreen/BusinessDetailsScreen';

const Stack = createStackNavigator();

export default function BookingNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
>
    <Stack.Screen name="booking" component={BookingScreen}/>
    <Stack.Screen name="bussines-details" component={BusinessDetailsScreen}/>
</Stack.Navigator>
  )
}