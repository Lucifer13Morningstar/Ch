import React, { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import { Input, Button} from 'react-native-elements'
import { auth } from '../firebase'; 

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState((''));
    const [email, setEmail] = useState((''));

    const [password, setPassword] = useState((''));
    const [imageURL, setImageURL] = useState((''));
    const register = ()=>{

    auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    user.updateProfile({
        displayName: name,
        photoURL: imageURL? imageURL:"https://png.pngitem.com/pimgs/s/266-2668502_ikawaii-cute-cactus-cutie-aesthetic-art-cartoon-pink.png"
      }).then(() => {
        // Update successful
        
      }).catch((error) => {
        // An error occurred
      });  
    
    // ...
    navigation.popToTop();
  
  })
  .catch((error) => {
    
    var errorMessage = error.message;
    alert(errorMessage)
  });

}
    return (
     <View style={styles.container}> 
        <Input
        placeholder="Enter your Name"
        label="Name"
         leftIcon={{type:'material', name:'badge'}}
         value= {name}
onChangeText={text => setName(text)}
        />
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
        <Input
        placeholder="Enter your Image URL"
        label="Profile Picture"
         leftIcon={{type:'material', name:'face'}}
         value= {imageURL}
onChangeText={text => setImageURL(text)}
        />
        
        <Button title="Register" onPress={register} style={StyleSheet.Button}/>
    </View>
    )
}

export default RegisterScreen 

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
 