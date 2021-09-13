import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './homepage';
import AboutMe from './About';
import Contact from './contact';
import AddUser from './Add';

const NewMenu = () =>{
    const Stack = createNativeStackNavigator()
    return(
        <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"homepage"}>
                <Stack.Screen name={"homepage"} component={HomePage}/>
                <Stack.Screen name={"About"} component={AboutMe} />
                <Stack.Screen name={"contact"} component={Contact} />
                <Stack.Screen name={"Add"} component={AddUser} />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}
export default NewMenu