import React, { useState } from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableHighlight, FlatList, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabbs = ({ color, tab, icon, onPress }) => {
    const {navigate}= useNavigation();
    return (
        <View style={{ paddingTop: hp(2) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'BentonSans Medium', width: wp(68), color: 'white', fontSize: 14 }}>Sub-Total</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', color: 'white', fontSize: 14 }}>120 $</Text>
            </View>
            <View style={{ flexDirection: 'row',paddingTop: hp(0.5) , justifyContent: 'space-between'}}>
                <Text style={{ fontFamily: 'BentonSans Medium', width: wp(68), color: 'white', fontSize: 14 }}>Delivery Charge</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', color: 'white', fontSize: 14 }}>10 $</Text>
            </View>
            <View style={{ flexDirection: 'row',  paddingTop: hp(0.5), justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'BentonSans Medium', width: wp(68), color: 'white', fontSize: 14 }}>Discount</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', color: 'white', fontSize: 14 }}>20 $</Text>
            </View>
            <View style={{ flexDirection: 'row',  paddingTop: hp(2), justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'BentonSans Bold', width: wp(65), color: 'white', fontSize: 18 }}>Total</Text>
                <Text style={{ fontFamily: 'BentonSans Bold', color: 'white', fontSize: 18 }}>150 $</Text>
            </View>
            <TouchableOpacity onPress={()=>navigate('pay')} style={{ height: hp(7.5), width: wp(85), alignItems: 'center', marginTop: hp(2.5), justifyContent: 'center', borderRadius: 15, backgroundColor: 'white' }}>
                <Text style={{ fontFamily: 'BentonSans Bold', color: '#53E88B', fontSize: 14 }}>Place My Order</Text>
            </TouchableOpacity>
        </View>
    )
}

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
            tabBar={props => <Tabbars {...props} />}
        >
            <Tab.Screen name="confrim" component={Confirm}
            />
        </Tab.Navigator>
    )
}

const Tabbars = ({ state, navigation }) => {
    const { routes } = state;
    const [selected, setSelected] = useState('Home');
    const renderColor = (currentTab) => (currentTab === selected ? 'red' : 'black');
    const handlePress = (activeTab, index) => {
        setSelected(activeTab);
        navigation.navigate(activeTab)
    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={require('../../../assets/icons/Price.png')} style={styles.Main}>
                <View style={styles.Contain}>
                    {
                        routes.map((route, index) => <Tabbs tab={route}
                            key={route.key}
                            onPress={() => handlePress(route.name, index)}
                            color={renderColor(route.name)}
                        />)
                    }
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    Main: {
        position: 'absolute',
        bottom: 20,
        height: hp(26),
        width: wp(93),
        alignItems: 'center',
    },
    Contain: {
        borderRadius: 20,
        height: hp(30),
    }
});

const Confirm = () => {
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#FEFEFF' }} source={require('../../../assets/icons/Pattern4.png')}>
            <IconButton
                icon={require('../../../assets/icons/Back.png')}
                size={45}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
            <Text style={{
                fontSize: 25, fontFamily: 'BentonSans Bold', marginBottom: hp(3), paddingTop: hp(2),
                paddingLeft: wp(7)
            }}>Order details</Text>
            <View style={{ alignItems: 'center' }}>
                <View style={{ height: hp(15), width: wp(90), borderRadius: 20, backgroundColor: 'white', elevation: 7 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(4), paddingTop: hp(1.5) }}>
                        <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14, color: '#3B3B3B' }}>Deliver to</Text>
                        <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14, color: '#53E88B' }}>Edit</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: wp(3), paddingTop: hp(2), justifyContent: 'space-evenly' }}>
                        <Image style={{ height: 40, width: 40 }} source={require('../../../assets/icons/mapp.png')} />
                        <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>4513 Washington Ave Menchester,{"\n"}kentucky 35267</Text>
                    </View>
                </View>
                <View style={{ height: hp(15), marginTop: hp(3), width: wp(90), borderRadius: 20, backgroundColor: 'white', elevation: 7 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(4), paddingTop: hp(1.5) }}>
                        <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14, color: '#3B3B3B' }}>Payment Mehtod</Text>
                        <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14, color: '#53E88B' }}>Edit</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: hp(2), justifyContent: 'space-evenly' }}>
                        <Image style={{ height: 25, width: 100 }} source={require('../../../assets/icons/Paypal.png')} />
                        <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14 }}>2020 4847 4477 ****</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Tabs;