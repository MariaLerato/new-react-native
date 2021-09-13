import React, { useState } from 'react';
import { StyleSheet, TextInput,View ,Text} from 'react-native';
import { Button, Header } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import InitialUser from './users'


const FormAdd = ({navigation}) =>{
    const [name,setName] = useState()
    const [surname,setSurname] = useState()
    const [ age,setAge] = useState()
    const [ location,setLocation] =useState()
 
    const createUser = () =>{
        InitialUser.users.push({
            id: InitialUser.users.length,
            name:name,
            surname:surname,
            age:age,
            location:location
        })
    
     console.log((Users.users))
 }
    return(
        <>
            <SafeAreaView>
                <Header>
                    <Button title={"back"} onPress={()=>navigation.goBack()} />
                </Header>
                <View>
                    <Text style={styles.header}>
                        Add New Users
                    </Text>
                </View>
                <View>
                    <TextInput style={styles.textinput} onChangeText ={(text) =>setName(text) }  placeholder={"Please Enter Your Name"} />
                    <TextInput style={styles.textinput} onChangeText ={(text) =>setSurname(text) } placeholder={"Please Enter Your Surname"} />
                    <TextInput style={styles.textinput} onChangeText ={(text) =>setAge(text) }  placeholder={"Please Enter Your Age"} />
                    <TextInput style={styles.textinput} onChangeText={(text)=>setLocation(text)} placeholder={"Please Enter Your Location"} />
                </View>
                <View style={styles.button}>
                    <Button title={"Create new user"} onPress={createUser} />
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    textinput :{
        height:50,
        padding:9,
        margin:4,
        borderRadius:10,
        backgroundColor:'gainsboro'
    },
    header :{
        textAlign: 'center',
        fontSize:20,
        paddingTop:40,
        paddingBottom:40
    },
    button :{
        padding :10
    }
})
export default FormAdd