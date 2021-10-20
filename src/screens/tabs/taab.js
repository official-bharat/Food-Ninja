import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const Taab = ({ color, tab, icon, onPress }) => {
    return (
        <View style={styles.inp}>
            <TextInput style={{width:widthPercentageToDP(70),fontSize:14}} placeholder="Enter message" />
            <TouchableOpacity>
                <Image style={{ height: 25, width: 25 }} source={require('../../assets/icons/Send.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inp: {
        alignItems: 'center',
        flexDirection: 'row',
    }
})
export default Taab;