import { View, Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../Utiles/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function BussinessListItem({item}) {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri:item?.images[0].url}}
        style={styles.imageStyle}
      />
      <View style={styles.textContainer}>
        <Text style={{fontFamily:'roboto', color:Colors.GREY, fontSize:15}}>{item?.contactPerson}</Text>
        <Text style={{fontFamily:'roboto-medium', fontSize:17}}>{item?.name}</Text>
        <Text style={{fontFamily:'roboto', color:Colors.GREY, fontSize:16}}>
        <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY}/>
            {item?.address}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imageStyle:{
        width:80,
        height:80, 
        borderRadius:5
    },
    container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap:15
    },
    textContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    }
})