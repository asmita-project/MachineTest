import react from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Otp from "./pages/otp/otp";
import Feather from "react-native-vector-icons/Feather";
import Home from "./pages/home/home";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createStackNavigator } from "@react-navigation/stack";
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'




const Tab = createBottomTabNavigator()
function Routing() {

    return (
      
        <Tab.Navigator>
                <Tab.Screen name="HomeScreen" component={Home}
                    options={{
                        headerShown: false,
                        title: "Home",
                        tabBarIcon: ({ focused }) => (
                            <Entypo
                                name="home"
                                color={focused ? "blue" : "blue"}
                                size={20}
                            />
                        ),
                    }}

                />

                <Tab.Screen name="Add New" component={Home}
                    options={{
                        headerShown: false,
                        title: "Add New",
                        tabBarIcon: ({ focused }) => (
                            <Entypo
                                name="add-to-list"
                                color={focused ? "blue" : "grey"}
                                size={20}
                            />
                        ),
                    }}
                />

                <Tab.Screen name="Wallet" component={Home}
                    options={{
                        headerShown: false,
                        title: "Wallet",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name="wallet-outline"
                                color={focused ? "blue" : "grey"}
                                size={20}
                            />
                        ),
                    }}
                />

                <Tab.Screen name="Earning" component={Home}
                    options={{
                        headerShown: false,
                        title: "Earning",
                        tabBarIcon: ({ focused }) => (
                            <Foundation
                                name="dollar"
                                color={focused ? "blue" : "grey"}
                                size={20}
                            />
                        ),
                    }}
                />

                <Tab.Screen name="More" component={Home}
                    options={{
                        headerShown: false,
                        title: "More",
                        tabBarIcon: ({ focused }) => (
                            <Foundation
                                name="graph-horizontal"
                                color={focused ? "blue" : "grey"}
                                size={20}
                            />
                        ),
                    }}
                />


            </Tab.Navigator>

    )
}

const Stack = createStackNavigator()
export default function StackNavigation() {
    return (
        <NavigationContainer independent={true}>
<Stack.Navigator initialRouteName="otp">
            <Stack.Screen name="otp" component={Otp}
                options={{
                    title: "Home",
                    headerShown: false
                }} />
            <Stack.Screen name="home" options={{
                title: "Home",
                headerShown:false
            }} component={Routing} />
        </Stack.Navigator>
        </NavigationContainer>
        

    )
}