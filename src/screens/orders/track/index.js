import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableHighlight, FlatList, Text } from 'react-native';
import MapView from 'react-native-maps';
import { IconButton } from "react-native-paper";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/core";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from "react-native-linear-gradient";


const TabLoc = ({ color, tab, icon, onPress }) => {
    const { navigate } = useNavigation();
    return (
        <ImageBackground source={require('../../../assets/icons/Track.png')} style={{ elevation: 7, bottom: hp(2), paddingTop: hp(3), paddingLeft: wp(4), height: hp(30), width: wp(90), borderRadius: 25 }}>
            <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 17 }}>Track Orders</Text>
            <View style={{ height: hp(10), flexDirection: 'row', alignItems: 'center', borderRadius: 15, paddingLeft: wp(3), marginTop: hp(3), width: wp(83), backgroundColor: 'white'}}>
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
                <TouchableOpacity onPress={()=>navigate('Product')} style={{ height: hp(9), borderRadius: 15, width: wp(60), justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 22, width: 22 }} source={require('../../../assets/icons/Calls.png')} />
                        <Text style={{ fontSize: 14, color: '#53E88B', marginLeft: wp(2) }}>Call</Text>
                    </View>
                </TouchableOpacity>
                <LinearGradient colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 20,marginLeft:wp(3) }}
                >
                    <TouchableOpacity style={{ height: hp(9), width: wp(20),justifyContent:'center',alignItems:'center' }}>
                        <ImageBackground style={{height:25,width:28,paddingTop:hp(0.4),alignItems:'center'}} source={require('../../../assets/icons/Path.png')}>
                            <Image style={{height:10,width:20}} source={require('../../../assets/icons/Path1.png')}/>
                        </ImageBackground>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </ImageBackground>
    )
}

const Tab = createBottomTabNavigator();
const Mytab = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            Tabbar: {
                marginBottom: 20,
            }
        }}
            tabBar={props => <MyTabbars {...props} />}
        >
            <Tab.Screen name="Track" component={Trackodr}
            />
        </Tab.Navigator>
    )
}

const MyTabbars = ({ state, navigation }) => {
    const { routes } = state;
    const [selected, setSelected] = useState('Home');
    const renderColor = (currentTab) => (currentTab === selected ? 'red' : 'black');
    const handlePress = (activeTab, index) => {
        setSelected(activeTab);
        navigation.navigate(activeTab)
    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.Contain}>
                {
                    routes.map((route, index) => <TabLoc tab={route}
                        key={route.key}
                        onPress={() => handlePress(route.name, index)}
                        color={renderColor(route.name)}
                    />)
                }
            </View>
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

        height: hp(30),
    }
});
const Trackodr = () => {

    return (
        <View>
            <IconButton
                icon={require('../../../assets/icons/Back.png')}
                size={45}
                onPress={() => navigate("Form")}
                color="red"
                style={{ paddingTop: hp(2), paddingLeft: wp(2) }}
            />
        </View>
    )
}
export default Mytab;