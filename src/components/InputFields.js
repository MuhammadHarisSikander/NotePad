import React from 'react'
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

const Text = (props)=>{
    return(
        <View>
        <TextInput
        {...props}
        />
        </View>
        )
}
export default Text