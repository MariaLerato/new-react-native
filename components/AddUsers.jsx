import React, { useState } from 'react';
import { StyleSheet, TextInput,View ,Text} from 'react-native';
import { Button, Header } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Users from './users';



const AddUser = ({navigation}) =>{
    const [name,setName] = useState()
    const [surname,setSurname] = useState()
    const [age,setAge] = useState()
    const [location,setLocation] = useState()
    const [gender,setGender] = useState()
    // const [users,setUsers] = useState([])
 
    const createUser = () =>{
        Users.users.push({
            id: Users.users.length,
            name:name,
            surname:surname,
            age:age,
            location:location,
            gender:gender
        },[])
    
     console.log((Users.users))
 }
    return(
        <>
            <SafeAreaView>
                <View style={styles.headCover}>
                <View>
                    <Text style={styles.header}>
                        Add New Users
                    </Text>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.textinput} onChangeText ={(text) =>setName(text) }  placeholder={"Please Enter Your Name"} />
                    <TextInput style={styles.textinput} onChangeText ={(text) =>setSurname(text) } placeholder={"Please Enter Your Surname"} />
                    <TextInput style={styles.textinput} onChangeText ={(text) =>setAge(text) }  placeholder={"Please Enter Your Age"} />
                    <TextInput style={styles.textinput} onChangeText ={(text) =>setLocation(text) }  placeholder={"Please Enter Your Location"} />
                    <TextInput style={styles.textinput} onChangeText ={(text) =>setGender(text) }  placeholder={"Please Enter Your Gender"} />
                    
                </View>
                <View style={styles.button}>
                
                    <Button title={"Submit"} onPress={createUser} />
                </View>
               
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    headCover :{
        textAlign: 'left',
        padding : 10,
        textTransform:'uppercase',
        fontWeight:'bolder',
        fontSize:20,
        alignItems:'left',
        color:'white',
        backgroundColor:'#a9c2b9',
        resizeMode:'cover',
        height:1000,
        // borderRadius:30
        
    },
    form:{
        // backgroundColor:'grey',
        padding:10,
        borderRadius:40,
        alignItems:'center',
        textAlign:'center',
        marginTop:-35
    },
    textinput :{
            height:50,
            padding:11,
            margin:4,
            borderRadius:10,
            backgroundColor:'gainsboro',
            width:500
            
        },
        coner:{
            alignItems:'left',
            textAlign:'left'
        },

    header :{
        textAlign: 'center',
        fontSize:30,
        paddingTop:40,
        paddingBottom:40,
        fontWeight:'bold'
    },
    button :{
        padding :20,
        shadowColor:'grey',
        width:150,
        flex: 1,
        marginTop:-25
    }
})
export default AddUser