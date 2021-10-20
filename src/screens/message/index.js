import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Message = () => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../assets/icons/Back.png')}
                size={45}
                onPress={() => navigate("Form")}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{ fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(2), paddingLeft: wp(7) }}>Chat</Text>
            <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: hp(4) }}>
                <TouchableOpacity onPress={() => navigate("Chats")} style={{ height: hp(10), flexDirection: 'row', justifyContent: 'space-between', width: wp(90), borderRadius: 20, elevation: 7, backgroundColor: 'white' }}>
                    <Image style={{ height: 60, width: 60, marginLeft: wp(3), marginTop: hp(1) }} source={require('../../assets/icons/Profile1.png')} />
                    <View style={{ width: wp(70), paddingHorizontal: wp(5), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent:'space-evenly' }}>
                            <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>Anamwp</Text>
                            <Text style={{ fontFamily: 'BentonSans Regular', color: '#3B3B3B', fontSize: 14 }}>Your Order Just Arrived!</Text>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'BentonSans Regular', color: '#3B3B3B' ,marginTop:hp(2)}}>20:00</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: hp(10), flexDirection: 'row', justifyContent: 'space-between', paddingRight: wp(5), width: wp(90), borderRadius: 20, marginTop: hp(3), elevation: 7, backgroundColor: 'white' }}>
                    <Image style={{ height: 60, width: 60, marginLeft: wp(3), marginTop: hp(1) }} source={require('../../assets/icons/Profile2.png')} />
                    <View style={{ width: wp(70), paddingHorizontal: wp(5), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent:'space-evenly' }}>
                            <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>Guy Hawkins</Text>
                            <Text style={{ fontFamily: 'BentonSans Regular', color: '#3B3B3B', fontSize: 14 }}>Your Order Just Arrived!</Text>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'BentonSans Regular', color: '#3B3B3B',marginTop:hp(2)}}>20:00</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: hp(10), flexDirection: 'row', justifyContent: 'space-between', paddingRight: wp(5), width: wp(90), borderRadius: 20, marginTop: hp(3), elevation: 7, backgroundColor: 'white' }}>
                    <Image style={{ height: 60, width: 60, marginLeft: wp(3), marginTop: hp(1) }} source={require('../../assets/icons/Profile3.png')} />
                    <View style={{ width: wp(70), paddingHorizontal: wp(5), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent:'space-evenly' }}>
                            <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>Leslie Alexander</Text>
                            <Text style={{ fontFamily: 'BentonSans Regular', color: '#3B3B3B', fontSize: 14 }}>Your Order Just Arrived!</Text>
                        </View>
                        <Text style={{ fontSize: 14, fontFamily: 'BentonSans Regular', color: '#3B3B3B',marginTop:hp(2) }}>20:00</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Message;