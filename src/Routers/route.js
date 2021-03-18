import React, { useEffect, useState } from 'react'
import firebase from'firebase'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login'
import About from '../screens/NotePad'
import Register from '../screens/registeration'

const Stack = createStackNavigator();

function MyStack() {

  // const {user,setUser} = useContext(AuthContext)
  // const [initializing,setInitializing] = useState(true)

  // const onAuthStateChanged = (user)=>{
  //   setUser(user)
  //   if(initializing) setInitializing(false)
  // }

  useEffect(()=>{
      firebase.initializeApp(
        {
          apiKey: "AIzaSyD7FiBMivQyYbvFs_PfmaYcfPhs5B0kV2w",
          authDomain: "notepad-auth-7ff5e.firebaseapp.com",
          projectId: "notepad-auth-7ff5e",
          storageBucket: "notepad-auth-7ff5e.appspot.com",
          messagingSenderId: "324710160380",
          appId: "1:324710160380:web:772b375ed5e4b5a6688479"
        }
      )
  },[])



  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Register" component={Register} />
      
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
      </NavigationContainer>
  );
}
export default MyStack