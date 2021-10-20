import React, { useState } from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableHighlight, FlatList, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';

const Shiping = () => {
    const {navigate}= useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../../assets/icons/Back.png')}
                size={45}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{
                fontSize: 25, fontFamily: 'BentonSans Bold', marginBottom: hp(3), paddingTop: hp(2),
                paddingLeft: wp(7)
            }}>Shipping</Text>
            <View style={{ alignItems: 'center' }}>
                <View style={{ height: hp(15), width: wp(90), borderRadius: 20, backgroundColor: 'white', elevation: 7 }}>
                    <Text style={{ fontFamily: 'BentonSans Regular', marginTop: hp(2), marginLeft: wp(5), fontSize: 14, color: '#3B3B3B' }}>Order Location</Text>
                    <View style={{ flexDirection: 'row', paddingLeft: wp(3), paddingTop: hp(2), justifyContent: 'space-evenly' }}>
                        <Image style={{ height: 40, width: 40 }} source={require('../../../assets/icons/mapp.png')} />
                        <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>4513 Washington Ave Menchester,{"\n"}kentucky 35267</Text>
                    </View>
                </View>
                <View style={{ height: hp(18), marginTop: hp(3), width: wp(90), borderRadius: 20, backgroundColor: 'white', elevation: 7 }}>
                    <Text style={{ fontFamily: 'BentonSans Regular',  marginTop: hp(2), marginLeft: wp(5),fontSize: 14, color: '#3B3B3B' }}>Deliver to</Text>
                    <View style={{ flexDirection: 'row', paddingLeft: wp(3), paddingTop: hp(2), justifyContent: 'space-evenly' }}>
                        <Image style={{ height: 40, width: 40 }} source={require('../../../assets/icons/mapp.png')} />
                        <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>4513 Washington Ave Menchester,{"\n"}kentucky 35267</Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigate('Find')} style={{marginLeft:wp(15),marginTop:hp(1.5)}}>
                        <Text style={{fontFamily:'BentonSans Regular',fontSize:14,color:'#53E88B'}}>Set Location</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Shiping;