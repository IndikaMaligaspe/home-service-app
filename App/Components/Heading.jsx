import { View,StyleSheet,  Text } from 'react-native'
import React from 'react'
import Colors from '../Screens/Utiles/Colors'

export default function Heading({text, isViewAll, textColor}) {
  return (
    <View style={styles.container}>
        <Text style={[textColor=='WHITE'?
          styles.headingWhite:
          styles.heading]}>{text}</Text>
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
    headingWhite:{
      fontSize:20,
      fontFamily:'roboto-medium',
      marginBottom:10,
      color:Colors.WHITE
    }
})