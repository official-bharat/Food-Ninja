import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Intro3 = () => {
  return (
    <View style={{ flex: 1 ,marginTop:hp(6)  }}>
      <Image style={{ height: '60%', width: '100%' }} source={require('../../assets/icons/Logo3.png')} />
      <View style={{flex:2 , alignItems:'center' }}>
        <Text style={{ fontWeight: 'bold',padding:hp(3),textAlign:'center' ,fontSize:22}}>Food Ninja is Where Your{"\n"}Comfort Food Lives</Text>
        <Text style={{textAlign:'center' ,fontSize:13,fontWeight: 'bold' }}>Enjoy a fast and smooth food delivery at{"\n"}your doorstop</Text>
        <Button  mode="contained"
         style={{borderRadius:15,backgroundColor:'#53E88B' ,margin:hp(5)}} 
         contentStyle={{height:hp(7.5),width:wp(40)}}>
          Next
        </Button>
      </View>
    </View>
  )
}

export default Intro3;