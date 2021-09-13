import React, { useEffect, useState } from 'react';
import { SafeAreaView,StyleSheet, Button,View ,Text} from 'react-native';
import {  Header } from 'react-native-elements';
import InitialUser from './users';

const Profile = ({route,navigation}) =>{
    const {itemId} = route.params
    const id = parseInt(itemId)
    const [info,setInfo] = useState([])
    let item = () =>{
        return InitialUser.users.filter(action =>{
            return action.id === id
        })
    }
    useEffect(() =>{
        setInfo(item())
    },[])
    return(
        <>
        <SafeAreaView>
            <View>
            <Header>
                <View>
                    <Button title={"Go Back"} onPress={()=>navigation.goBack()} />
                    <Text>
                        About The User
                    </Text>
                </View>
            </Header>
            <View style={styles.container}>
                {
                    info.map(data =>
                        <View key={data.id}>
                            <View>
                                {data.name} {data.surname}
                            </View>
                            <View>
                                {data.age}
                                {data.location}
                            </View>
                            <Button title={"Edit"} onPress={()=>navigation.navigate("edit")} />
                        </View>
                        
                    )
                }
            </View>
            </View>
        </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        marginTop:50,
        padding:20,
        backgroundColor:'#ffffff'
    }
})
export default Profile