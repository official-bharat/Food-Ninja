import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Login = () => {
  return (
    <ImageBackground style={{ flex: 1, backgroundColor: 'white' }} source={require('../../assets/icons/Pattern.png')}>
      <View style={{ alignItems: 'center', paddingTop: hp(3) }}>
        <Image style={{ height: 180, width: 180 }} source={require('../../assets/icons/Logo.png')} />
        <Text style={{ fontWeight: 'bold' }}>Deliever Favorite Food</Text>
      </View>
      <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', paddingTop: hp(5) }}>Login To Your Account</Text>
      <View style={{ paddingHorizontal: wp(7) }}>
        <TextInput
          label="Email"
          mode='outlined'
          style={{ marginTop: hp(4), marginBottom: hp(1.5), height: hp(8) }}
        />
        <TextInput
          label="Password"
          mode='outlined'
        />
      </View>
      <Text style={{ textAlign: 'center', paddingTop: hp(1.5), fontWeight: 'bold' }} >Or Continue With</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: hp(3) }}>
        <Button
          mode="outlined"
          color="black"
          style={{height: hp(7.5), width: wp(38)}}
          
        >
            <Image style={{height:25,width:25}} source={require('../../assets/icons/facebook.png')}/>
          Facebook
        </Button>
        <Button
          mode="outlined"
          color="black"
          contentStyle={{ height: hp(7.5), width: wp(38) }}
        >
           <Image style={{height:25,width:25}} source={require('../../assets/icons/google.png')}/>
          Google
        </Button>
      </View>
      <Button
        style={{ paddingTop: hp(1.5) }}
        color="#53E88B"
      >
        Forgot Your Password?
      </Button>
      <View style={{alignItems:'center'}}>
        <Button
          mode="contained"
          style={{ height: hp(7.5),
             backgroundColor:"#53E88B",
             width: wp(40),paddingTop:hp(1),
             marginTop:hp(2),
             borderRadius:15}}
        >
          Login
        </Button>
      </View>
    </ImageBackground>
  )
}


export default Login;
