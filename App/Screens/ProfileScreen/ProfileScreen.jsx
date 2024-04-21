import { View, Text, FlatList, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import {useUser} from '@clerk/clerk-expo'
import {useRoute, useNavigation} from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { ClerkProvider, SignedIn, SignedOut,useAuth } from "@clerk/clerk-expo";


import  Colors from '../Utiles/Colors';

import Heading from '../../Components/Heading';

export default function ProfileScreen() {
  const profileMenu = [
    {
      id:1,
      name:"Home",
      icon:"home",
      navigation:"home"
    },
    {
      id:2,
      name:"My Bookings",
      icon:"book",
      navigation:"booking"
    },
    {
      id:3,
      name:"Contact Us",
      icon:"mail",
      navigation:"home"
    },
    {
      id:4,
      name:"Logout",
      icon:"logout",
      navigation:"logout"
    },
  ]

  const {user, isLoading} = useUser();
  const navigation=useNavigation();
  const { isLoaded,signOut } = useAuth();
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
            <TouchableOpacity onPress={()=>{
              if(item.id == 3){
               Linking.openURL(encodeURI(`mailto:${user.primaryEmailAddress.emailAddress}?subject=I am looking for a service&body=Hi There,`))
               .then(resp=>console.log(resp))
               .catch(err=>console.log(err))
              } else if(item.id == 4){
                signOut();
              }else {
                navigation.navigate(item.navigation)
              }}
              } style={styles.menuItemContainer}>
              <AntDesign name={item?.icon} size={24} color={Colors.PRIMARY} />
              <Text style={{
                fontFamily:"roboto-medium",
                fontSize:16,
                color:Colors.BLACK
              }}>{item?.name}</Text>
            </TouchableOpacity>
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