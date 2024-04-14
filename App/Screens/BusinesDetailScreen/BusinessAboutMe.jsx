import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Heading from '../../Components/Heading'
import Colors from '../Utiles/Colors';

export default function BusinessAboutMe({business}) {
    const [numberOfLInes, setNumberofLines] = useState(true);
    return (
        <View>
            <Heading text="About Me" />
            <Text style={{
                fontFamily:'roboto-thin',
                fontSize:13,
                lineHeight:28,
                color:Colors.GREY,
                
            }} 
            numberOfLines={numberOfLInes?3:false}>
                {business.about}
            </Text>
            <TouchableOpacity onPress={()=>{
                setNumberofLines(!numberOfLInes)
            }}>
                <Text style={{
                    fontFamily:'roboto-thin',
                    fontSize:13,
                    color:Colors.PRIMARY
                }}>
                    {numberOfLInes?` More >>>`:`<<< Less`}
                </Text>
            </TouchableOpacity>
        </View>
    )
}