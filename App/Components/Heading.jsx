import { View,StyleSheet,  Text } from 'react-native'
import React from 'react'

export default function Heading({text, isViewAll}) {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>{text}</Text>
        {isViewAll&& <Text>View All</Text>}
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        marginTop:10,

    },
    heading: {
        fontSize:20,
        fontFamily:'roboto-medium',
        marginBottom:10
    },
})