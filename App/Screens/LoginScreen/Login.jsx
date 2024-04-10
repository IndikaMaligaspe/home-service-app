import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import Colors from '../Utiles/Colors'

export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);

    return (

        <View>
            <Image source={require('./../../../assets/icon.png')} 
                style={styles.loginImage}
            />
        <View style={styles.subContainer}>
            <Text style={{fontSize:27, color:Colors.WHITE, textAlign:'center'}}>
                Let's Find Proffessional Cleaning and Repair Service
            </Text>
            <Text style={{fontSize:15, color:Colors.WHITE, textAlign:'center', marginTop:20}}>
                Best place to find all your proffessionals.
            </Text>
            <TouchableOpacity style={styles.button}
                onPress={onPress}>
                <Text style={{textAlign:'center', color:Colors.PRIMARY}}>Let's Get Started</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop:70,
        borderWidth:4,
        borderColor: Colors.BLACK,
        alignItems:'center',
        borderRadius:15
    },
    subContainer: {
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        height:'70%',
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20
    },
    button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:40,
    }
})