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



const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: hp(105),
        width: wp(100),
        justifyContent: 'space-between',

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
const FindLocation = () => {
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
                <TextInput
                    placeholder="Find Your Location"
                    placeholderTextColor="#DA6317"
                    mode='outlined'
                    theme={{ roundness: 20 }}
                    left={<TextInput.Icon color="#DA6317" name={require('../../../assets/icons/Search.png')} />}
                    style={{ height: hp(7.6), marginTop: hp(3), marginHorizontal: wp(5), fontSize: 12 }}
                />
                <View style={{ alignItems: 'center' }}>
                    <View style={{ paddingTop: hp(4), height: hp(26), width: wp(93), bottom: 20, borderRadius: 20, elevation: 7, backgroundColor: 'white', paddingHorizontal: wp(3) }}>
                        <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14 }}>Your Location</Text>
                        <View style={{ paddingTop: hp(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Image style={{ height: 40, width: 40 }} source={require('../../../assets/icons/Location.png')} />
                            <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>4517 Washington Ave. Manchester,{'\n'}kentucky 47444</Text>
                        </View>
                        <LinearGradient colors={["#53E88B", "#15BE77"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ borderRadius: 20, marginTop: hp(2) }}
                        >
                            <TouchableOpacity onPress={() => navigate('Track')}>
                                <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(32), paddingVertical: hp(3), fontFamily: 'BentonSans Medium', color: 'white', fontSize: 12 }}>Set Location</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FindLocation;