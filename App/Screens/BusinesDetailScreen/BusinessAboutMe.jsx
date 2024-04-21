import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Heading from '../../Components/Heading'
import Colors from '../Utiles/Colors';

export default function BusinessAboutMe({business}) {
    const [numberOfLInes, setNumberofLines] = useState(3);
    return (
        <View>
            <Heading text="About Me" />
            <Text style={{
                fontFamily:'roboto',
                fontSize:13,
                lineHeight:28,
                color:Colors.GREY,
                
            }} 
            numberOfLines={numberOfLInes}>
                {business.about}
            </Text>
            <TouchableOpacity onPress={()=>{
                setNumberofLines(numberOfLInes==3?100:3)
            }}>
                <Text style={{
                    fontFamily:'roboto',
                    fontSize:13,
                    color:Colors.PRIMARY
                }}>
                    {numberOfLInes == 3?` More >>>`:`<<< Less`}
                </Text>
            </TouchableOpacity>
        </View>
    )
}