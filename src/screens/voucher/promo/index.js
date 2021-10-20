import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Promo = () => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../../assets/icons/Back.png')}
                size={45}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{
                fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(2),
                paddingLeft: wp(7)
            }}>Voucher Promo</Text>
            <View style={{ alignItems: 'center',marginTop:hp(3) }}>
                <ImageBackground style={{ height: 120, width: 320 }} source={require('../../../assets/icons/Voucher1.png')}>
                    <View style={{ paddingLeft: wp(45), paddingTop: hp(2) }}>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'BentonSans Bold', fontSize: 17 }}>Special Deal For</Text>
                        <Text style={{ color: '#FFFFFF', fontFamily: 'BentonSans Bold', fontSize: 17 }}>October</Text>
                        <Button
                            mode="outlined"
                            style={{
                                height: hp(5),
                                backgroundColor: "white",
                                width: wp(28),
                                marginTop: hp(2),
                                borderRadius: 10,
                                paddingTop: hp(0.5),
                                elevation: 10
                            }}
                            uppercase={false}
                        >
                            <Text style={{ color: '#53E88B', fontSize: 10, fontFamily: 'BentonSans Bold' }}>Order now</Text>
                        </Button>
                    </View>
                </ImageBackground>
                <ImageBackground style={{ height: 120, width: 320,marginTop:hp(3) }} source={require('../../../assets/icons/Voucher2.png')}>
                    <View style={{ paddingLeft: wp(45), paddingTop: hp(2) }}>
                        <Text style={{ color: '#6B3A5B', fontFamily: 'BentonSans Bold', fontSize: 17 }}>Special Deal For</Text>
                        <Text style={{ color: '#6B3A5B', fontFamily: 'BentonSans Bold', fontSize: 17 }}>October</Text>
                        <Button
                            mode="outlined"
                            style={{
                                height: hp(5),
                                backgroundColor: "white",
                                width: wp(28),
                                marginTop: hp(2),
                                borderRadius: 10,
                                paddingTop: hp(0.5),
                                elevation: 10
                            }}
                            uppercase={false}
                        >
                            <Text style={{ color: '#6B3A5B', fontSize: 10, fontFamily: 'BentonSans Bold' }}>Order now</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </View>

            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', paddingTop: hp(28) }}>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20 }}
                >
                    <TouchableOpacity onPress={()=>navigate('Notify')}>
                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(33), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Check out</Text>
                    </TouchableOpacity>
                </LinearGradient>

            </View>
        </ImageBackground>
    )
}

export default Promo;