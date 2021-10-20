import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Camera = () => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../assets/icons/Pattern4.png')}>
            <IconButton
                onPress={() => navigate("Payment")}
                icon={require('../../assets/icons/Back.png')}
                size={45}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{
                fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(2),
                paddingLeft: wp(7)
            }}>Upload Your Photo</Text>
            <Text style={{
                fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(0.6),
                paddingLeft: wp(7)
            }}>Profile</Text>
            <Text style={{ paddingTop: hp(2), fontSize: 12, fontFamily: 'BentonSans Book', paddingLeft: wp(7) }}>This data will be displayed in your account</Text>
            <Text style={{ paddingTop: hp(0.8), fontSize: 12, fontFamily: 'BentonSans Book', paddingLeft: wp(7) }}>profile fro security</Text>
            <View style={{ flex: 2, alignItems: 'center' }}>
                    <Image
                        style={{ height: hp(30), width: wp(100) }}
                        source={require('../../assets/icons/Gallery.png')} />
                <Image
                    style={{ height: hp(30), width: wp(100), marginTop: hp(-10) }}
                    source={require('../../assets/icons/Camerabtn.png')} />
            </View>
            <View style={{ alignItems: 'center', flex: 2, paddingTop: hp(28), justifyContent: 'center' }}>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20 }}
                >
                    <TouchableOpacity onPress={() => navigate("Preview")}>
                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(15), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/* <Button
                    mode="contained"
                    onPress={() => navigate("Preview")}
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

export default Camera;