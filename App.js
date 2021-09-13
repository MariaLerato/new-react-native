// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Landing from './components/home';
import About from './components/about';
import AddUser from './components/AddUsers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import NewHome from './components/swiping';
import Menu from './components/menu';
import MyProfile from './components/profile';
import Contact from './components/contactlist';


export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <>
    <StatusBar barStyle="light-content" />
    <NavigationContainer  initialRouteName={"menu"} screenOptions={{ tabBarActiveTintColor:'#e91e60',}}>
            <Tab.Navigator>
                <Tab.Screen name={"menu"} component={Menu} 
                 options={{tabBarLabel:'Home',
                 tabBarIcon:({color,size})=>(
                 <MaterialCommunityIcons name="home"
                 color={color} 
                 size={size}/> ),}}/>
                <Tab.Screen name={"profile"} component={MyProfile}
                options={{tabBarLabel:'About',
                tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name="account"
                color={color} 
                size={size}/> ),}}
                />
                <Tab.Screen name={"contactlist"} component={Contact} options={{tabBarLabel:'About',
                tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name="phone"
                color={color} 
                size={size}/> ),}} />

            </Tab.Navigator>
        </NavigationContainer>
    </>
  );
}

