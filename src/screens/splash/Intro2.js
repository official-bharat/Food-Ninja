import React from 'react';
import { View, Image, ImageBackground  , TouchableOpacity} from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';


const Intro2 = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, marginTop: hp(5) }}>
      <Image style={{ height: '58%', width: '100%' }} source={require('../../assets/icons/Logo2.png')} />
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ marginTop:hp(3), fontFamily: 'BentonSans Bold', textAlign: 'center', fontSize: 22 }}>Find your Comfort</Text>
        <Text style={{marginTop:hp(0.6),  fontFamily: 'BentonSans Bold', textAlign: 'center', fontSize: 22 }}>Food here</Text>
        <Text style={{ marginTop:hp(4),textAlign: 'center', fontSize: 12, color:'#000000',fontFamily: 'BentonSans Book' }}>Here You Can Find a chef or dish for every{"\n"}{'\n'}taste and color.Enjoy!</Text>
        <LinearGradient colors={["#53E88B" , "#15BE77"]}
        start={{x:0 , y:0}}
        end={{x:1 , y:0}}
        style={{borderRadius:20,marginTop:hp(5)}}
        >
        <TouchableOpacity  onPress={() => navigate('Intro3')}>
          <Text style={{borderWidth:1 , borderWidth:0,paddingHorizontal:wp(15),paddingVertical:hp(2.6),fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
        </TouchableOpacity>
        </LinearGradient>
        {/* <Button mode="contained"
          onPress={() => navigate('Intro3')}
          uppercase={false}
          style={{ borderRadius: 15, margin: hp(6), backgroundColor: '#53E88B' }}
          contentStyle={{ height: hp(7.5), width: wp(40) }}>
          <Text style={{ fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
        </Button> */}
      </View>
    </View>
  )
}
export default Intro2;