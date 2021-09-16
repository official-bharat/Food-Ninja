import React from 'react'
import { Text, Button, TextInput,IconButton} from 'react-native-paper';
import { View, ImageBackground } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Bioform = () => {
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: 'white' }} source={require('../../assets/icons/Pattern4.png')}>
            <IconButton
             icon={require('../../assets/icons/Back.png')}
             size={45}
             color="red"
             style={{paddingTop:hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{ fontSize: 25, fontWeight: 'bold', paddingTop: hp(3), paddingLeft: wp(7) }}>Fill in your bio to get{"\n"}started</Text>
            <Text style={{ paddingTop: hp(2), paddingLeft: wp(7) }}>This data will be displayed in your account{"\n"}profile for security</Text>
            <View style={{ paddingHorizontal: wp(7) }}>
                <TextInput
                    placeholder="First Name"
                    mode='outlined'
                    style={{ marginTop: hp(3), backgroundColor: 'white', marginBottom: hp(1.5), height: hp(8) }}
                />
                <TextInput
                    placeholder="Last Name"
                    mode='outlined'
                    style={{ borderRadius: 20, backgroundColor: 'white', marginBottom: hp(1.5) }}
                />
                <TextInput
                    placeholder="Mobile Number"
                    mode='outlined'
                    secureTextEntry={true}
                    style={{ borderRadius: 20, backgroundColor: 'white' }}
                />
            </View>
            <View style={{ alignItems: 'center',flex:2 , paddingTop:hp(15),justifyContent:'center' }}>
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

export default Bioform;