import { View, Text, StyleSheet, TouchableOpacity, 
  FlatList, ScrollView, KeyboardAvoidingView, TextInput,  ToastAndroid,Platform } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import Heading from '../../Components/Heading';
import Colors from '../Utiles/Colors';
import Toast from 'react-native-root-toast';

import {useUser} from '@clerk/clerk-expo'
import moment from 'moment';
import GlobalApi from '../Utiles/GlobalApi';


export default function BookingModal({showModel, bussinesId}) {
  const navigation=useNavigation();
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState();
  const [selectedTimes, setSelectedTimes] = useState(null);
  const [specialNotes, setSpecialNotes] = useState('');

  const {user} = useUser();


  const initTimeSlots=()=>{
    const timeSlots = [];
    for(let i=8; i<=12; i++){
      timeSlots.push({'time':`${i} :00 AM`});
      timeSlots.push({'time':`${i} :30 AM`});
    }

    for(let i=1; i<=7; i++){
      timeSlots.push({'time':`${i} :00 PM`});
      timeSlots.push({'time':`${i} :30 PM`});
    }
    setTimeSlots(timeSlots);
  }

  useEffect(()=>{
    initTimeSlots();
  },[])

  const createBooking=()=>{
    console.log('selectedStartDate',selectedStartDate, 'selectedTimes',selectedTimes);
    if(selectedStartDate == null || selectedTimes == null){
      console.log("INSIDE ERROR.......")
      Toast.show("Please select service date and time", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      // showMessage("Please select service date and time",false);
      return;
    }

    let data = {
      bussinesId:bussinesId,
      date:moment(selectedStartDate).format("yyyy-MM-DD"),
      time:selectedTimes,
      notes:specialNotes,
      email:user?.primaryEmailAddress.emailAddress,
      userName:user?.fullName,
    }

    GlobalApi.createBooking(data)
      .then(resp=>{
        // showMessage(`Bookings Created Succesfully. Your booking number is : ${resp.id}`,true);
        Toast.show(`Bookings Created Succesfully. Your booking number is : ${resp}`, {
          duration: Toast.durations.LONG,
          onHide: () => {
            showModel(false);
        },
        });        
      }).catch(err=>{
        Toast.show(`Error while creating booking : ${resp}`, {
          duration: Toast.durations.LONG
        });
      })
  }

  const showMessage = (message, isLong) =>{

    // if(Platform.OS != 'android'){
    //   Snackbar.show({
    //     text:message,
    //     duration:isLong?Snackbar.LENGTH_LONG:Snackbar.LENGTH_SHORT
    //   });
    // }else {
    //   ToastAndroid.show(message,isLong?ToastAndroid.LONG:ToastAndroid.SHORT);
    // }
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{padding:10, paddingTop:30}}>
        <View style={{marginTop:20}}>
          <TouchableOpacity 
              style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10, marginBottom:10}}
              onPress={()=>showModel(false)}
            >
              <AntDesign name="arrowleft" size={15} color="black" />
              <Text style={{fontFamily:'roboto-medium', fontSize:15}}>Bookings</Text>
          </TouchableOpacity>
        </View>

        {/* Date Selection */}
        <Heading text={'Select Date'} />
        <View style={styles.calendarContainer}>
          <CalendarPicker 
            onDateChange={setSelectedStartDate}
            width={340} 
            minDate={Date.now()}
            todayBackgroundColor={Colors.BLACK}
            todayTextStyle={{color:Colors.WHITE}}  
            selectedDayColor={Colors.PRIMARY}
            selectedDayTextColor={Colors.WHITE}
            textStyle={styles.calenderText}
            />
        </View>

        {/* Time Selection */}
        <View style={{marginTop:20}}>
          <Heading text={'Select Time'} />
          <FlatList 
            data = {timeSlots}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index})=>(
              <TouchableOpacity
                onPress={()=>setSelectedTimes(item.time)}
                style={[selectedTimes==item.time?styles.selectedTime:styles.unSelectedTime]}
                >
                <Text style={[selectedTimes==item.time?styles.selectedTimeText:styles.unSelectedTimeText]}>{item.time}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* Notes Section */}
        <View style={{marginTop:20}}>
          <Heading text='Any Suggestions / Notes' />
          <View>
            <TextInput 
              placeholder='notes'
              numberOfLines={4} 
              multiline={true}
              onChange={()=>setSpecialNotes}
              style={styles.notesInput}
            />
          </View>
        </View>
        {/* Confirm Button */}
        <TouchableOpacity
         style={styles.conformBtnContainer}
         onPress={()=>{
          createBooking();
         }}
         >
          <Text style={styles.conformBtn}> Confirm & Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  calendarContainer:{
    backgroundColor:Colors.PRIMARY_LIGHT,
    padding:20,
    borderRadius:15
  },
  calenderText:{
    fontFamily:'roboto-medium',
    fontSize:14,
  },
  selectedTime:{
    padding:8,
    paddingHorizontal:5,
    color:Colors.WHITE,
    backgroundColor:Colors.PRIMARY,
    borderColor:Colors.WHITE,
    borderRadius:99,
    borderWidth:1,
    overflow: 'hidden',
    marginRight:10
    
  },
  unSelectedTime:{
    padding:8, 
    paddingHorizontal:5,
    color:Colors.PRIMARY,
    backgroundColor:Colors.WHITE,
    borderColor:Colors.PRIMARY,
    borderRadius:99,
    borderWidth:1,
    overflow: 'hidden',
    marginRight:10
  },
  selectedTimeText:{
    color:Colors.WHITE,
    backgroundColor:Colors.PRIMARY,
    paddingLeft:10,
    paddingRight:10,

  },
  unSelectedTimeText:{
    color:Colors.PRIMARY,
    backgroundColor:Colors.WHITE,
    paddingLeft:10,
    paddingRight:10,
  },
  notesInput:{
    borderColor:Colors.PRIMARY,
    borderWidth:1,
    borderRadius:15,
    fontFamily:'roboto-medium',
    fontSize:16,
    color:Colors.GREY,
    textAlignVertical:'top',
    padding:20,
    height:150
  },
  conformBtnContainer:{
    backgroundColor:Colors.PRIMARY,
    borderColor:Colors.PRIMARY,
    borderWidth:1,
    borderRadius:99,
    overflow: 'hidden',
    marginTop:20,
  },
  conformBtn:{
    textAlign:'center',
    padding:10,
    fontFamily:'roboto-medium',
    fontSize:18,
    color:Colors.WHITE,
    elevation:2
  }
})