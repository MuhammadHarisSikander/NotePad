import React, { useState } from "react";
import { Text, View } from "react-native";
import { Icon } from 'react-native-elements'
import Modal from 'react-native-modal';
import InputText from '../components/InputFields'
import Button from '../components/Button'

const Notepad = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
            <View style={{ margin: 20, }}>
                <Modal isVisible={isModalVisible}>
                    <View style={{justifyContent:'space-evenly',flex:1,marginVertical:50}} >
                        <Text style={{textAlign:'center',color:'white',fontSize:25}} >Add New Note</Text>
                    <InputText
                        label='Title'
                        //  value={email}
                        //  onChangeText={email => setEmail({ email })}
                        mode="Flat" />
                    <InputText
                        multiline={true}
                        label='Notes'
                        //  value={email}
                        //  onChangeText={email => setEmail({ email })}
                        mode="Flat" />

                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}} >
                        <Button Text="Add" mode="contained" onPress={() => { navigation.navigate('About') }} />
                        <Button Text="Cancel" mode="contained" onPress={() => toggleModal()} />
                    </View>
                        </View>
                </Modal>
            </View>

            <View style={{ position: 'absolute', right: 0, bottom: 0 }} >
                <Icon
                    raised
                    name='plus'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => toggleModal()} />
            </View>
        </View>
    )
}
export default Notepad