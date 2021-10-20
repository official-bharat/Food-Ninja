import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Reset = () => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../assets/icons/Back.png')}
                size={45}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{
                fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(2),
                paddingLeft: wp(7)
            }}>Reset your password</Text>
            <Text style={{
                fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(0.6),
                paddingLeft: wp(7)
            }}>here</Text>
            <Text style={{ paddingTop: hp(2), fontSize: 12, fontFamily: 'BentonSans Book', paddingLeft: wp(7) }}>Select which contact details should we</Text>
            <Text style={{ paddingTop: hp(0.8), fontSize: 12, fontFamily: 'BentonSans Book', paddingLeft: wp(7) }}>use to reset your password</Text>
            <View style={{ paddingHorizontal: wp(5), paddingVertical: hp(2) }}>
                <TextInput
                    placeholder="New Password"
                    mode='outlined'
                    theme={{ roundness: 20 }}
                    right={<TextInput.Icon style={{ paddingTop: hp(1) }} color='#53E88B' name={require('../../assets/icons/Eyeicon.png')} />}
                    style={{
                        marginTop: hp(3), backgroundColor: 'white',
                        height: hp(8)
                    }}
                />
                <TextInput
                    placeholder="Confirm Password"
                    mode='outlined'
                    theme={{ roundness: 20 }}
                    right={<TextInput.Icon style={{ paddingTop: hp(1) }} name={require('../../assets/icons/Vector.png')} />}
                    style={{
                        backgroundColor: 'white',
                        height: hp(8), marginTop: hp(2)
                    }}
                />
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', paddingTop: hp(22) }}>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20 }}
                >
                    <TouchableOpacity onPress={() => navigate("Resetcongo")}>
                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(15), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/* <Button
                    mode="contained"
                    onPress={() => navigate('Resetcongo')}
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

export default Reset;