import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Modal } from 'react-native-paper'
import { useNavigation } from "@react-navigation/core";
const Productdetail = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);
    const {navigate} = useNavigation();
    const containerStyle = {
        backgroundColor: 'white',
        height: hp(110),
        width: wp(100),
        borderRadius: 30,
        marginTop: hp(75),

    };
    const [mydata, setMydata] = useState(
        [
            {
                id: '1',
                Image: require('../../assets/icons/Crab.png'),
                text: 'Vegan Resto',
                rate: '$15',
                photo: require('../../assets/icons/Profile4.png'),
                name: 'Dianne Russell',
                star: require('../../assets/icons/IconStar5.png'),
                date: '21 April 2021',
                about: 'This Is great,So delicious! You Must',
                about2: 'Here, With Your Family..'
            },
            {
                id: '2',
                Image: require('../../assets/icons/Crab1.png'),
                text: 'Vegan Resto',
                rate: '$15',
                photo: require('../../assets/icons/Profile1.png'),
                name: 'Dianne Russell',
                star: require('../../assets/icons/IconStar5.png'),
                date: '21 April 2021',
                about: 'This Is great,So delicious! You Must',
                about2: 'Here, With Your Family..'
            },
            {
                id: '3',
                Image: require('../../assets/icons/Crab.png'),
                text: 'Vegan Resto',
                rate: '$15',
                photo: require('../../assets/icons/Profile2.png'),
                name: 'Dianne Russell',
                star: require('../../assets/icons/IconStar5.png'),
                date: '21 April 2021',
                about: 'This Is great,So delicious! You Must',
                about2: 'Here, With Your Family..'
            },
        ]
    )
    return (
        <View>
            <Image style={{ height: hp(50), width: wp(100) }} source={require('../../assets/icons/Photorest.png')} />

            <Modal
                visible={modalVisible}
                animationType="slide"

                contentContainerStyle={containerStyle}>
                <View style={{ paddingHorizontal: wp(6), marginTop: hp(20) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <Image style={{ height: 35, width: 80 }} source={require('../../assets/icons/Popular.png')} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity >
                                <Image style={{ height: 35, width: 35 }} source={require('../../assets/icons/IconLocation.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: wp(2) }}>
                                <Image style={{ height: 35, width: 35 }} source={require('../../assets/icons/Love.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ fontFamily: 'BentonSans Bold', marginTop: hp(2), fontSize: 27 }}>Wijie Bar And Resto</Text>
                    <View style={{ flexDirection: 'row', paddingTop: hp(3) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ height: 18, width: 18 }} source={require('../../assets/icons/map-pin.png')} />
                            <Text style={{ fontFamily: 'BentonSans Regular', marginLeft: wp(2), fontSize: 14, color: '#3B3B3B' }}>19 km</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: wp(10) }}>
                            <Image style={{ height: 18, width: 18 }} source={require('../../assets/icons/IconStar.png')} />
                            <Text style={{ fontFamily: 'BentonSans Regular', marginLeft: wp(2), fontSize: 14, color: '#3B3B3B' }}>4.8 Rating</Text>
                        </View>
                    </View>
                    <Text style={{ fontFamily: 'BentonSans Book', marginTop: hp(3), fontSize: 12 }}>Most whole Alaskan Red King Crabs get broken down into</Text>
                    <Text style={{ fontFamily: 'BentonSans Book', marginTop: hp(0.5), fontSize: 12 }}>legs, claws, and lump meat. We offer all of these options</Text>
                    <Text style={{ fontFamily: 'BentonSans Book', marginTop: hp(0.5), fontSize: 12 }}>as well in our online shop.but there is nothing like getting</Text>
                    <Text style={{ fontFamily: 'BentonSans Book', marginTop: hp(0.5), fontSize: 12 }}>the whole....</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp(3) }}>
                        <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 15 }}>Popular Menu</Text>
                        <TouchableOpacity onPress={()=>navigate('Detailmenu')}>
                            <Text style={{ fontFamily: 'BentonSans Book', color: '#FF7C32', fontSize: 12 }}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={mydata}
                        horizontal={true}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={{ paddingLeft: wp(1), paddingHorizontal: wp(5) }}>
                                <TouchableOpacity style={{ height: hp(23), marginBottom: hp(2), marginTop: hp(2), flexDirection: 'column', paddingTop: hp(2), alignItems: 'center', elevation: 7, borderRadius: 20, width: wp(37), backgroundColor: 'white' }}>
                                    <Image style={{ height: 80, width: 80 }} source={item.Image} />
                                    <Text style={{ fontFamily: 'BentonSans Medium', marginTop: hp(1.8), fontSize: 15 }}>{item.text}</Text>
                                    <Text style={{ fontFamily: 'BentonSans Book', fontSize: 13, marginTop: hp(1) }}>{item.rate}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                    <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 15 }}>Testimonials</Text>
                    <FlatList
                        data={mydata}

                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={{ paddingHorizontal: wp(1), paddingVertical: wp(2) }}>
                                <View style={{ height: hp(18), width: wp(86), paddingTop: hp(1.5), paddingHorizontal: wp(3), backgroundColor: 'white', borderRadius: 20, elevation: 7 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                        <Image style={{ height: 70, width: 70 }} source={item.photo} />
                                        <View style={{ marginRight: wp(5) }}>
                                            <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>{item.name}</Text>
                                            <Text style={{ fontSize: 12 }}>{item.date}</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <Image style={{ height: 35, width: 60 }} source={item.star} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{paddingLeft:wp(20)}}>
                                        <Text style={{ fontFamily: 'BentonSans Book', fontSize: 12 }}>{item.about}</Text>
                                        <Text style={{ fontFamily: 'BentonSans Book', marginTop: hp(0.5), fontSize: 12 }}>{item.about2}</Text>
                                    </View>
                                </View>

                            </View>
                        )}
                    />
                </View>
            </Modal>
        </View>
    )
}

export default Productdetail;