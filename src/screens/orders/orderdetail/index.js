import React, { useState } from 'react'
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { View, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableHighlight, FlatList, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SwipeListView } from 'react-native-swipe-list-view';

const Tabb = ({ color, tab, icon, onPress }) => {
    const {navigate} = useNavigation();
    return (
        <View style={{ paddingTop: hp(2), }}>
            <View style={{ flexDirection: 'row',  justifyContent:'space-between' }}>
                <Text style={{ fontFamily: 'BentonSans Medium', width: wp(68), color: 'white', fontSize: 14 }}>Sub-Total</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', color: 'white', fontSize: 14 }}>120 $</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: hp(0.5),justifyContent:'space-between'  }}>
                <Text style={{ fontFamily: 'BentonSans Medium', width: wp(68), color: 'white', fontSize: 14 }}>Delivery Charge</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', color: 'white', fontSize: 14 }}>10 $</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: hp(0.5),justifyContent:'space-between'  }}>
                <Text style={{ fontFamily: 'BentonSans Medium', width: wp(68), color: 'white', fontSize: 14 }}>Discount</Text>
                <Text style={{ fontFamily: 'BentonSans Medium', color: 'white', fontSize: 14 }}>20 $</Text>
            </View>
            <View style={{ flexDirection: 'row',  paddingTop: hp(2),justifyContent:'space-between'  }}>
                <Text style={{ fontFamily: 'BentonSans Bold', width: wp(65), color: 'white', fontSize: 18 }}>Total</Text>
                <Text style={{ fontFamily: 'BentonSans Bold', color: 'white', fontSize: 18 }}>150 $</Text>
            </View>
            <TouchableOpacity onPress={()=>navigate('Confirm')} style={{ height: hp(7.5), width: wp(85), alignItems: 'center', marginTop: hp(2.5), justifyContent: 'center', borderRadius: 15, backgroundColor: 'white' }}>
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
            tabBar={props => <Tabbar {...props} />}
        >
            <Tab.Screen name="Chat" component={Orderdetail}
            />
        </Tab.Navigator>
    )
}

const Tabbar = ({ state, navigation }) => {
    const { routes } = state;
    const [selected, setSelected] = useState('Home');
    const renderColor = (currentTab) => (currentTab === selected ? 'red' : 'black');
    const handlePress = (activeTab, index) => {

        // if (state.index == !index) {
        setSelected(activeTab);
        navigation.navigate(activeTab)
        //     }
    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={require('../../../assets/icons/Price.png')} style={styles.Main}>
                <View style={styles.Contain}>
                    {
                        routes.map((route, index) => <Tabb tab={route}
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
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 15,
        margin: 5,
        marginRight:wp(4)
        
    },
    backrightbtn: {
        alignItems: 'flex-end',
        bottom: 5,
        justifyContent: 'center',
        position: 'absolute',
        width: wp(60),
        height: hp(13)
    },
    backright: {
        backgroundColor: '#FEAD1D',
        right: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    }
});

const Orderdetail = () => {
    
    const [data, setData] = useState(
        [
            {
                id: '1',
                Image: require('../../../assets/icons/Order.png'),
                title: 'Spacy fresh crab',
                name: 'Waroenk kita',
                rate: '$ 35',
                Minus: require('../../../assets/icons/Minus.png'),
                count: '1',
                Plus: require('../../../assets/icons/Plus.png')
            },
            {
                id: '2',
                Image: require('../../../assets/icons/Order1.png'),
                title: 'Spacy fresh crab',
                name: 'Waroenk kita',
                rate: '$ 35',
                Minus: require('../../../assets/icons/Minus.png'),
                count: '1',
                Plus: require('../../../assets/icons/Plus.png')
            },
            {
                id: '3',
                Image: require('../../../assets/icons/Order2.png'),
                title: 'Spacy fresh crab',
                name: 'Waroenk kita',
                rate: '$ 35',
                Minus: require('../../../assets/icons/Minus.png'),
                count: '1',
                Plus: require('../../../assets/icons/Plus.png')
            },
            

        ]
    )
    const VisibleItem = props => {
        const { data } = props;
        return (
            <TouchableHighlight>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', elevation: 7, borderRadius: 20, paddingLeft: wp(3), alignItems: 'center', backgroundColor: 'white', height: hp(13), width: wp(93), marginVertical: 10 }}>
                        <Image style={{ height: 65, width: 65 }} source={data.item.Image} />
                        <View style={{ flexDirection: 'column', paddingLeft: wp(4) }}>
                            <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>{data.item.title}</Text>
                            <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14 }}>{data.item.name}</Text>
                            <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 19, color: '#53E88B' }}>{data.item.rate}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: wp(6) }}>
                            <TouchableOpacity>
                                <Image style={{ height: 30, width: 30 }} source={data.item.Minus} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, marginLeft: wp(3) }}>{data.item.count}</Text>
                            <TouchableOpacity>
                                <Image style={{ height: 30, width: 30, marginLeft: wp(3) }} source={data.item.Plus} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    const HiddenItemWithActions = props => {
        const { onDelete } = props;
        return (
            <View style={styles.rowBack}>
                <TouchableOpacity style={[styles.backrightbtn, styles.backright]}>
                    <Image style={{height:30,width:25,marginRight:wp(7)}} source={require('../../../assets/icons/trash.png')}/>
                </TouchableOpacity>
            </View>
        )
    }

    const renderItem = (data, rowMap) => {
        return (
            <VisibleItem data={data} />
        )
    }
    const renderHiddenItem = (data, rowMap) => {
        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                onDelete={() => delete (rowMap, data.item.key)}
            />
        )
    }
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
            {/* < FlatList
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
                                <TouchableOpacity>
                                    <Image style={{ height: 30, width: 30 }} source={item.Minus} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16, marginLeft: wp(3) }}>{item.count}</Text>
                                <TouchableOpacity>
                                    <Image style={{ height: 30, width: 30, marginLeft: wp(3) }} source={item.Plus} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            /> */}
            <SwipeListView
                data={data}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-80}
            />
        </ImageBackground>
    )
}

export default Tabs;