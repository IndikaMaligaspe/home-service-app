import { View, Image, StyleSheet, Text, TextInput } from 'react-native'
import React from 'react'
import {useUser} from '@clerk/clerk-expo'
import Colors from '../Utiles/Colors';

import { AntDesign } from '@expo/vector-icons';

export default function Header() {
    const {user, isLoading} = useUser();
    return user&& (
        <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{uri:user?.imageUrl}}
                        style={styles.userImage}
                    />
                    <View>
                        <Text style={{color:Colors.WHITE, fontFamily:'roboto-medium'}}>Welcome,</Text>
                        <Text style={{color:Colors.WHITE, fontSize:14, fontFamily:'roboto-bold'}}>{user?.fullName}</Text>
                    </View>
                </View>
                <AntDesign name="book" size={24} color={Colors.WHITE} />
             </View> 
             {/* Searh Bar */}
             <View style={styles.searchBarContainer}>
                <TextInput 
                    placeholder='Search'
                    style={styles.textInput}
                />
                <View style={styles.searchButtonContainer} >
                    <AntDesign name="search1"  style={styles.searchButton}/>
                </View>
             </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        fontFamily:'roboto',
    },  
    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    searchBarContainer:{
        marginTop:15,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap:10,
    },
    searchButtonContainer:{
        backgroundColor:Colors.WHITE,
        borderRadius:8,
    },
    searchButton:{
        color:Colors.PRIMARY,
        fontSize:16,
        padding:7,
    },
    textInput:{
        backgroundColor:Colors.WHITE,
        fontSize:16,
        width:'85%',
        height:30,
        borderRadius:8,
        padding:7,
        paddingHorizontal:16,
    },
    userImage:{
        width:45,
        height:45, 
        borderRadius:99,
    }

})