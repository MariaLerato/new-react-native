import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Landing from "./home";
import About from "./about";
import { NavigationContainer } from "@react-navigation/native";
import AddUser from "./AddUsers";

const Tab = createBottomTabNavigator()
const  MyTab = () =>{
    return(
        <NavigationContainer>
        <Tab.Navigator initialRouteName={"Home"} screenOptions={{ tabBarActiveTintColor:'#e91e60',}}> 
            <Tab.Screen name={"Home"} 
            component={Landing}
             options={{tabBarLabel:'Home',
             tabBarIcon:({color,size})=>(
             <MaterialCommunityIcons name="home"
              color={color} 
              size={size} />
              ),}} />
               <Tab.Screen name="AddUsers" 
            component={AddUser}
             options={{tabBarLabel:'AddUser',
             tabBarIcon:({color,size})=>(
             <MaterialCommunityIcons name="account"
              color={color} 
              size={size} />
              ),}} />
        </Tab.Navigator>
        </NavigationContainer>
    )
}
export default MyTab