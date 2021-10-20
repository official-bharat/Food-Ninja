import React from "react";
import { View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Popular = () => {
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: 'white' }} source={require('../../assets/icons/Pattern4.png')}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 31, fontFamily: 'BentonSans Bold', paddingTop: hp(7), paddingLeft: wp(6) }}>Find Your{'\n'}Favorite Food</Text>
                <TouchableOpacity style={{ marginTop: hp(7.5), elevation: 10, paddingLeft: hp(1.6), paddingTop: hp(1), borderRadius: 15, backgroundColor: 'white', height: hp(5.5), width: wp(12), marginLeft: wp(15) }}>
                    <Image style={{ height: 25, width: 20 }} source={require('../../assets/icons/Notifiaction.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: hp(2), justifyContent: 'space-evenly', paddingHorizontal: wp(3) }}>
                <TextInput
                    placeholder="What do you want to order?"
                    mode='outlined'
                    left={<TextInput.Icon color="#DA6317" name={require('../../assets/icons/Search.png')} />}
                    placeholderTextColor="#DA6317"
                    theme={{ roundness: 20 }}
                    style={{ backgroundColor: 'white', marginBottom: hp(1.5), width: wp(70), height: hp(7.6) }}
                />
                <TouchableOpacity style={{ marginTop: hp(0.5) }}>
                    <Image style={{ height: 63, width: 63 }} source={require('../../assets/icons/Filter.png')} />
                </TouchableOpacity>
            </View>
            <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 15, marginLeft: wp(7) }}>Popular Restaurent</Text>
            <ScrollView style={{flexDirection:'column'}}>
                <View style={{ flexDirection: 'column', paddingTop: hp(1) }}>
                    <TouchableOpacity style={{ elevation: 7, height: hp(23), marginLeft: wp(7), flexDirection: 'column', alignItems: 'center', paddingTop: hp(1.5), borderRadius: 20, width: wp(37), backgroundColor: 'white' }}>
                        <Image style={{ height: 85, width: 110 }} source={require('../../assets/icons/Resturant1.png')} />
                        <Text style={{ fontFamily: 'BentonSans Bold', marginTop: hp(1.8), fontSize: 16 }}>Vegan Resto</Text>
                        <Text style={{ fontFamily: 'BentonSans Book', fontSize: 16, marginTop: hp(1) }}>12 Mins</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ elevation: 7, height: hp(23), marginTop: hp(2), marginLeft: wp(7), flexDirection: 'column', paddingTop: hp(1.5), alignItems: 'center', borderRadius: 20, width: wp(37), backgroundColor: 'white' }}>
                        <Image style={{ height: 85, width: 110 }} source={require('../../assets/icons/Restaurant2.png')} />
                        <Text style={{ fontFamily: 'BentonSans Bold', marginTop: hp(1.8), fontSize: 16 }}>Healthy Food</Text>
                        <Text style={{ fontFamily: 'BentonSans Book', fontSize: 16, marginTop: hp(1) }}>8 Mins</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: hp(23), marginTop: hp(2), marginLeft: wp(7), flexDirection: 'column', paddingTop: hp(1.5), alignItems: 'center', elevation: 7, borderRadius: 20, width: wp(37), backgroundColor: 'white' }}>
                        <Image style={{ height: 85, width: 90 }} source={require('../../assets/icons/Restaurant3.png')} />
                        <Text style={{ fontFamily: 'BentonSans Bold', marginTop: hp(1.8), fontSize: 16 }}>Vegan Resto</Text>
                        <Text style={{ fontFamily: 'BentonSans Book', fontSize: 16, marginTop: hp(1) }}>12 Mins</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', paddingTop: hp(1) }}>
                    <TouchableOpacity style={{ elevation: 7, height: hp(23), marginLeft: wp(7), flexDirection: 'column', alignItems: 'center', paddingTop: hp(1.5), borderRadius: 20, width: wp(37), backgroundColor: 'white' }}>
                        <Image style={{ height: 85, width: 110 }} source={require('../../assets/icons/Resturant1.png')} />
                        <Text style={{ fontFamily: 'BentonSans Bold', marginTop: hp(1.8), fontSize: 16 }}>Vegan Resto</Text>
                        <Text style={{ fontFamily: 'BentonSans Book', fontSize: 16, marginTop: hp(1) }}>12 Mins</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ elevation: 7, height: hp(23), marginTop: hp(2), marginLeft: wp(7), flexDirection: 'column', paddingTop: hp(1.5), alignItems: 'center', borderRadius: 20, width: wp(37), backgroundColor: 'white' }}>
                        <Image style={{ height: 85, width: 110 }} source={require('../../assets/icons/Restaurant2.png')} />
                        <Text style={{ fontFamily: 'BentonSans Bold', marginTop: hp(1.8), fontSize: 16 }}>Healthy Food</Text>
                        <Text style={{ fontFamily: 'BentonSans Book', fontSize: 16, marginTop: hp(1) }}>8 Mins</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: hp(23), marginTop: hp(2), marginLeft: wp(7), flexDirection: 'column', paddingTop: hp(1.5), alignItems: 'center', elevation: 7, borderRadius: 20, width: wp(37), backgroundColor: 'white' }}>
                        <Image style={{ height: 85, width: 90 }} source={require('../../assets/icons/Restaurant3.png')} />
                        <Text style={{ fontFamily: 'BentonSans Bold', marginTop: hp(1.8), fontSize: 16 }}>Vegan Resto</Text>
                        <Text style={{ fontFamily: 'BentonSans Book', fontSize: 16, marginTop: hp(1) }}>12 Mins</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>

    )
}

export default Popular;