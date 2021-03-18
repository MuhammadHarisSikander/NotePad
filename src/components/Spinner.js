import React from 'react'
import { View,ActivityIndicator } from 'react-native'

const Spinner = () =>{
    return(
        <View>
            <ActivityIndicator color="red" size="small"/>
        </View>
    )
}
export default Spinner