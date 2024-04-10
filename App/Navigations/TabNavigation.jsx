import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import BookingScreen from '../Screens/Booking/BookingScreen'

import { AntDesign } from '@expo/vector-icons';
import Colors from '../Screens/Utiles/Colors';



const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarLabel:({color}) => (
                    <Text style={{
                        color:color,fontSize:12, marginTop:-7
                    }}>Home</Text>
                ),
                tabBarIcon:({color, size}) => (
                   <AntDesign name="home" size={size} color={color} />
                )
            }}
        />
        
        <Tab.Screen name="Book" component={BookingScreen} 
        options={{
            tabBarLabel:({color}) => (
                <Text style={{
                    color:color,fontSize:12, marginTop:-7
                }}>Book</Text>
            ),
            tabBarIcon:({color, size}) =>(
                <AntDesign name="book"  size={size} color={color} />
            )
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
            tabBarLabel:({color}) => (
                <Text style={{
                    color:color,fontSize:12, marginTop:-7
                }}>Profile</Text>
            ),
            tabBarIcon:({color, size}) => (
                <AntDesign name="user" size={size} color={color} />
            )
        }}/>
    </Tab.Navigator>
  )
}