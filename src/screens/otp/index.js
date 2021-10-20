import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Verification = () => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../assets/icons/Pattern4.png')}>
            <IconButton
                onPress={() => navigate("Preview")}
                icon={require('../../assets/icons/Back.png')}
                size={45}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 25, paddingLeft: wp(5), paddingTop: hp(2) }}>Enter 4-digit</Text>
            <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 25, paddingLeft: wp(5), paddingTop: hp(0.6) }}>Verification code</Text>
            <Text style={{ fontFamily: 'BentonSans Book', fontSize: 12, paddingLeft: wp(5), paddingTop: hp(4) }}>Code send to +6282045****.This code will</Text>
            <Text style={{ fontFamily: 'BentonSans Book', fontSize: 12, paddingLeft: wp(5), paddingTop: hp(0.8) }}>expired in 01:30</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: hp(7) }}>
                <TextInput
                    mode="outlined"
                    theme={{ roundness: 20 }}
                    keyboardType="phone-pad"
                    maxLength={1}
                // style={{height:hp(10),width:wp(85) ,fontSize:33,fontFamily:'BentonSans Medium'}}
                /><TextInput
                    mode="outlined"
                    theme={{ roundness: 20 }}
                    keyboardType="phone-pad"
                    maxLength={1}
                // style={{height:hp(10),width:wp(85) ,fontSize:33,fontFamily:'BentonSans Medium'}}
                /><TextInput
                    mode="outlined"
                    theme={{ roundness: 20 }}
                    keyboardType="phone-pad"
                    maxLength={1}
                // style={{height:hp(10),width:wp(85) ,fontSize:33,fontFamily:'BentonSans Medium'}}
                /><TextInput
                    mode="outlined"
                    theme={{ roundness: 20 }}
                    keyboardType="phone-pad"
                    maxLength={1}
                // style={{height:hp(10),width:wp(85) ,fontSize:33,fontFamily:'BentonSans Medium'}}
                />
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', paddingTop: hp(33) }}>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20 }}
                >
                    <TouchableOpacity onPress={() => navigate("Forget")}>
                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(15), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/* <Button
                    mode="contained"
                    onPress={() => navigate('Forget')}
                    style={{
                        height: hp(7.5),
                        backgroundColor: "#53E88B",
                        width: wp(45), paddingTop: hp(1),
                        borderRadius: 20
                    }}
                    uppercase={false}
                >
                    <Text style={{ fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
                </Button> */}
            </View>
        </ImageBackground>
    )
}

export default Verification;