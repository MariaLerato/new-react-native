import React,{useState} from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Header, ListItem } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';

const HomePage = () =>{
    return(
        <>
        <SafeAreaView>
            <View>
                <Header>
                    {/* <Button title={"Add User"} onPress={()=>navigation.navigate("Add")} /> */}
                </Header>
                <View>
                <View>
            {
                 InitialUser.users.map(action =>(
                    <ListItem key={action.id}>
                        <ListItem.Content>
                    <ListItem.Title>
                    {action.name} {action.surname}
                     </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron onPress={()=>navigation.navigate("AboutMe",{
                itemId:action.id
            })} />
        </ListItem>
    ))
}
</View>
                </View>
               
            </View>
        </SafeAreaView>
        </>
    )
}
export default HomePage