import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground , Image } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Payments = () => {
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: 'white' }} source={require('../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../assets/icons/Back.png')}
                size={45}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{ fontSize: 25, fontWeight: 'bold', paddingTop: hp(3), paddingLeft: wp(7) }}>Payment Method</Text>
            <Text style={{ paddingTop: hp(2), paddingLeft: wp(7) }}>This data will be displayed in your account{"\n"}profile for security</Text>
            <View style={{flex:2 ,justifyContent:'center',paddingTop:hp(10) ,alignItems:'center'}}>
                <Button
                    mode="outlined"
                    color="black"
                    style={{ height: hp(7.5),
                        borderRadius: 20, 
                        width: wp(85),
                       
                    }}
                >
                    <Image style={{ height:100, width: 100 }} source={require('../../assets/icons/paypal.png')} />
                </Button>
                <Button
                    mode="outlined"
                    color="black"
                    style={{ height: hp(7.5),
                        borderRadius: 20, 
                        width: wp(85) }}
                >
                    <Image style={{ height:30, width: 40 }} source={require('../../assets/icons/visa.png')} />
                </Button>
                <Button
                    mode="outlined"
                    color="black"
                    style={{ height: hp(7.5),
                        borderRadius: 20, 
                        width: wp(85) }}
                >
                    <Image source={require('../../assets/icons/visa.png')} />
                </Button>
            </View>
            <View style={{ alignItems: 'center', flex: 3, paddingTop: hp(15), justifyContent: 'center' }}>
                <Button
                    mode="contained"
                    style={{
                        height: hp(7.5),
                        backgroundColor: "#53E88B",
                        width: wp(45), paddingTop: hp(1),
                        borderRadius: 20
                    }}
                    uppercase={false}
                >
                    Next
                </Button>
            </View>
        </ImageBackground>
    )
}

export default Payments;