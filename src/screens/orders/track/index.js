
import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableHighlight, FlatList, Text } from 'react-native';
import MapView from 'react-native-maps';
import { TextInput } from "react-native-paper";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/core";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from "react-native-linear-gradient";
import { IconButton } from "react-native-paper";



const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: hp(100),
        width: wp(100),
        justifyContent: 'space-between',

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
const Trackodr = () => {
    const { navigate } = useNavigation();
    return (
        <View style={{ paddingHorizontal: wp(4), paddingTop: hp(2) }}>

            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >

                </MapView>
                <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'white', marginTop: hp(3), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginLeft: wp(5) }}>
                    <Image style={{ height: 20, width: 10 }} source={require('../../../assets/icons/VectorIcon.png')} />
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <ImageBackground source={require('../../../assets/icons/Track.png')} style={{ paddingTop: hp(2), height: hp(30), width: wp(90), bottom: hp(3), borderRadius: 20, elevation: 7, backgroundColor: 'white',  paddingLeft: wp(4)}}>
                            <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 17 }}>Track Orders</Text>
                            <View style={{ height: hp(10), flexDirection: 'row', alignItems: 'center', borderRadius: 15, paddingLeft: wp(3), marginTop: hp(3), width: wp(83), backgroundColor: 'white' }}>
                                <Image style={{ height: 63, width: 63 }} source={require('../../../assets/icons/Profile1.png')} />
                                <View style={{ paddingLeft: wp(4) }}>
                                    <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>Mr Kemples</Text>
                                    <View style={{ flexDirection: 'row', marginTop: hp(1) }}>
                                        <Image style={{ height: 15, width: 15 }} source={require('../../../assets/icons/maps.png')} />
                                        <Text style={{ fontFamily: 'BentonSans Regular', marginLeft: wp(2), fontSize: 14 }}>25 minutes on the way</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ paddingTop: hp(1), flexDirection: "row" }}>
                                <TouchableOpacity onPress={() => navigate('Product')} style={{ height: hp(9), borderRadius: 15, width: wp(60), justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={{ height: 22, width: 22 }} source={require('../../../assets/icons/Calls.png')} />
                                        <Text style={{ fontSize: 14, color: '#53E88B', marginLeft: wp(2) }}>Call</Text>
                                    </View>
                                </TouchableOpacity>
                                <LinearGradient colors={["#53E88B", "#15BE77"]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{ borderRadius: 20, marginLeft: wp(3) }}
                                >
                                    <TouchableOpacity onPress={() => navigate('Detailmenu')} style={{ height: hp(9), width: wp(20), justifyContent: 'center', alignItems: 'center' }}>
                                        <ImageBackground style={{ height: 25, width: 28, paddingTop: hp(0.4), alignItems: 'center' }} source={require('../../../assets/icons/Path.png')}>
                                            <Image style={{ height: 10, width: 20 }} source={require('../../../assets/icons/Path1.png')} />
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </ImageBackground>
                </View>
            </View>
        </View>
    )
}

export default Trackodr;