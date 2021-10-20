import React, { useEffect } from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import { GoogleSignin, GoogleSigninButton, statusCodes, } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { Icon } from 'react-native-vector-icons/icon';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react/cjs/react.development';

const Login = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '28196733838-id9nel5krkstq117mgrg7lc7ibg81go2.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo });
      console.log({ userInfo })
    } catch (error) {
      console.log({ error })
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const Fblogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Someting went wrong abtaining access token'
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      await auth().signInWithCredential(facebookCredential);
    }
    catch (error) {
      console.log({ error });
    }
  };

  return (
    <ImageBackground style={{ flex: 1, backgroundColor: 'white' }} source={require('../../assets/icons/Pattern.png')}>
      <View style={{ alignItems: 'center', paddingTop: hp(5) }}>
        <Image style={{ height: 170, width: 170 }} source={require('../../assets/icons/Logo.png')} />
        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>Deliever Favorite Food</Text>
      </View>
      <Text style={{ textAlign: 'center', fontFamily: 'BentonSans Bold', fontSize: 20, paddingTop: hp(7) }}>Login To Your Account</Text>
      <View style={{ paddingHorizontal: wp(7) }}>
        <TextInput
          placeholder="Email"
          mode='outlined'
          editable={true}
          theme={{ roundness: 20 }}
          placeholderStyle={{ fontFamily: 'BentonSans Regular', fontSize: 14 }}
          style={{ marginTop: hp(4), height: hp(7.6),backgroundColor: 'white' }}
        />
        <TextInput
          placeholder="Password"
          mode='outlined'
          theme={{ roundness: 20 }}
          style={{ marginTop: hp(1), backgroundColor: 'white', height: hp(7.6) }}
        />
      </View>
      <Text style={{ textAlign: 'center', paddingTop: hp(2.5), fontFamily: 'BentonSans Bold', fontSize: 12 }} >Or Continue With</Text>
      <View style={{ flexDirection: 'row', marginTop: hp(3), justifyContent: 'space-evenly' }}>
        <TouchableOpacity onPress={() => Fblogin()}>
          <View style={{ flexDirection: 'row', borderWidth: 1, paddingVertical: hp(1.9), paddingHorizontal: wp(5), borderRadius: 20, borderColor: '#F4F4F4' }}>
            <Image style={{ height: 28, width: 28 }} source={require('../../assets/icons/facebook2.png')} />
            <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 16, marginLeft: wp(2), marginTop: hp(0.5) }}>Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => signIn()}>
          <View style={{ flexDirection: 'row', borderWidth: 1, paddingVertical: hp(2.2), paddingHorizontal: wp(8), borderRadius: 20, borderColor: '#F4F4F4' }}>
            <Image style={{ height: 25, width: 25 }} source={require('../../assets/icons/google.png')} />
            <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 16, marginLeft: wp(2), marginTop: hp(0.5) }}>Google</Text>
          </View>
        </TouchableOpacity>
        {/* <Button
          mode="outlined"
          onPress={()=>Fblogin()}
          color="black"
          uppercase={false}
          height={hp(7.5)}
          width={wp(38)}
          contentStyle={{paddingTop:hp(1)}}
          style={{ borderRadius: 15 }}
        >
         
          <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/facebook2.png')} />
          <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 16 }}>Facebook</Text>
        </Button>
        <Button
          mode="outlined"
          color="black"
          onPress={() => signIn()}
          uppercase={false}
          height={hp(7.5)}
          width={wp(38)}
          contentStyle={{paddingTop:hp(1)}}
          style={{ borderRadius: 15 }}
        >
          <Image style={{ height: 20, width: 20 }} source={require('../../assets/icons/google.png')} />
          <Text style={{ fontFamily: 'BentonSans Medium',fontSize: 16  }}>Google</Text>
        </Button> */}
      </View>
      <Button
        style={{ paddingTop: hp(1.5) }}
        uppercase={false}
      >
        <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 12, color: '#53E88B' }}>Forgot Your Password?</Text>
      </Button>
      <View style={{ alignItems: 'center' }}>
        <LinearGradient colors={["#53E88B", "#15BE77"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 20, marginTop: hp(3) }}
        >
          <TouchableOpacity onPress={() => navigate("Sign-up")}>
            <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(15), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Login</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/* <Button
          mode="contained"
          uppercase={false}
          onPress={() => navigate("Sign-up")}
          style={{
            height: hp(7.5),
            backgroundColor: "#53E88B",
            width: wp(40), paddingTop: hp(1),
            marginTop: hp(3.3),
            borderRadius: 15
          }}
        >
          <Text style={{ fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Login</Text>
        </Button> */}
      </View>
    </ImageBackground>
  )
}


export default Login;
