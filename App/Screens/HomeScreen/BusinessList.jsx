import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utiles/GlobalApi'
import Heading from '../../Components/Heading'
import BusinessListItem from './BusinessListItem'

export default function BusinessList() {
    const [bussinessList, setBusinessList] = useState([])
    
    const getBusinessList=() =>{
        GlobalApi.getBussinesList().then(resp=>{
            setBusinessList(resp?.bussinessLists);
            console.log(resp?.bussinessLists)
        })
    }

    useEffect(()=>{
        getBusinessList();
    },[])
  return (
    <View style={{marginTop:20}}
    >
        <Heading 
            text="Our Business" 
            isViewAll={true} />
        <FlatList 
            data={bussinessList}
            horizontal={true}
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