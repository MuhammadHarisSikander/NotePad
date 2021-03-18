import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import InputText from '../components/InputFields'
import Button from '../components/Button'
import Spinner from '../components/Spinner'



const Register = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [passError, setPassError] = useState('')
    const [loader, setLodaer] = useState(false)
    // const [error, setError] = useState('')
    const [err, setErr] = useState(false)



    onButtonPress = () => {
        setErr(true)
        setLodaer(true)
        if (password === confirmPass) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    setErr(false)
                    setLodaer(false)
                    navigation.navigate('Login')
                })
                .catch((err) => {
                    setPassError("Empty Fields !")
                    setLodaer(false)
                    console.log(err);
                })
        } else {
            setPassError("Password Not Matched !")
            setLodaer(false)
        }


    }

    return (
        <View style={{ display: 'flex', flex: 1, justifyContent: 'space-evenly', margin: 20 }} >

            <Text style={{ textAlign: 'center', fontSize: 50 }} >Create Account</Text>

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

            <InputText
                secureTextEntry={true}
                label='Confirm Password'
                value={confirmPass}
                onChangeText={val => setConfirmPass(val)}
                mode="outlined" />


            <View style={err ? {} : { display: 'none' }} >
                {loader ? <Spinner /> : null}
                <Text style={{ textAlign: 'center', color: 'red', fontSize: 20 }}>{passError}</Text>
            </View>




            <Button Text="Sign Up" mode="contained" onPress={() => onButtonPress()} />

        </View>
    )
}
export default Register