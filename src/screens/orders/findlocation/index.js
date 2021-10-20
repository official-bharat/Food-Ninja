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


const TabLoc = ({ color, tab, icon, onPress }) => {
    const { navigate } = useNavigation();
    return (
        <View style={{ paddingTop: hp(4), backgroundColor: 'white', elevation: 7, marginTop: hp(3), height: hp(25), borderRadius: 20, paddingHorizontal: wp(3) }}>
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
            <Tab.Screen name="findLoc" component={FindLocation}
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
        borderRadius: 20,
        height: hp(30),
    }
});
const FindLocation = () => {

    return (
        <View style={{paddingHorizontal:wp(4),paddingTop:hp(2)}}>
            <TextInput
                placeholder="Find Your Location"
                placeholderTextColor="#DA6317"
                mode='outlined'
                theme={{ roundness: 20 }}
                left={<TextInput.Icon color="#DA6317" name={require('../../../assets/icons/Search.png')} />}
                style={{  height: hp(7.6),fontSize:12 }}
            />
        </View>
    )
}
export default Mytab;