import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import {useUser} from '@clerk/clerk-expo'
import GlobalApi from '../Utiles/GlobalApi'
import BusinessListItem from '../BusinessListByCategory/BusinessListItem'

export default function BookingScreen() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(false);
  const {user, isLoading} = useUser();

  const getBookings = () =>{
    setLoading(true);
    GlobalApi.getBookings(user?.fullName).then(resp=>{
      setBookings(resp?.bookings);
    }).catch(err =>{
      console.log("No Bookings found", err);
    });
    setLoading(false);
  }

  useEffect(()=>{
    user&&getBookings();
  },[user])
  return bookings &&(
    <View>
      <View style={{padding:10, marginTop:30}}>
        <Heading text="My Bookings" />
        <View style={{marginTop:10}}>
          <FlatList 
            data={bookings}
            onRefresh={()=>getBookings()}
            refreshing={loading}
            renderItem={({item, index})=>(
              <View> 
                <BusinessListItem item={item?.bussinessList} booking={item} />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  )
}