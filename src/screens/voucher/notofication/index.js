import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

const Notifications = () => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../../assets/icons/Back.png')}
                size={45}
                color="red"
                onPress={()=>navigate('Order')}
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{
                fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(2),
                paddingLeft: wp(7)
            }}>Notification</Text>
            <View style={{ alignItems: 'center', paddingTop: hp(4) }}>
                <View style={{ height: hp(13), flexDirection: 'row', width: wp(90), alignItems: 'center', justifyContent: 'space-around', borderRadius: 15, backgroundColor: 'white', elevation: 7 }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../../assets/icons/Success.png')} />
                    <View>
                        <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>Your order has been taken by</Text>
                        <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>the driver</Text>
                        <Text style={{ fontFamily: 'BentonSans Regular', color: '#3B3B3B', fontSize: 14 }}>Recently</Text>
                    </View>
                </View>
                <View style={{ height: hp(10), width: wp(90), alignItems: 'center', justifyContent: 'space-around', marginTop: hp(3), flexDirection:'row',borderRadius: 15, backgroundColor: 'white', elevation: 7 }}>
                    <Image style={{ height: 52, width: 55 }} source={require('../../../assets/icons/Topup.png')} />
                    <View>
                        <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>Topup for $100 was successful</Text>
                        <Text style={{ fontFamily: 'BentonSans Regular', color: '#3B3B3B', fontSize: 14,marginTop:hp(0.5) }}>10:00 Am</Text>
                    </View>
                </View>
                <View style={{ height: hp(10), width: wp(90), alignItems: 'center', justifyContent: 'space-around', marginTop: hp(3), flexDirection:'row',borderRadius: 15, backgroundColor: 'white', elevation: 7 }}>
                    <Image style={{ height: 52, width: 50 }} source={require('../../../assets/icons/Cancel.png')} />
                    <View>
                        <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>Your order has been canceled</Text>
                        <Text style={{ fontFamily: 'BentonSans Regular', color: '#3B3B3B', fontSize: 14,marginTop:hp(0.5) }}>22 july 2021</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Notifications;