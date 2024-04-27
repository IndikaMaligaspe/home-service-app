import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import BusinessListItem from '../HomeScreen/BusinessListItem';
import Heading from '../../Components/Heading';
import {useRoute, useNavigation} from '@react-navigation/native'


export default function BusinessList() {

  const [businessList, setBusinessList] = useState({});
  const params = useRoute().params;

  useEffect(()=>{
    console.log("LIST : ->", params.list,params.isViewAll)
    if(params.list&& params.list.length >0){
        setBusinessList(params.list)
    } 
  },[params.list])
  return (
    <View style={{marginTop:20}}
    >
        <Heading 
            text="Our Business" 
            isViewAll={params.isViewAll} />
        <FlatList 
            data={businessList}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index})=>(
                <View style={{marginRight:10}}>
                    <BusinessListItem item={item} />
                </View>
            )}
            
        />
      
    </View>
  )
}