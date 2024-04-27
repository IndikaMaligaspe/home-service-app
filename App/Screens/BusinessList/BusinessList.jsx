import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import BusinessListItem from '../HomeScreen/BusinessListItem';
import Heading from '../../Components/Heading';
import {useRoute, useNavigation} from '@react-navigation/native'
import GlobalApi from '../Utiles/GlobalApi'


export default function BusinessList() {

  const [businessList, setBusinessList] = useState([]);
  const params = useRoute().params;
  const searchTerm = params.searchTerm;
  const isViewAll= params.isViewAll;


  const searchBessinessLists = () =>{
    GlobalApi.searchBussiness(searchTerm).then(resp=>{
        setBusinessList(resp?.bussinessLists);
        console.log(resp?.bussinessLists)
       
    }).catch(err =>{
      console.log("No bussinessLists found", err);
    });
  }

  useEffect(()=>{
    searchBessinessLists();
  },[searchTerm])
  return (
    <View style={{marginTop:20}}
    >
        <Heading 
            text={`You Search - "${searchTerm}" produced ${businessList.length} results`} 
            isViewAll={isViewAll} />
        <FlatList 
            data={businessList}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index})=>(
                <View style={{marginRight:10}}>
                    <BusinessListItem 
                    item={item}
                    page={'search'}
                     />
                </View>
            )}
            
        />
      
    </View>
  )
}