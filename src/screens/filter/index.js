import React from "react";
import { View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Text, TextInput, IconButton } from 'react-native-paper';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const Filter = () => {
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: 'white' }} source={require('../../assets/icons/Pattern4.png')}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 31, fontFamily: 'BentonSans Bold', paddingTop: hp(7), paddingLeft: wp(6) }}>Find Your{'\n'}Favorite Food</Text>
                <TouchableOpacity style={{ marginTop: hp(7.5), elevation: 10, paddingLeft: hp(1.6), paddingTop: hp(1), borderRadius: 15, backgroundColor: 'white', height: hp(5.5), width: wp(12), marginLeft: wp(15) }}>
                    <Image style={{ height: 25, width: 20 }} source={require('../../assets/icons/Notifiaction.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: hp(2), alignItems: 'center', paddingHorizontal: wp(3) }}>
                <TextInput
                    placeholder="What do you want to order?"
                    mode='outlined'
                    left={<TextInput.Icon color="#DA6317" name={require('../../assets/icons/Search.png')} />}
                    placeholderTextColor="#DA6317"

                    theme={{ roundness: 20 }}
                    style={{ backgroundColor: 'white', marginBottom: hp(1.5), width: wp(87), height: hp(7), backgroundColor: "#F9A84D" }}
                />
            </View>
            <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 15, marginTop: hp(0.8), marginLeft: wp(7) }}>Type</Text>
            <View style={{ flexDirection: 'row', paddingTop: hp(2), paddingHorizontal: wp(7) }}>
                <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 12, width: wp(30), paddingVertical: hp(2), color: '#DA6317', borderRadius: 15, textAlign: 'center', backgroundColor: '#FEAD1D' }}
                >Restaurant</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', marginLeft: wp(5), fontSize: 12, width: wp(25), paddingVertical: hp(2), color: '#DA6317', borderRadius: 15, textAlign: 'center', backgroundColor: '#FEAD1D' }}
                >Menu</Text>
            </View>
            <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 15, marginTop: hp(3), marginLeft: wp(7) }}>Location</Text>
            <View style={{ flexDirection: 'row', paddingTop: hp(2), paddingHorizontal: wp(7) }}>
                <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 12, width: wp(20), paddingVertical: hp(2), color: '#DA6317', borderRadius: 15, textAlign: 'center', backgroundColor: '#FEAD1D' }}
                >1 Km</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', marginLeft: wp(5), fontSize: 12, width: wp(25), paddingVertical: hp(2), color: '#DA6317', borderRadius: 15, textAlign: 'center', backgroundColor: '#FEAD1D' }}
                >10 Km</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', marginLeft: wp(5), fontSize: 12, width: wp(25), paddingVertical: hp(2), color: '#DA6317', borderRadius: 15, textAlign: 'center', backgroundColor: '#FEAD1D' }}
                >10 Km</Text>
            </View>
            <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 15, marginTop: hp(3), marginLeft: wp(7) }}>Food</Text>
            <View style={{ flexDirection: 'row', paddingTop: hp(2), paddingHorizontal: wp(7) }}>
                <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 12, width: wp(20), paddingVertical: hp(2), color: '#DA6317', borderRadius: 15, textAlign: 'center', backgroundColor: '#FEAD1D' }}
                >Cake</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', marginLeft: wp(3), fontSize: 12, width: wp(25), paddingVertical: hp(2), color: '#DA6317', borderRadius: 15, textAlign: 'center', backgroundColor: '#FEAD1D' }}
                >Soup</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', marginLeft: wp(3), fontSize: 12, width: wp(35), paddingVertical: hp(2), color: '#DA6317', borderRadius: 15, textAlign: 'center', backgroundColor: '#FEAD1D' }}
                >Main Course</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: hp(3), paddingHorizontal: wp(7) }}>
                <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 12, width: wp(30), paddingVertical: hp(2), color: '#DA6317', borderRadius: 15, textAlign: 'center', backgroundColor: '#FEAD1D' }}
                >Appetizer</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', marginLeft: wp(3), fontSize: 12, width: wp(25), paddingVertical: hp(2), color: '#DA6317', borderRadius: 15, textAlign: 'center', backgroundColor: '#FEAD1D' }}
                >Dessert</Text>
            </View>
            <View style={{ alignItems: 'center', paddingTop: hp(15), justifyContent: 'center' }}>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20 }}
                >
                    <TouchableOpacity>
                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(36), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 14 }}>Search</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </ImageBackground>

    )
}

export default Filter;