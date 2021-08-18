import React, { useEffect , useState } from 'react'
import { View, StyleSheet} from 'react-native'
import { Input, Button} from 'react-native-elements'
import { auth } from '../firebase';

const LoginScreen = ( {navigation} ) => {
    const [email, setEmail] = useState((''));
    const [[password, setPassword]] = useState((''));
    const signIn = () =>{
        auth.signInWithEmailAndPassword(email, password)

  .catch((error) => {
    
    var errorMessage = error.message;
alert(errorMessage)

  });
    }
useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( function (user)
     {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          navigation.replace('Chat');
          // ...
        } else {
            navigation.canGoBack() && navigation.popToTop();
          // User is signed out
          // ...
        }
      });


    return unsubscribe

}, [])
return (
     <View style={styles.container}> 
        <Input
        placeholder="Enter your email"
        label="Email"
         leftIcon={{type:'material', name:'email'}}
         value= {email}
onChangeText={text => setEmail(text)}

        />
         <Input
        placeholder="Enter your password"
        label="Password"
         leftIcon={{type:'material', name:'lock'}}
value= {password}
onChangeText={text => setPassword(text)}
secureTextEntry
        />
        <Button title="Sign In" onPress={signIn} style={StyleSheet.Button}/>

        <Button title="Register" style={StyleSheet.Button} onPress={()=>navigation.navigate('Register')}/>
    </View>
    )
}

export default LoginScreen

const styles= StyleSheet.create({
button: {
width: 400,
marginTop: 20
},
container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
}
})
 