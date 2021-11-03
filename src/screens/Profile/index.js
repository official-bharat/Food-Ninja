import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Modal } from 'react-native-paper'
import { useNavigation } from "@react-navigation/core";
import LinearGradient from "react-native-linear-gradient";
const Profile = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);
    const { navigate } = useNavigation();
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
                Image: require('../../assets/icons/Order.png'),
                title: 'Spacy fresh crab',
                name: 'Waroenk kita',
                rate: '$ 35',
                text: 'Buy Again'
            },
            {
                id: '2',
                Image: require('../../assets/icons/Order1.png'),
                title: 'Spacy fresh crab',
                name: 'Waroenk kita',
                rate: '$ 35',
                text: 'Buy Again'
            },
            {
                id: '3',
                Image: require('../../assets/icons/Order2.png'),
                title: 'Spacy fresh crab',
                name: 'Waroenk kita',
                rate: '$ 35',
                text: 'Buy Again'
            },
        ]
    )
    return (
        <View>
            <Image style={{ height: hp(40), width: wp(100) }} source={require('../../assets/icons/Avatar.png')} />

            <Modal
                visible={modalVisible}
                animationType="slide"

                contentContainerStyle={containerStyle}>
                <View style={{  marginTop: hp(-15) }}>
                    <TouchableOpacity>
                        <Image style={{ height: 30, width: 100,marginHorizontal:wp(6) }} source={require('../../assets/icons/Member.png')} />
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',marginHorizontal:wp(6),paddingTop:hp(2),alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 27 }}>Anam Wusono</Text>
                        <TouchableOpacity>
                            <Image style={{height:20,width:20,marginRight:wp(2)}} source={require('../../assets/icons/EditIcon.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontFamily:'BentonSans Regular',marginHorizontal:wp(6),marginTop:hp(0.5),fontSize:14,color:'#3B3B3B'}}>anamwp66@gmail.com</Text>
                    <TouchableOpacity style={{height:hp(9),justifyContent:'center',marginHorizontal:wp(6),marginTop:hp(4),borderRadius:15,width:wp(88),backgroundColor:'white',elevation:7}}>
                        <View style={{flexDirection:'row',alignItems:'center',paddingLeft:wp(4)}}>
                            <Image style={{height:52,width:55}} source={require('../../assets/icons/VoucherIcon.png')}/>
                            <Text style={{fontFamily:'BentonSans Medium',marginLeft:wp(5),fontSize:15}}>You Have 3 Voucher</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'BentonSans Bold',marginHorizontal:wp(6), marginVertical: hp(3), fontSize: 15 }}>Favorite</Text>
                    < FlatList
                        data={mydata}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', elevation: 7, borderRadius: 20, paddingLeft: wp(3),alignItems: 'center', backgroundColor: 'white', height: hp(12), width: wp(90), marginVertical: 10 }}>
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
                                                <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(3), paddingVertical: hp(1.2), fontFamily: 'BentonSans Medium', color: 'white', fontSize: 12 }}>{item.text}</Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
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

export default Profile;
// import React, { useState } from 'react'
// import { Text, Button, TextInput, IconButton } from 'react-native-paper';
// import { View, ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableHighlight, FlatList, Dimensions } from 'react-native';
// import {
//     heightPercentageToDP as hp,
//     widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/core';

// const Profile = () => {
//     const {navigate} = useNavigation();
//     const [data, setData] = useState(
//         [
//             {
//                 id: '1',
//                 Image: require('../../assets/icons/Order.png'),
//                 title: 'Spacy fresh crab',
//                 name: 'Waroenk kita',
//                 rate: '$ 35',
//                 text: 'Process'
//             },
//             {
//                 id: '2',
//                 Image: require('../../assets/icons/Order1.png'),
//                 title: 'Spacy fresh crab',
//                 name: 'Waroenk kita',
//                 rate: '$ 35',
//                 text: 'Process'
//             },
//             {
//                 id: '3',
//                 Image: require('../../assets/icons/Order2.png'),
//                 title: 'Spacy fresh crab',
//                 name: 'Waroenk kita',
//                 rate: '$ 35',
//                 text: 'Process'
//             },


//         ]
//     )
//     return (
//         <View style={{ flex: 1}}>


//             < FlatList
//                 data={data}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <View style={{ alignItems: 'center' }}>
//                         <View style={{ flexDirection: 'row', elevation: 7, borderRadius: 20, paddingLeft: wp(3), alignItems: 'center', backgroundColor: 'white', height: hp(13), width: wp(93), marginVertical: 10 }}>
//                             <Image style={{ height: 65, width: 65 }} source={item.Image} />
//                             <View style={{ flexDirection: 'column', paddingLeft: wp(4) }}>
//                                 <Text style={{ fontFamily: 'BentonSans Medium', fontSize: 15 }}>{item.title}</Text>
//                                 <Text style={{ fontFamily: 'BentonSans Regular', fontSize: 14 }}>{item.name}</Text>
//                                 <Text style={{ fontFamily: 'BentonSans Bold', fontSize: 19, color: '#53E88B' }}>{item.rate}</Text>
//                             </View>
//                             <View style={{ flexDirection: 'row', paddingLeft: wp(6) }}>
//                                 <LinearGradient colors={["#53E88B", "#15BE77"]}
//                                     start={{ x: 0, y: 0 }}
//                                     end={{ x: 1, y: 0 }}
//                                     style={{ borderRadius: 20 }}
//                                 >
//                                     <TouchableOpacity>
//                                         <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(6), paddingVertical: hp(1.2), fontFamily: 'BentonSans Medium', color: 'white', fontSize: 12 }}>{item.text}</Text>
//                                     </TouchableOpacity>
//                                 </LinearGradient>
//                             </View>
//                         </View>
//                     </View>
//                 )}
//             />
//             <View style={{ alignItems: 'center',bottom:hp(2) }}>
//                 <LinearGradient colors={["#53E88B", "#15BE77"]}
//                     start={{ x: 0, y: 0 }}
//                     end={{ x: 1, y: 0 }}
//                     style={{ borderRadius: 20 }}
//                 >
//                     <TouchableOpacity onPress={()=>navigate('Findloc')}>
//                         <Text style={{ borderWidth: 1, borderWidth: 0, paddingHorizontal: wp(37), paddingVertical: hp(3), fontFamily: 'BentonSans Medium', color: 'white', fontSize: 12 }}>Check out</Text>
//                     </TouchableOpacity>
//                 </LinearGradient>
//             </View>
//         </View>
//     )
// }
// export default Profile;