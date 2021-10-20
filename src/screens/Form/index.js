import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground , TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Bioform = () => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: 'white' }} source={require('../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../assets/icons/Back.png')}
                size={45}
                color="red"
                onPress={() => navigate("Sign-up")}
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{ fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(2), paddingLeft: wp(7) }}>Fill in your bio to get</Text>
            <Text style={{ fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(0.3), paddingLeft: wp(7) }}>started</Text>
            <Text style={{ paddingTop: hp(4), paddingLeft: wp(7), fontFamily: 'BentonSans Book', fontSize: 12 }}>This data will be displayed in your account</Text>
            <Text style={{ marginTop: hp(0.6), paddingLeft: wp(7), fontFamily: 'BentonSans Book', fontSize: 12 }}>profile for security</Text>
            <View style={{ paddingHorizontal: wp(7) }}>
                <TextInput
                    placeholder="First Name"
                    mode='outlined'
                    theme={{ roundness: 20 }}
                    style={{
                        marginTop: hp(3), backgroundColor: 'white',
                        marginBottom: hp(1.5), height: hp(7.6)
                    }}
                />
                <TextInput
                    placeholder="Last Name"
                    mode='outlined'
                    theme={{ roundness: 20 }}
                    style={{ backgroundColor: 'white',marginBottom: hp(1.5), height: hp(7.6) }}
                />
                <TextInput
                    placeholder="Mobile Number"
                    mode='outlined'
                    theme={{ roundness: 20 }}
                    keyboardType='phone-pad'
                    style={{ backgroundColor: 'white', height: hp(7.6) }}
                />
            </View>
            <View style={{ alignItems: 'center', flex: 2, paddingTop: hp(17), justifyContent: 'center' }}>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20}}
                >
                    <TouchableOpacity onPress={() => navigate("Payment")}>
                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(15), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/* <Button
                    mode="contained"
                    onPress={() => navigate("Payment")}
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

export default Bioform;