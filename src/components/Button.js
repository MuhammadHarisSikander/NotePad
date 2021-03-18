import React from 'react'
import { View } from 'react-native';
import { Button } from 'react-native-paper';


const Btn = (props,{Text}) => (
        <View>

    <Button {...props}>
      {props.Text}
    </Button>
        </View>
  );
  export default Btn;