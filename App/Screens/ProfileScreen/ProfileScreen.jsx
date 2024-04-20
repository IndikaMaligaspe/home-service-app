import { View, Text, FlatList, StyleSheet,Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import {useUser} from '@clerk/clerk-expo'

import  Colors from '../Utiles/Colors';

import Heading from '../../Components/Heading';

export default function ProfileScreen() {
  const profileMenu = [
    {
      id:1,
      name:"Home",
      icon:"home"
    },
    {
      id:2,
      name:"My Bookings",
      icon:"book"
    },
    {
      id:3,
      name:"Contact Us",
      icon:"mail"
    },
    {
      id:4,
      name:"Logout",
      icon:"logout"
    },
  ]

  const {user, isLoading} = useUser();
  return (
    <View>
      {/* Header */}
      <View style={styles.headingContainer}>
        <Heading text={'Profile'} textColor='WHITE'/>
        <View style={{borderRadius:99, gap:10}}>
          <Image 
            source={{uri:user.imageUrl}}
            style={{
                width:90, 
                height:90,
                borderRadius:99,
                alignSelf:"center",}}
            
          />
          <Text style={{
            alignSelf:"center",
            borderRadius:99,
            fontSize:19,
            fontFamily:"roboto-medium",
            color:Colors.WHITE,
          }}>{user.fullName}</Text>
           <Text style={{
            alignSelf:"center",
            borderRadius:99,
            fontSize:15,
            fontFamily:"roboto-medium",
            color:Colors.WHITE,
          }}>{user.primaryEmailAddress.emailAddress}</Text>
        </View>
      </View>
      {/* Menu */}
      <View style={styles.menuContainer}>
        <FlatList 
          data={profileMenu}
          renderItem={({item, index})=>(
            <View style={styles.menuItemContainer}>
              <AntDesign name={item?.icon} size={24} color={Colors.PRIMARY} />
              <Text style={{
                fontFamily:"roboto-medium",
                fontSize:16,
                color:Colors.BLACK
              }}>{item?.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingContainer:{
      backgroundColor:Colors.PRIMARY,
      padding:10,
      marginTop:10,

  },
  menuContainer:{
    marginTop:10,
    marginLeft:30,
    alignSelf:"flex-start"
  },
  menuItemContainer:{
    display:"flex",
    flexDirection:"row",
    padding:10,
    gap:10,
  },
})