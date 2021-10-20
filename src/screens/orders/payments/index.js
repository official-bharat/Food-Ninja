import React, { useState } from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableHighlight, FlatList, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';

const Orderpayment = () => {
    const {navigate} = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../../assets/icons/Back.png')}
                size={45}
                color="red"
                onPress={()=>navigate('Ship')}
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{
                fontSize: 25, fontFamily: 'BentonSans Bold', marginBottom: hp(3), paddingTop: hp(2),
                paddingLeft: wp(7)
            }}>Payment</Text>
            <View style={{ alignItems: 'center', flex: 1.5, paddingTop: hp(2) }}>
                <TouchableOpacity style={{ elevation: 10, backgroundColor: 'white', justifyContent:'center',paddingHorizontal: wp(4),width: wp(90), borderRadius: 20, height: hp(9) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image style={{ height: hp(3.3), width: wp(28) }} source={require('../../../assets//icons/Paypal.png')} />
                        <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14 }}>2232 4455 5556 ****</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ elevation: 10, marginTop: hp(2), backgroundColor: 'white', paddingHorizontal: wp(4), width: wp(90), borderRadius: 20, height: hp(9),justifyContent:'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image style={{ height: hp(2), width: wp(15) }} source={require('../../../assets//icons/Visa.png')} />
                        <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14 }}>2232 4455 5556 ****</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ elevation: 10, backgroundColor: 'white', marginTop: hp(2), paddingHorizontal: wp(4), width: wp(90), borderRadius: 20, height: hp(9),justifyContent:'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image style={{ height: hp(3.8), width: wp(22) }} source={require('../../../assets//icons/Payoneer.png')} />
                        <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14 }}>2232 4455 5556 ****</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Orderpayment;