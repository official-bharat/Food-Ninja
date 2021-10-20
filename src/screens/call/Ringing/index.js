import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Ringing = () => {
    const {navigate} = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, paddingTop: hp(20), backgroundColor: '#FEFEFF' }} source={require('../../../assets/icons/Pattern.png')}>
            <View style={{alignItems:'center'}}>
                <Image style={{ height: 160, width: 160  }} source={require('../../../assets/icons/Image1.png')} />
                <Text style={{ fontFamily: 'BentonSans Bold', marginTop: hp(7), fontSize: 25 }}>Courtney Henry</Text>
                <Text style={{ fontFamily: 'BentonSans Regular', marginTop: hp(2), fontSize: 19 }}>Ringing...</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-evenly',paddingHorizontal:wp(17),alignItems:'center',paddingTop: hp(23) }}>
                <TouchableOpacity>
                    <Image style={{ height: 90, width: 90 }} source={require('../../../assets/icons/Speaker.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigate('Finish')}>
                    <Image style={{ height: 90, width: 90 }} source={require('../../../assets/icons/Cross.png')} />
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )
}
export default Ringing