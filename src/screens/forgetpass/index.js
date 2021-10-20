import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, Image , TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Forget = () => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../assets/icons/Back.png')}
                size={45}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 25, paddingLeft: wp(5), paddingTop: hp(2) }}>Forgot password</Text>
            <Text style={{ fontFamily: 'BentonSans Book', fontSize: 12, paddingLeft: wp(5), paddingTop: hp(2) }}>Select which contact details should we</Text>
            <Text style={{ fontFamily: 'BentonSans Book', fontSize: 12, paddingLeft: wp(5), paddingTop: hp(0.8) }}>use to reset your password</Text>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', elevation:10,borderRadius: 25, height: hp(17), marginTop: hp(5), marginHorizontal: wp(4) }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: wp(4) }}>
                    <Image style={{ height: 45, width: 45 }} source={require('../../assets/icons/Message1.png')} />
                </View>
                <View style={{ paddingTop: hp(4), paddingLeft: wp(4) }}>
                    <Text style={{ fontFamily: 'BentonSans Regular' }}>Via sms:</Text>
                    <TextInput
                        mode="outlined"
                        style={{ height: hp(6), width: wp(60), marginTop: hp(1) }}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', elevation:10,borderRadius: 25, marginTop: hp(3), backgroundColor: 'white', height: hp(13), marginHorizontal: wp(4) }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: wp(4) }}>
                    <Image style={{ height: 45, width: 45 }} source={require('../../assets/icons/Email.png')} />
                </View>
                <View style={{ paddingTop: hp(1.5), paddingLeft: wp(4) }}>
                    <Text style={{ fontFamily: 'BentonSans Regular' }}>Via sms:</Text>
                    <TextInput
                        mode="outlined"
                        style={{ height: hp(6), width: wp(60), marginTop: hp(1) }}
                    />
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: hp(24) }}>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20 }}
                >
                    <TouchableOpacity onPress={() => navigate("Resetpass")}>
                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(15), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/* <Button
                    mode="contained"
                    onPress={() => navigate('Resetpass')}
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

export default Forget;