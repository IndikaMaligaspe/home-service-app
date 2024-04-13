import { View, Text, TouchableOpacity, FlatList  } from 'react-native'
import React, { useState , useEffect} from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import GlobalApi from '../Utiles/GlobalApi';
import BusinessListItem from './BusinessListItem';
import Colors from '../Utiles/Colors';

export default function BussinesListByCategory() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [bussinesList, setBussinesList] = useState([]);
  const [loading, setLoading] = useState(null);

  /**
   * Get Business LIst from server
   */
  const getBussinesByCategory = () =>{
    GlobalApi.getBussinesListByCategory(param?.category)
        .then(resp =>{
            setBussinesList(resp?.bussinessLists)
            if(resp?.bussinessLists.length == 0)
                setLoading(`OOPs.... No Business Listing Available for -  ${param?.category}`);
        })
  }

  useEffect(()=>{
    setLoading("Getting the best available services for you....");
    param&&getBussinesByCategory();
  },[param])

  return (
    <View style={{padding:10, paddingTop:30}}>
      <TouchableOpacity 
        style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10}}
        onPress={()=>navigation.goBack()}
      >  
        <AntDesign  name="back" size={15} color="black" />
        <Text style={{fontFamily:'roboto-medium', fontSize:15}}>{param?.category}</Text>
      </TouchableOpacity>
      {bussinesList.length > 0? 
      <FlatList 
        data={bussinesList} 
        style={{marginTop:10}}
        renderItem={({item, index})=>
        (
            <BusinessListItem item={item}/>
        )}>
         </FlatList>:
         <Text style={{
            fontFamily:'roboto-bold',
            color:Colors.GREY,
            fontSize:20,
            textAlign:'center',
            marginTop:'20%'
         }}>{loading}</Text>}
    </View>
  )
}