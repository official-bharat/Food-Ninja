import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, Image ,TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Setlocation = () => {
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
            <Text style={{ fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(2), paddingLeft: wp(7) }}>Set Your Location</Text>
            <Text style={{ paddingTop: hp(2), fontSize: 12, fontFamily: 'BentonSans Book', paddingLeft: wp(7) }}>This data will be displayed in your account</Text>
            <Text style={{ paddingTop: hp(0.8), fontSize: 12, fontFamily: 'BentonSans Book', paddingLeft: wp(7) }}>profile fro security</Text>
            <View style={{
                flex: 2, marginTop: hp(4), borderRadius: 20,elevation:30,
                backgroundColor: 'white', marginHorizontal: wp(5),

            }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: hp(1.5), paddingTop: hp(2.5) }}>
                    <Image style={{ height: 45, width: 45 }} source={require('../../assets/icons/mapp.png')} />
                    <Text style={{ fontSize: 15, paddingTop: hp(2), paddingLeft: wp(3), fontFamily: 'BentonSans Medium' }}>Your Location</Text>
                </View>
                <View style={{ alignItems: 'center', paddingTop: hp(3) }}>
                    <Button
                        mode="contained"
                        style={{
                            height: hp(9),
                            backgroundColor: "#F6F6F6",
                            width: wp(83), paddingTop: hp(2),
                            borderRadius: 20
                        }}
                        contentStyle={{}}
                        uppercase={false}
                    >
                        <Text style={{ fontSize: 14 }}>Set Location</Text>
                    </Button>
                </View>
            </View>
            <View style={{ alignItems: 'center', flex: 2, marginTop: hp(28), justifyContent: 'center' }}>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20 }}
                >
                    <TouchableOpacity onPress={() => navigate("Congrats")}>
                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(15), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Next</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/* <Button
                    mode="contained"
                    onPress={() => navigate("Congrats")}
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

export default Setlocation;