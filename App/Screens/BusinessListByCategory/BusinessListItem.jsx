import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utiles/Colors'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function BusinessListItem({item, booking}) {
    const navigation  = useNavigation();
    
  return (
    <TouchableOpacity style={styles.container}
        onPress={()=>{booking==null?navigation.push('bussines-details', {
            business:item
        }):null}}
    >
      <Image 
        source={{uri:item?.images[0].url}}
        style={styles.imageStyle}
      />
      <View style={styles.textContainer}>
        <Text style={{fontFamily:'roboto', color:Colors.GREY, fontSize:14}}>{item?.contactPerson}</Text>
        <Text style={{fontFamily:'roboto-medium', fontSize:17}}>{item?.name}</Text>
        { booking?.id != null?
        <View>
          <View style={{backgroundColor:Colors.PRIMARY_LIGHT, flex:1, display:"flex", alignSelf:"flex-start", borderRadius:5, padding:5}}>
           <Text style={{fontFamily:'roboto', color:Colors.PRIMARY, fontSize:16}}>
            {booking.bookingStatus}
           </Text>
          </View>  
           <View style={{display:"flex", flexDirection:"row", justifyContent:"center", marginTop:5}}>
              {/* <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY}/> */}
              <AntDesign name="calendar" size={18} color="black" style={{paddingRight:8}}/>
              <Text style={{fontFamily:'roboto', color:Colors.GREY, fontSize:16}}>
                {booking.serviceDate} {" "}
              </Text>
              <Text style={{fontFamily:'roboto', color:Colors.GREY, fontSize:16}}>
                at {booking.serviceTime}
              </Text>
           </View>
          </View> 
          :
          <Text style={{fontFamily:'roboto', color:Colors.GREY, fontSize:16}}>
          <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY}/>
              {item?.address}
          </Text>
        }
      </View>
    </TouchableOpacity>
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