import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormAdd from './FormAdd';
import HomePage from './landing';
import Profile from './Profile';
import NewForm from './edit';



const Landing = () =>{
    const Stack = createNativeStackNavigator()
    return(
        <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name={"Home"} component={HomePage} />
                <Stack.Screen name={"FormAdd"} component={FormAdd} />
                <Stack.Screen name={"Profile"} component={Profile} />
                <Stack.Screen name= {"edit"} component={NewForm} />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}
export default Landing