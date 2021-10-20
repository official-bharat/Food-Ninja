import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, Image , TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Payments = () => {
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
            <Text style={{ fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(2), paddingLeft: wp(7) }}>Payment Method</Text>
            <Text style={{ paddingTop: hp(2), fontSize: 12, fontFamily: 'BentonSans Book', paddingLeft: wp(7) }}>This data will be displayed in your account</Text>
            <Text style={{ paddingTop: hp(0.6), fontSize: 12, fontFamily: 'BentonSans Book', paddingLeft: wp(7) }}>profile for security</Text>
            <View style={{ alignItems: 'center', flex: 1.5,paddingTop:hp(2) ,justifyContent:'space-evenly' }}>
                <TouchableOpacity style={{elevation:10,backgroundColor:'white',paddingHorizontal:wp(32),borderRadius:20,paddingVertical:hp(2.5)}}>
                    <Image style={{height:hp(3.3),width:wp(26)}} source={require('../../assets//icons/Paypal.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{elevation:10,backgroundColor:'white',paddingHorizontal:wp(38),borderRadius:20,paddingVertical:hp(3.2)}}>
                    <Image style={{height:hp(2),width:wp(15)}} source={require('../../assets//icons/Visa.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{elevation:10,backgroundColor:'white',paddingHorizontal:wp(34),borderRadius:20,paddingVertical:hp(2.4)}}>
                    <Image style={{height:hp(3.8),width:wp(22)}} source={require('../../assets//icons/Payoneer.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', flex: 0.9, paddingTop: hp(20), justifyContent: 'center' }}>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20 }}
                >
                    <TouchableOpacity onPress={() => navigate("Camera")}>
                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(15), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/* <Button
                    mode="contained"
                    onPress={() => navigate("Camera")}
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

export default Payments;