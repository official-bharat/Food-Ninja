import React, { useState } from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableHighlight, FlatList, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/core';

const Findfood = () => {
    const {navigate} = useNavigation();
    const [data, setData] = useState(
        [
            {
                id: '1',
                Image: require('../../../assets/icons/Order.png'),
                title: 'Spacy fresh crab',
                name: 'Waroenk kita',
                rate: '$ 35',
                text: 'Process'
            },
            {
                id: '2',
                Image: require('../../../assets/icons/Order1.png'),
                title: 'Spacy fresh crab',
                name: 'Waroenk kita',
                rate: '$ 35',
                text: 'Process'
            },
            {
                id: '3',
                Image: require('../../../assets/icons/Order2.png'),
                title: 'Spacy fresh crab',
                name: 'Waroenk kita',
                rate: '$ 35',
                text: 'Process'
            },


        ]
    )
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../../assets/icons/Back.png')}
                size={45}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 31, fontFamily: 'BentonSans Bold', paddingTop: hp(2), paddingLeft: wp(6) }}>Find Your</Text>
                    <Text style={{ fontSize: 31, fontFamily: 'BentonSans Bold', paddingLeft: wp(6) }}>Favorite Food</Text>
                </View>
                <TouchableOpacity style={{ marginTop: hp(2), elevation: 10, paddingLeft: hp(1.6), paddingTop: hp(1), borderRadius: 15, backgroundColor: 'white', height: hp(5.5), width: wp(12), marginLeft: wp(15) }}>
                    <Image style={{ height: 25, width: 20 }} source={require('../../../assets/icons/Notifiaction.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: hp(2), justifyContent: 'space-evenly', paddingHorizontal: wp(3) }}>
                <TextInput
                    placeholder="What do you want to order?"
                    mode='outlined'
                    left={<TextInput.Icon color="#DA6317" name={require('../../../assets/icons/Search.png')} />}
                    placeholderTextColor="#DA6317"
                    theme={{ roundness: 20 }}
                    style={{ backgroundColor: '#F9A84D', marginBottom: hp(1.5), width: wp(70), height: hp(7.6) }}
                />
                <TouchableOpacity style={{ marginTop: hp(0.5) }} onPress={() => navigate("filters")}>
                    <Image style={{ height: 63, width: 63 }} source={require('../../../assets/icons/Filter.png')} />
                </TouchableOpacity>
            </View>
            < FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', elevation: 7, borderRadius: 20, paddingLeft: wp(3), alignItems: 'center', backgroundColor: 'white', height: hp(13), width: wp(93), marginVertical: 10 }}>
                            <Image style={{ height: 65, width: 65 }} source={item.Image} />
                            <View style={{ flexDirection: 'column', paddingLeft: wp(4) }}>
                                <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>{item.title}</Text>
                                <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14 }}>{item.name}</Text>
                                <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 19, color: '#53E88B' }}>{item.rate}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingLeft: wp(6) }}>
                                <LinearGradient colors={["#53E88B", "#15BE77"]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{ borderRadius: 20 }}
                                >
                                    <TouchableOpacity>
                                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(6), paddingVertical: hp(1.2), fontFamily: 'BentonSans Medium', color: 'white', fontSize: 12 }}>{item.text}</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                )}
            />
            <View style={{ alignItems: 'center',bottom:hp(2) }}>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20 }}
                >
                    <TouchableOpacity onPress={()=>navigate('Findloc')}>
                        <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(37), paddingVertical: hp(3), fontFamily: 'BentonSans Medium', color: 'white', fontSize: 12 }}>Check out</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </ImageBackground>
    )
}
export default Findfood;