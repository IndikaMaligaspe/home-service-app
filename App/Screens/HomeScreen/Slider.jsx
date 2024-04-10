import { View, Text, StyleSheet, FlatList,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utiles/GlobalApi'

export default function Slider() {

  const [slider, setSlider] = useState([]);

  const getSliders=()=>{
    GlobalApi.getSlider().then(resp=>{
        console.log(resp?.sliders)
        setSlider(resp?.sliders);
    })
  }  

  useEffect(()=>{
    getSliders();
  },[]);

  return (
    <View>
      <Text style={styles.heading}>Offers For You</Text>
      <FlatList 
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) =>(
            <View style={{marginRight:20}}>
                <Image source={{uri:item?.image?.url}} style={styles.sliderImage}/>
            </View>
            )}   
      />
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize:20,
        fontFamily:'roboto-medium',
        marginBottom:10
    },
    sliderImage:{
        width:200,
        height:150,
        borderRadius:20,
        objectFit:'contain',
    }
})