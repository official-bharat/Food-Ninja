import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Taab from "./taab";

const { width } = Dimensions.get('screen')

const Bar = ({ state, navigation }) => {
    const { routes } = state;
    const [selected, setSelected] = useState('Home');
    const handlePress = (activeTab, index) => {

        // if (state.index == !index) {
            setSelected(activeTab);
            navigation.navigate(activeTab)
    //     }
    }
    return (
        <View style={styles.Main}>
            <View style={styles.Contain}>
                {
                    routes.map((route, index) => <Taab tab={route}
                        key={route.key}
                        icon={route.params.icon}
                        onPress={() => handlePress(route.name, index)}
                    />)
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Main: {
        position: 'absolute',
        bottom: 15,
        height: hp(9.5),
        width,
        borderRadius: 20,
        alignItems: 'center'
    },
    Contain: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        width: wp(90),
        borderRadius: 20,
        height: hp(10),
        elevation: 8,
        paddingHorizontal:wp(2)
    }
})
export default Bar;