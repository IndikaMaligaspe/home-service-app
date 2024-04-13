import { View, Text , Image, TouchableOpacity, StyleSheet} from 'react-native'
import React , {useEffect, useState} from 'react'
import {useRoute, useNavigation} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function BusinessDetailsScreen() {
    const param = useRoute().params;
    const [business, setBusiness] = useState(null);
    const navigation=useNavigation();
    useEffect(()=>{
        setBusiness(param?.business)
    },[param])
    return business&&(
        <View>
            <TouchableOpacity style={styles.backBtnContainer}
                onPress={()=>navigation.goBack()}
            >
                <AntDesign name="back" size={30} color="black" />
            </TouchableOpacity>
           <View> 
                <Image source={{uri:business?.images[0]?.url}} 
                style={{width:"100%", height:300}}/>
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    backBtnContainer:{
        position:'absolute',
        zIndex:15,
        padding:20,
    }
})