import { View, Text, Image , StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../Utiles/Colors'

export default function BussinessListItem({item}) {
  return (
    <View style={styles.container}>
      <Image source={{uri:item?.images[0].url}} 
        style={styles.imageList}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontSize:17, fontFamily:'roboto-medium'}}>{item?.name}</Text>
        <Text style={{fontSize:13,fontFamily:'roboto',color:Colors.GREY}}>{item?.contactPerson}</Text>
        <Text style={{
            fontSize:10,
            fontFamily:'roboto',
            padding:3,
            color:Colors.PRIMARY,
            borderRadius:3,
            alignSelf:'flex-start',
            paddingHorizontal:7,
            backgroundColor:Colors.PRIMARY_LIGHT}}>{item?.category?.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imageList:{
        width:120,
        height:100,
        borderRadius:10
    },
    container:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10

    },
    infoContainer:{
        display:'flex',
        padding:7,
        gap:3,
    }
})