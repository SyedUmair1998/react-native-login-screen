import React , {useState} from 'react';
import { SocialIcon } from 'react-native-elements'


import { View, Text, TextInput,StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const Login = () => {
    const bgImage = {uri:'https://i.pinimg.com/736x/6b/a1/83/6ba18374d01da8585297f46c0bda5f78.jpg'};
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return (
<View style={{flex:1}}>
    <ImageBackground source = {bgImage} resizeMode="cover" style={{flex:1,justifyContent:'center'}}>
        <View style={{borderWidth:1,borderColor:'black',flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color:'white',fontSize:30}}>Welcome to FYP Pool</Text>
            <Text style={{color:'white',marginTop:10,textAlign:'center',fontSize:17}}>An online platform for the students ro select their dream Final year projects online</Text>
        </View>
        
        <View style={{flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput style={styles.input} placeholder="Enter email" />
            <TextInput  secureTextEntry={true} style={styles.input} placeholder="Enter password" />
            <TouchableOpacity>
                <Text style={{color:'white',borderRadius:20,borderColor:'white',borderWidth:1,width:150,textAlign:'center',padding:5,marginTop:20,height:40,fontSize:18,backgroundColor:'rgba(0,0,0,0.2)'}}>Login</Text>
            </TouchableOpacity>
        </View>
        
        <View style={{borderWidth:1,borderColor:'black',flex: 2 }}>
            <TouchableOpacity>
                    <SocialIcon
            title='Login In With Facebook'
            button
            type='facebook'
            />
                  
            </TouchableOpacity>
            <TouchableOpacity>
                  <SocialIcon
            title='Login In With Gmail'
            button
            type='google'
            />
            </TouchableOpacity>
            <TouchableOpacity>

            <Text style={{textAlign:'center',color:'white',marginTop:20}}>Not Registered yet ?</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
        </View>

    )
}
const styles = StyleSheet.create({
    input: {
      color:'white',
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:290,
      borderColor:'white',
      borderRadius:20,
    },
  });

export default Login;
