import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { Text, Button, TextInput  } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';



const Signup = () => {
  return (
    <ImageBackground style={{ flex: 1, backgroundColor: 'white' }} source={require('../../assets/icons/Pattern.png')}>
      <View style={{ alignItems: 'center', paddingTop: hp(3) }}>
        <Image style={{ height: 180, width: 180 }} source={require('../../assets/icons/Logo.png')} />
        <Text style={{ fontWeight: 'bold' }}>Deliever Favorite Food</Text>
      </View>
      <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', paddingTop: hp(5) }}>Sign Up For Feee</Text>
      <View style={{ paddingHorizontal: wp(7) }}>
        <TextInput
          placeholder="Email"
          mode='outlined'
          left={<TextInput.Icon  color="#53E88B" name={require('../../assets/icons/Acct.png')}/>}
          style={{ marginTop: hp(4), backgroundColor: 'white', marginBottom: hp(1.5), height: hp(8) }}
        />
        <TextInput
          placeholder="Email"
          mode='outlined'
          left={<TextInput.Icon  color="#53E88B" name={require('../../assets/icons/Email.png')}/>}
          style={{ borderRadius: 20, backgroundColor: 'white', marginBottom: hp(1.5) }}
        />
        <TextInput
          placeholder="Password"
          mode='outlined'
          secureTextEntry={true}
          left={<TextInput.Icon  color="#53E88B" name={require('../../assets/icons/Lock.png')}/>}
          right={<TextInput.Icon name="eye" />}
          style={{ borderRadius:20, backgroundColor: 'white' }}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Button
          mode="contained"
        
          style={{
            height: hp(7.5),
            backgroundColor: "#53E88B",
            width: wp(50), paddingTop: hp(1),
            marginTop: hp(2),
            borderRadius:20
          }}
          uppercase={false}
        >
          Create Account
        </Button>
        <Button
          style={{ paddingTop: hp(1) }}
          color="#53E88B"
          uppercase={false}
        >
          already have an account?
        </Button>
      </View>
    </ImageBackground>
  )
}

export default Signup;