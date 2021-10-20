import React from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bar from '../tabs/baar';
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
            tabBar={props => <Bar {...props} />}
        >
            <Tab.Screen name="Chatting" component={Chat} initialParams={{ icon: require('../../assets/icons/Send.png') }}
            />
        </Tab.Navigator>
    )
}
const Chat = () => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../assets/icons/Pattern.png')}>
            <IconButton
                icon={require('../../assets/icons/Back.png')}
                size={45}
                onPress={() => navigate("Form")}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{ fontSize: 25, fontFamily: 'BentonSans Bold', paddingTop: hp(2), paddingLeft: wp(7) }}>Chat</Text>
            <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: hp(4) }}>
                <View style={{ height: hp(10), flexDirection: 'row', paddingRight: wp(5), width: wp(90), borderRadius: 20, elevation: 7, backgroundColor: 'white' }}>
                    <Image style={{ height: 60, width: 60, marginLeft: wp(3), marginTop: hp(1) }} source={require('../../assets/icons/Profile1.png')} />
                    <View style={{ width: wp(70), flexDirection: 'row', paddingHorizontal: wp(5), justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>Anamwp</Text>
                            <Text style={{ fontFamily: 'BentonSans Regular', color: '#3B3B3B', fontSize: 14 }}>Online</Text>
                        </View>
                        <TouchableOpacity onPress={()=>navigate('Ring')} style={{ justifyContent: 'center' }}>
                            <Image style={{ height: 35, width: 35 }} source={require('../../assets/icons/Call.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ImageBackground>
    )
}


export default Tabs;