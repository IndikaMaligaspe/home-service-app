import { View, StyleSheet, FlatList, Image, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utiles/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../Utiles/Colors';



export default function Categories() {
    const [categories, setCategories] = useState([]);

    /**
     *  Get Categories List from graphQL
     */
    const getCategories=()=>{
      GlobalApi.getCategories().then(resp=>{
          setCategories(resp?.categories);
      })
    }  

    useEffect(()=>{
        getCategories();
      },[]);

      
    return (
    <View>
      <Heading 
       text = 'Categories' isViewAll={true}/>
       <FlatList 
          data={categories}
          numColumns={4}
          renderItem={({item, index}) => index<=3 &&(
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image  source={{uri:item?.icon?.url}} 
                            style={styles.categoryImage}/>
                </View>
                <Text style={{fontFamily:'roboto-medium', marginTop:5}}>
                    {item?.name}
                </Text>
            </View>    
     
    )} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    categoryImage:{
        width:30,
        height:30,
        borderRadius:20,
        objectFit:'contain',
    },
    iconContainer:{
        backgroundColor:Colors.LIGHT_GREY,
        padding:17,
        borderRadius:99,
    }
})