import React from 'react';
import { View , Image, ImageBackground} from 'react-native';
import { Text , Button , TextInput   } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

const Intro = ()=>{
  const {navigate} = useNavigation();
  return(
    <ImageBackground style={{flex:1 , backgroundColor:'white'}} source={require('../../assets/icons/Pattern.png')}>
      <View style={{flex:2,alignItems:'center' , justifyContent:'center'}}>
        <Image style={{height:200,width:200}}  source={require('../../assets/icons/Logo.png')}/>
        <Text onPress={()=>navigate("Intro2")} style={{fontWeight:'bold'}}>Deliever Favorite Food</Text>
      </View>
    </ImageBackground>
  )
}
export default Intro;