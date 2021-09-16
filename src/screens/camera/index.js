import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, Image } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Camera = () => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../assets/icons/Back.png')}
                size={45}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{ fontSize: 25, fontWeight: 'bold', paddingTop: hp(3), paddingLeft: wp(7) }}>Upload Your Photo{"\n"}Profile</Text>
            <Text style={{ paddingTop: hp(2), paddingLeft: wp(7) }}>This data will be displayed in your account{"\n"}profile for security</Text>
            <View style={{ flex: 2,  alignItems: 'center' }}>
                <Image
                    style={{ height: 180, width: 400 }}
                    source={require('../../assets/icons/Gallery.png')} />
                <Image
                    style={{ height: 180, width: 400,marginTop:hp(-3) }}
                    source={require('../../assets/icons/Camerabtn.png')} />
            </View>
            <View style={{ alignItems: 'center', flex: 2, paddingTop: hp(25), justifyContent: 'center' }}>
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

export default Camera;