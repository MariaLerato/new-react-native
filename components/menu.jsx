import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './home';
import About from './about';
import AddUser from './AddUsers';

const Menu = () =>{
    const Stack = createNativeStackNavigator()
    return(
        <>
        {/* <NavigationContainer> */}
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name={"Home"} component={Landing} />
                <Stack.Screen name={"About"} component={About} />
                <Stack.Screen name={"AddUser"} component={AddUser} />
            </Stack.Navigator>
        {/* </NavigationContainer> */}
        </>
    )
}
export default Menu