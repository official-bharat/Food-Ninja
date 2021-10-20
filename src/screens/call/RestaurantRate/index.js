import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const RestoRate = () => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../../assets/icons/Pattern.png')}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ height: 180, width: 185, marginTop: hp(18) }} source={require('../../../assets/icons/Restorate.png')} />
                    <Text style={{ fontFamily: 'BentonSans Bold', marginTop: hp(6), fontSize: 25 }}>Thank You!</Text>
                    <Text style={{ fontFamily: 'BentonSans Bold', marginTop: hp(0.5), fontSize: 25 }}>Enjoy Your Meal</Text>
                    <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14, color: '#3B3B3B', marginTop: hp(2) }}>Please Rate Your Last Driver</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: wp(10), paddingTop: hp(4) }}>
                    <Image style={{ height: 30, width: 30 }} source={require('../../../assets/icons/Star.png')} />
                    <Image style={{ height: 30, width: 30 }} source={require('../../../assets/icons/Star.png')} />
                    <Image style={{ height: 40, width: 40, bottom: 5 }} source={require('../../../assets/icons/Star2.png')} />
                    <Image style={{ height: 30, width: 30 }} source={require('../../../assets/icons/Star3.png')} />
                    <Image style={{ height: 30, width: 30 }} source={require('../../../assets/icons/Star3.png')} />
                </View>
                <TextInput
                    mode="outlined"
                    theme={{ roundness: 15 }}
                    left={<TextInput.Icon color="#53E88B" name={require('../../../assets/icons/edit.png')} />}
                    placeholder="Leave feedback"
                    style={{
                        marginHorizontal: wp(7),
                        backgroundColor: "white",
                        fontFamily: 'BentonSans Regular',
                        fontSize: 14,
                        marginTop: hp(8)
                    }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp(2), paddingHorizontal: wp(7) }}>
                    <LinearGradient colors={["#53E88B", "#15BE77"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ borderRadius: 20, width: wp(62), height: hp(8) }}
                    >
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: hp(8) }}>
                            <Text style={{ fontFamily: 'BentonSans Bold', color: 'white', fontSize: 14 }}>Submit</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity onPress={() => navigate('Promos')} style={{ alignItems: 'center', height: hp(8), width: wp(20), justifyContent: 'center', borderRadius: 15, elevation: 7, marginBottom: hp(2), backgroundColor: 'white' }}>
                        <Text style={{ fontFamily: 'BentonSans Bold', color: '#15BE77', fontSize: 14 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default RestoRate