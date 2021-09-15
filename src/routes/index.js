import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Intro from "../screens/splash/Intro";
import Intro2 from "../screens/splash/Intro2";
import Intro3 from "../screens/splash/Intro3";

const Stack = createNativeStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign-up"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Intro1" component={Intro}/>
                <Stack.Screen name="Intro2" component={Intro2}/>
                <Stack.Screen name="Intro3" component={Intro3}/>
                <Stack.Screen name="Log-in" component={Login}/>
                <Stack.Screen name="Sign-up" component={Signup}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;