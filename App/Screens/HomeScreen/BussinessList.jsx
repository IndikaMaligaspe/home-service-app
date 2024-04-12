import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utiles/GlobalApi'
import Heading from '../../Components/Heading'
import BussinessListItem from './BussinessListItem'

export default function BussinessList() {
    const [bussinessList, setBussinessList] = useState([])
    
    const getBussinessList=() =>{
        GlobalApi.getBussinesList().then(resp=>{
            setBussinessList(resp?.bussinessLists);
            console.log(resp?.bussinessLists)
        })
    }

    useEffect(()=>{
        getBussinessList();
    },[])
  return (
    <View style={{marginTop:20}}
    >
        <Heading 
            text="Our Bussiness" 
            isViewAll={true} />
        <FlatList 
            data={bussinessList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index})=>(
                <View style={{marginRight:10}}>
                    <BussinessListItem item={item} />
                </View>
            )}
            
        />
      
    </View>
  )
}