import React from 'react';
import { View, Image, ImageBackground  , TouchableOpacity} from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Resetsuccess = () => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: 'white' }} source={require('../../assets/icons/Pattern.png')}>
            <View style={{ flex: 2, alignItems: 'center' }}>
                <Image style={{ height: 170, width: 180, marginTop: hp(25) }} source={require('../../assets/icons/Congrats.png')} />
                <Text style={{ fontFamily: 'BentonSans Bold', paddingTop: hp(3), fontSize: 30, color: '#53E88B' }}>Congrats!</Text>
                <Text style={{ fontFamily: 'BentonSans Bold', paddingTop: hp(2), fontSize: 23 }}>Password reset succesful</Text>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20 ,marginTop:hp(24) }}
                >
                    <TouchableOpacity onPress={() => navigate("Homepage")}>
                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(15), paddingVertical: hp(2.6), fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Back</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/* <Button mode="contained"
                    uppercase={false}
                    style={{ borderRadius: 15, marginTop: hp(25), backgroundColor: '#53E88B' }}
                    contentStyle={{ height: hp(7.5), width: wp(45) }}>
                    <Text style={{ fontFamily: 'BentonSans Bold', color: 'white', fontSize: 16 }}>Back</Text>
                </Button> */}
            </View>
        </ImageBackground>
    )
}
export default Resetsuccess;