import React, { useState } from 'react';
import { View, Image, ImageBackground, TouchableOpacity, ScrollView, FlatList, TextInput as Input } from 'react-native';
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabbar from '../../routes/Tabbar';
import Shoping from '../shopping/index';
import Message from '../message/index';
import Profile from '../Profile/index';

const Tab = createBottomTabNavigator();
const Tabs = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            Tabbar: {
                marginBottom: 20,
            }
        }}
            tabBar={props => <Tabbar {...props} />}
        >
            <Tab.Screen name="Home" component={Home} initialParams={{ icon: require('../../assets/icons/Home.png') }}
            />
            <Tab.Screen name="profile" component={Profile} initialParams={{ icon: require('../../assets/icons/IconProfile.png') }}
            />
            <Tab.Screen name="Shoping" component={Shoping} initialParams={{ icon: require('../../assets/icons/IconCart.png') }}
            />
            <Tab.Screen name="Chat" component={Message} initialParams={{ icon: require('../../assets/icons/Chat.png') }}
            />
        </Tab.Navigator>
    )
}

const Home = () => {
    const [data, setData] = useState(
        [
            {
                id: '1',
                Image: require('../../assets/icons/Resturant1.png'),
                text: 'Vegan Resto',
                time: '12 Mins',
                food: require('../../assets/icons/PhotoMenu.png'),
                dishes: 'Green Noddle',
                menu: 'NoodleHome',
                rate: '$5'
            },
            {
                id: '2',
                Image: require('../../assets/icons/Restaurant2.png'),
                text: 'Healthy Food',
                time: '8 Mins',
                food: require('../../assets/icons/Menu1.png'),
                dishes: 'Herbal Pancake',
                menu: 'NoodleHome',
                rate: '$5'
            },
            {
                id: '3',
                Image: require('../../assets/icons/Resturant1.png'),
                text: 'Vegan Resto',
                time: '12 Mins',
                food: require('../../assets/icons/Menu2.png'),
                dishes: 'Fruit Salad',
                menu: 'NoodleHome',
                rate: '$15'
            },
        ]
    )
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: 'white' }} source={require('../../assets/icons/Pattern4.png')}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 31, fontFamily: 'BentonSans Bold', paddingTop: hp(7), paddingLeft: wp(6) }}>Find Your{'\n'}Favorite Food</Text>
                <TouchableOpacity style={{ marginTop: hp(7.5), elevation: 10, paddingLeft: hp(1.6), paddingTop: hp(1), borderRadius: 15, backgroundColor: 'white', height: hp(5.5), width: wp(12), marginLeft: wp(15) }}>
                    <Image style={{ height: 25, width: 20 }} source={require('../../assets/icons/Notifiaction.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: hp(2), justifyContent: 'space-evenly', paddingHorizontal: wp(3) }}>
                <TextInput
                    placeholder="What do you want to order?"
                    mode='outlined'
                    left={<TextInput.Icon color="#DA6317" name={require('../../assets/icons/Search.png')} />}
                    placeholderTextColor="#DA6317"
                    theme={{ roundness: 20 }}
                    style={{ backgroundColor: '#F9A84D', marginBottom: hp(1.5), width: wp(70), height: hp(7.6) }}
                />
                <TouchableOpacity style={{ marginTop: hp(0.5) }} onPress={() => navigate("filters")}>
                    <Image style={{ height: 63, width: 63 }} source={require('../../assets/icons/Filter.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <ImageBackground style={{ height: 155, width: 325 }} source={require('../../assets/icons/Promo.png')}>
                        <View style={{ paddingLeft: wp(45), paddingTop: hp(3.7) }}>
                            <Text style={{ color: '#FFFFFF', fontFamily: 'BentonSans Bold', fontSize: 17 }}>Special Deal For</Text>
                            <Text style={{ color: '#FFFFFF', fontFamily: 'BentonSans Bold', fontSize: 17 }}>October</Text>
                            <Button
                                mode="outlined"
                                style={{
                                    height: hp(5),
                                    backgroundColor: "white",
                                    width: wp(25),
                                    marginTop: hp(2),
                                    borderRadius: 10,
                                    paddingTop: hp(0.5),
                                    elevation: 10
                                }}
                                uppercase={false}
                            >
                                <Text style={{ color: '#53E88B', fontSize: 10, fontFamily: 'BentonSans Bold' }}>Buy Now</Text>
                            </Button>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp(1) }}>
                    <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 15 }}>Nearest Restaurent</Text>
                    <TouchableOpacity onPress={() => navigate("Restaurant")}>
                        <Text style={{ fontFamily: 'BentonSans Book', marginLeft: wp(10), fontSize: 12, color: '#FF7C32', marginTop: hp(0.8) }}>View More</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    horizontal={true}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ height: hp(23), marginBottom: hp(2), marginLeft: wp(7), marginTop: hp(2), flexDirection: 'column', paddingTop: hp(1.5), alignItems: 'center', elevation: 7, borderRadius: 20, width: wp(37), backgroundColor: 'white' }}>
                            <Image style={{ height: 85, width: 110 }} source={item.Image} />
                            <Text style={{ fontFamily: 'BentonSans Bold', marginTop: hp(1.8), fontSize: 16 }}>{item.text}</Text>
                            <Text style={{ fontFamily: 'BentonSans Book', fontSize: 16, marginTop: hp(1) }}>{item.time}</Text>
                        </TouchableOpacity>
                    )}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(8), marginTop: hp(1) }}>
                    <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 15 }}>Popular Menu</Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'BentonSans Book', marginLeft: wp(10), fontSize: 12, color: '#FF7C32', marginTop: hp(0.8) }}>View More</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', paddingTop: hp(2) }}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ height: hp(12), marginVertical:hp(1),marginHorizontal:wp(3),flexDirection: 'row', justifyContent: 'space-between', paddingRight: wp(5), width: wp(85), borderRadius: 20, elevation: 7, backgroundColor: 'white' }}>
                                <Image style={{ height: 65, width: 65, marginLeft: wp(4), marginTop: hp(1.7) }} source={item.food} />
                                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>{item.dishes}</Text>
                                    <Text style={{ fontFamily: 'BentonSans Regular', color: '#3B3B3B', fontSize: 14 }}>{item.menu}</Text>
                                </View>
                                <Text style={{ fontSize: 22, fontFamily: 'BentonSans Bold', color: '#FEAD1D', marginTop: hp(4) }}>{item.rate}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Tabs;