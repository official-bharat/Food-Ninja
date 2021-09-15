import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const Intro2 = () => {
  return (
    <View style={{ flex: 1, marginTop: hp(5) }}>
      <Image style={{ height: '65%', width: '100%' }} source={require('../../assets/icons/Logo2.png')} />
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', padding: hp(2), textAlign: 'center', fontSize: 22 }}>Find Your Comfort{"\n"}Food here</Text>
        <Text style={{ textAlign: 'center', fontSize: 13, fontWeight: 'bold' }}>Here You Can Find a chef or dish for every{"\n"}taste and color.Enjoy!</Text>
        <Button mode="contained"
          style={{ borderRadius: 15, margin: hp(5),backgroundColor:'#53E88B' }}
          contentStyle={{ height: hp(7.5), width: wp(40)  }}>
          Next
        </Button>
      </View>
    </View>
  )
}
export default Intro2;