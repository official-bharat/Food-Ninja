import React from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Intro3 = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, marginTop: hp(10) }}>
      <Image style={{ height: '50%', width: '98%' }} source={require('../../assets/icons/Logo3.png')} />
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ marginTop: hp(9), textAlign: 'center', fontSize: 22, fontFamily: 'BentonSans Bold' }}>Food Ninja is Where Your</Text>
        <Text style={{ marginTop: hp(0.6), textAlign: 'center', fontSize: 22, fontFamily: 'BentonSans Bold' }}>Comfort Food Lives</Text>
        <Text style={{ marginTop: hp(4), textAlign: 'center', fontSize: 12, fontFamily: 'BentonSans Book' }}>Enjoy a fast and smooth food delivery at{"\n"}{"\n"}your doorstop</Text>
        <LinearGradient colors={["#53E88B", "#15BE77"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 20, marginTop: hp(5) }}
        >
          <TouchableOpacity onPress={() => navigate("Log-in")}>
            <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(15), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/* <Button mode="contained"
          onPress={() => navigate("Log-in")}
          uppercase={false}
          style={{ borderRadius: 15, backgroundColor: '#53E88B', margin: hp(5) }}
          contentStyle={{ height: hp(7.5), width: wp(40) }}>
          <Text style={{ fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
        </Button> */}
      </View>
    </View>
  )
}

export default Intro3;