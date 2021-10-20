import React from 'react';
import { View, Image, ImageBackground  , TouchableOpacity} from 'react-native';
import { Text, Button, TextInput, Checkbox } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Signup = () => {
  const { navigate } = useNavigation();
  return (
    <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../assets/icons/Pattern.png')}>
      <View style={{ alignItems: 'center', paddingTop: hp(4) }}>
        <Image style={{ height: 170, width: 170 }} source={require('../../assets/icons/Logo.png')} />
        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>Deliever Favorite Food</Text>
      </View>
      <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'BentonSans Bold', paddingTop: hp(5) }}>Sign Up For Feee</Text>
      <View style={{ paddingHorizontal: wp(7), paddingTop: hp(2) }}>
        <TextInput
          placeholder="Email"
          mode='outlined'
          theme={{ roundness: 20 }}
          left={<TextInput.Icon color="#53E88B" name={require('../../assets/icons/Profile.png')} />}
          style={{ marginTop: hp(2), backgroundColor: 'white', marginBottom: hp(0.7), height: hp(7.6) }}
        />
        <TextInput
          placeholder="Email"
          mode='outlined'
          theme={{ roundness: 20 }}
          left={<TextInput.Icon color="#53E88B" name={require('../../assets/icons/Message.png')} />}
          style={{ backgroundColor: 'white', marginBottom: hp(0.7), height: hp(7.6) }}
        />
        <TextInput
          placeholder="Password"
          mode='outlined'
          theme={{ roundness: 20 }}
          secureTextEntry={true}
          left={<TextInput.Icon color="#53E88B" name={require('../../assets/icons/Lock.png')} />}
          right={<TextInput.Icon name={require('../../assets/icons/Show.png')} />}
          style={{ backgroundColor: 'white', height: hp(7.6) }}
        />
      </View>
      <View style={{ paddingTop: hp(2), paddingLeft: wp(5) }}>
        <View style={{ flexDirection: 'row' }}>
          <Checkbox
            status="checked"
            color="#53E88B"
            // style={Style.radioButton}
          />
          <Text style={{ fontSize: 12, fontFamily: 'BentonSans Book', marginTop: hp(1.3) }}>Keep Me Signed In</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Checkbox
            status="checked"
            color="#53E88B"
            theme={{ borderRadius: 20 }}
          />
          <Text style={{ fontSize: 12, fontFamily: 'BentonSans Book', marginTop: hp(1.3) }}>Email Me About Special Pricing</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', paddingTop: hp(2.9) }}>
      <LinearGradient colors={["#53E88B", "#15BE77"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 20, marginTop: hp(1) }}
        >
          <TouchableOpacity onPress={() => navigate("Form")}>
            <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(7.3), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Create Account</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/* <Button
          mode="contained"
          onPress={() => navigate("Form")}
          style={{
            height: hp(7.5),
            backgroundColor: "#53E88B",
            width: wp(50), paddingTop: hp(1),
            marginTop: hp(2),
            borderRadius: 20
          }}
          uppercase={false}
        >
          <Text style={{ fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Create Account</Text>
        </Button> */}
        <Text
          style={{ fontFamily: 'BentonSans Medium', paddingTop: hp(2), fontSize: 12, color: '#53E88B' }}
        >already have an account?</Text>
      </View>
    </ImageBackground>
  )
}

export default Signup;