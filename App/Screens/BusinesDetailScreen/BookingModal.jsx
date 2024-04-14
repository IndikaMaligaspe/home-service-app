import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import Heading from '../../Components/Heading';
import Colors from '../Utiles/Colors';

export default function BookingModal({showModel}) {
  const navigation=useNavigation();
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [timeSlots, setTimeSlots] = useState();
  const [selectedTimes, setSelectedTimes] = useState();

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

  return (
    <View style={{padding:10, paddingTop:30}}>
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
      <View>
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
               <Text style={{paddingLeft:10,paddingRight:10}}>{item.time}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    
    </View>
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
  }
})