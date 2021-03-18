import React, { useState } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import InputText from '../components/InputFields'
import Button from '../components/Button'
import Spinner from '../components/Spinner'
// import { Actions } from 'react-native-router-flux';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')
    const [err, setErr] = useState(false)



    onButtonPress = () => {
        setErr(true)
        setError('')
        setLoader(true)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
                setLoader(false)
                setErr(false)
                navigation.navigate('About')
            })
            .catch((err) => {
                setLoader(false)
                setError("Authentication failed")
            })
    }


    return (
        <View style={{ display: 'flex', flex: 1, justifyContent: 'space-evenly', margin: 20 }} >

            <Text style={{ textAlign: 'center', fontSize: 50 }} >LOGIN</Text>

            <InputText
                label='Email'
                value={email}
                onChangeText={val => setEmail(val)}
                mode="outlined" />

            <InputText
                secureTextEntry={true}
                label='Password'
                value={password}
                onChangeText={val => setPassword(val)}
                mode="outlined" />
            <View style={ err ? {} : {display:'none'} } >
            {loader ? <Spinner /> : null}
            <Text style={{ textAlign: 'center', color: 'red', fontSize: 20 }}>{error}</Text>
            </View>

            <Button Text="Login" mode="contained" onPress={() => onButtonPress()} />

            <Button Text="Register Here" mode="contained" onPress={() => { navigation.navigate('Register') }} />

        </View>
    )
}
export default Login