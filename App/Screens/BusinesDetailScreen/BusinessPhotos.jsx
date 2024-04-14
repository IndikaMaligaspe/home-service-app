import { View, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import Heading from '../../Components/Heading'

export default function BusinessPhotos({business}) {
  return (
    <View>
      <Heading text="Photos" />
      <FlatList 
        data={business.images}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({item, index})=>(
                <Image source={{uri:item.url}} 
                    style={{
                        width:'100%',
                        height:120,
                        flex:1,
                        borderRadius:15,
                        margin:7
                    }}
                />
        )}
      />
    </View>
  )
}