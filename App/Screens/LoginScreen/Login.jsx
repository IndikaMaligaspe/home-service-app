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
            <View>
                <Image source={require('./../../../assets/logo.png')} 
                    style={styles.loginImage}
                />
            </View>
            <View style={styles.subContainer}>
                <Text style={{fontSize:27, fontFamily:'roboto-medium', color:Colors.WHITE, textAlign:'center'}}>
                    Let's Find Proffessional Cleaning and Repair Service
                </Text>
                {/* <Text style={{fontSize:15, fontFamily:'roboto', color:Colors.WHITE, textAlign:'center', marginTop:20}}>
                    Best place to find all your proffessionals.
                </Text> */}
                <TouchableOpacity style={styles.button}
                    onPress={onPress}>
                    <Text style={{textAlign:'center',fontFamily:'roboto',  color:Colors.PRIMARY}}>Let's Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginImage: {
        width: "100%",
        height: 450,
        marginTop:10,
        borderWidth:4,
        borderColor: Colors.BLACK,
        alignItems:'center',
        borderRadius:15
    },
    subContainer: {
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        height:'100%',
        marginTop:-10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:10
    },
    button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:40,
    }
})