import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Tab } from 'react-native-elements/dist/tab/Tab'
import Landing from './home'
import About from './about'
import AddUser from './AddUsers'

const NewTabs = () =>{
    const Tab = createBottomTabNavigator()
    return(
        <>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={"home"} component={Landing} />
                <Tab.Screen name={"About"} component={About} />
                <Tab.Screen name={"AddUser"} component={AddUser} />

            </Tab.Navigator>
        </NavigationContainer>
        </>
    )
}
export default NewTabs