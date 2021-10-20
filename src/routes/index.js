import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Intro from "../screens/splash/Intro";
import Intro2 from "../screens/splash/Intro2";
import Intro3 from "../screens/splash/Intro3";
import Bioform from "../screens/Form/index";
import Payments from "../screens/payment/index";
import Camera from "../screens/camera/index";
import Photo from "../screens/photopreview/index";
import Setlocation from "../screens/location/index";
import Signsuccess from "../screens/success/index";
import Verification from "../screens/otp/index";
import Forget from "../screens/forgetpass/index";
import Reset from "../screens/resetpass/index";
import Resetsuccess from "../screens/resetsuccess/index";
import Home from "../screens/home/index";
import Popular from "../screens/popularRest/index";
import Filter from "../screens/filter/index";
import Chat from "../screens/chat/index";
import Ringing from "../screens/call/Ringing/index";
import Finishcall from "../screens/call/FinishOrder/index";
import Rate from "../screens/call/FoodRate/index";
import RestoRate from "../screens/call/RestaurantRate/index";
import Promo from "../screens/voucher/promo/index";
import Notifications from "../screens/voucher/notofication/index";
import Orderdetail from "../screens/orders/orderdetail/index";
import Confirm from "../screens/orders/confrim/index";
import Orderpayment from "../screens/orders/payments/index";
import Shiping from "../screens/orders/shiping/index";
import Findfood from "../screens/orders/findfood/index";
import FindLocation from "../screens/orders/findlocation/index";
import Trackodr from "../screens/orders/track/index";
import Productdetail from "../screens/product/index";
import Menu from "../screens/menu/index";

const Stack = createNativeStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Intro1"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Intro1" component={Intro} />
                <Stack.Screen name="Intro2" component={Intro2} />
                <Stack.Screen name="Intro3" component={Intro3} />
                <Stack.Screen name="Log-in" component={Login} />
                <Stack.Screen name="Sign-up" component={Signup} />
                <Stack.Screen name="Form" component={Bioform} />
                <Stack.Screen name="Payment" component={Payments} />
                <Stack.Screen name="Camera" component={Camera} />
                <Stack.Screen name="Preview" component={Photo} />
                <Stack.Screen name="Location" component={Setlocation} />
                <Stack.Screen name="Congrats" component={Signsuccess} />
                <Stack.Screen name="Otp" component={Verification} />
                <Stack.Screen name="Forget" component={Forget} />
                <Stack.Screen name="Resetpass" component={Reset} />
                <Stack.Screen name="Resetcongo" component={Resetsuccess} />
                <Stack.Screen name="Homepage" component={Home} />
                <Stack.Screen name="Restaurant" component={Popular} />
                <Stack.Screen name="filters" component={Filter} />
                <Stack.Screen name="Chats" component={Chat} />
                <Stack.Screen name="Ring" component={Ringing} />
                <Stack.Screen name="Finish" component={Finishcall} />
                <Stack.Screen name="Foodrate" component={Rate} />
                <Stack.Screen name="Restorate" component={RestoRate} />
                <Stack.Screen name="Promos" component={Promo} />
                <Stack.Screen name="Notify" component={Notifications} />
                <Stack.Screen name="Order" component={Orderdetail} />
                <Stack.Screen name="Confirm" component={Confirm} />
                <Stack.Screen name="pay" component={Orderpayment} />
                <Stack.Screen name="Ship" component={Shiping} />
                <Stack.Screen name="Find" component={Findfood} />
                <Stack.Screen name="Findloc" component={FindLocation} />
                <Stack.Screen name="Track" component={Trackodr} />
                <Stack.Screen name="Product" component={Productdetail} />
                <Stack.Screen name="Detailmenu" component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;