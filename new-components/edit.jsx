import React, { useState } from 'react';
import {useForm, Controller} from 'react-hook-form'
import {View,StyleSheet, SafeAreaView, TextInput,Text} from 'react-native'
import { Button, Header } from 'react-native-elements';
import InitialUser from './users'

const NewForm = (navigation)=>{
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [age,setAge] = useState('')
    const [location,setLocation] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        {
            InitialUser.users.push({
                id:InitialUser.users.length,
                name:name,
                surname:surname,
                age:age,
                location:location
            })
        }
    }
  return(
      <>
      <SafeAreaView>
          <View style={styles.container}>
          <Header>
              <View>
                    <Button title={"back"} onPress={()=> navigation.goBack()} />
                </View>    
                </Header>
              <View>
                      <Text style={styles.header}>
                          Update User
                      </Text>
                  
                  <TextInput style={styles.textinput} placeholder={"Enter your name"} onChangeText={(e)=>setName(e)} defaultValue={name}/>
                  <TextInput style={styles.textinput} placeholder={"Enter your surname"} onChangeText={(e)=>setSurname (e)} defaultValue={surname}/>
                  <TextInput style={styles.textinput} placeholder={"Enter your age"} onChangeText={(e)=>setAge(e)} defaultValue={age}/>
                  <TextInput style={styles.textinput} placeholder={"Enter your location"} onChangeText={(e)=>setLocation(e)} defaultValue={location}/>
              <Button  style={styles.button} title ={"Submit"} onPress={onSubmit} />
              </View>
              <View>
                   
              </View>
          </View>
    </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
    container:{
        // marginTop:50,
        padding:20,
        backgroundColor:'#b6d1bd'
    },
    textinput :{
        height:50,
        padding:9,
        margin:4,
        borderRadius:10,
        backgroundColor:'gainsboro'
    },
    button :{
        padding :10
    },
    header :{
        textAlign: 'center',
        fontSize:20,
        paddingTop:40,
        paddingBottom:40
    },
})
export default NewForm