import { View, Text , Image, TouchableOpacity, StyleSheet, ScrollView, Modal} from 'react-native'
import React , {useEffect, useState} from 'react'
import {useRoute, useNavigation} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utiles/Colors';
import Heading from '../../Components/Heading';
import BusinessAboutMe from './BusinessAboutMe';
import BusinessPhotos from './BusinessPhotos';
import BookingModal from './BookingModal';

export default function BusinessDetailsScreen() {
    const param = useRoute().params;
    const [business, setBusiness] = useState(null);
    const [numberOfLInes, setNumberofLines] = useState(true);
    const [showBookingModel, setShowBookingModel] = useState(false);
    const navigation=useNavigation();
    useEffect(()=>{
        setBusiness(param?.business)
    },[param])
    return business&&(
        <View style={{marginBottom:10}}>
            <ScrollView 
                style={{padding:10, paddingTop:30, height:'93%'}}
                
                >
                <TouchableOpacity 
                style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10, marginBottom:10}}
                onPress={()=>navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={15} color="black" />
                    <Text style={{fontFamily:'roboto-medium', fontSize:15}}>{business?.category?.name}</Text>
                </TouchableOpacity>
            <View> 
                    <Image source={{uri:business?.images[0]?.url}} 
                    style={{width:"100%", height:300}}/>
                </View> 
                <View style={styles.inforContainer}>
                <Text style={{fontFamily:'roboto-medium', fontSize:17}}>{business?.name}</Text>
                <View style={styles.subInfoContainer}>
                    <Text style={{fontFamily:'roboto-medium', fontSize:15, color:Colors.PRIMARY}}>{business?.contactPerson} 🌟</Text>
                    <View style={{backgroundColor:Colors.PRIMARY_LIGHT,
                                borderRadius:2, padding:2}}>
                        <Text style={{fontFamily:'roboto-thin', fontSize:13, 
                                color:Colors.PRIMARY}}>{business?.category?.name}</Text>
                    </View>            
                </View>
                
                <View style={styles.addressContainer}>
                    <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY}/>
                    <Text style={{fontFamily:'roboto-thin', fontSize:13}}>{business?.address}</Text>
                </View>
                </View>  
                {/* Horizontal Line */}
                    <View style={styles.horizontalLine} />
                {/* About Me section */}
                    <BusinessAboutMe business={business}/>
                {/* Horizontal Line */}
                    <View style={styles.horizontalLine} />
                {/* Photos */}
                    <BusinessPhotos business={business}/>
            </ScrollView>
            <View style={{
                    display:'flex', 
                    flexDirection:'row', 
                    margin:8, 
                    gap:8,
                    }}>
                <TouchableOpacity style={styles.messageButton}>
                    <Text style={{
                        color:Colors.PRIMARY, 
                        fontFamily:'roboto-medium', 
                        fontSize:15,
                        textAlign:'center'}}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.bookButton}
                    onPress={()=>{
                        setShowBookingModel(true)
                    }}>
                    <Text style={{
                        color:Colors.WHITE, 
                        fontFamily:'roboto-medium', 
                        fontSize:15,
                        textAlign:'center'}}>Book Now</Text>
                </TouchableOpacity>
            </View>
            <Modal 
                animationType='slide'
                visible={showBookingModel}
            >
                <BookingModal 
                    showModel = {setShowBookingModel}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    backBtnContainer:{
        position:'absolute',
        zIndex:15,
        padding:20,
    },
    inforContainer:{
        paddingTop:10,
        gap:5,
    },
    subInfoContainer:{
        display:'flex',
        flexDirection:'row',
        gap:7,
        alignItems:'center',
    },
    addressContainer:{
        display:'flex',
        flexDirection:'row',
        gap:2,
        alignItems:'center',
    },
    horizontalLine:{
        borderTopWidth:0.8, 
        borderColor:Colors.GREY, 
        marginTop:20, 
        marginBottom:20
    },
    messageButton:{
        backgroundColor:Colors.WHITE,
        borderColor:Colors.PRIMARY,
        borderWidth:1,
        borderRadius:99,
        textAlign:'center',
        padding:15,
        flex:1,
    },
    bookButton:{
        backgroundColor:Colors.PRIMARY,
        borderColor:Colors.WHITE,
        borderWidth:1,
        borderRadius:99,
        textAlign:'center',
        padding:15,
        flex:1,
    }
    
})