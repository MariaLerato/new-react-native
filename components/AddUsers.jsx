import React, { useState } from 'react';
import { StyleSheet, TextInput,View ,Text,ScrollView} from 'react-native';
import { Button, Header } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Users from './users';
import {Formik} from 'formik'
import * as Yup from 'yup'


const AddUser = ({navigation}) =>{
    const [name,setName] = useState()
    const [surname,setSurname] = useState()
    const [age,setAge] = useState()
    const [location,setLocation] = useState()
    const [gender,setGender] = useState()
    // const [users,setUsers] = useState([])
 
    const Adduser = (name,surname,age,gender,location) =>{
        Users.users.push({
            id: Users.users.length +1,
            name:name,
            surname:surname,
            age:age,
            location:location,
            gender:gender
        },[])
    
     console.log((Users.users))
 }
 const Validate = Yup.object({
     name:Yup.string().required("Enter name"),
     surname:Yup.string().required("enter your surname"),
     age:Yup.string().max(3,"Only 2 characters").required("Enter age"),
     location:Yup.string().required("Enter Location"),
     gender:Yup.string().required("Enter Gender")
 })
    return(
        <ScrollView>
            <SafeAreaView>
                <Formik
                initialValues={{name:" ",surname:" ",age:" ",location:" ",gender:" "}}
                validateOnMount={true}
                validationSchema={Validate}
                onSubmit={(values)=> Adduser(values.name,values.surname,values.age,values.location,values.gender)}
                
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        touched,
                        errors,
                        isValid
                    })=>(
                        <ScrollView>
                        <View style={styles.headCover}>
                        <View>
                            <Text style={styles.header}>
                                Add New Users
                            </Text>
                        </View>
                        <View style={styles.form}>
                            <TextInput style={styles.textinput} onChangeText ={handleChange("name")} onBlur={handleBlur("name")}  placeholder="Name" values={values.name} />
                            {errors.name && touched.name &&(
                                <Text style={{color:'red',paddingLeft:10}}> {errors.name}</Text>
                            )}
                            <TextInput style={styles.textinput} onChangeText ={handleChange("surname")} onBlur={handleBlur("surname")} placeholder="Please Enter Your Surname" value={values.surname}  />
                            {errors.surname && touched.surname &&(
                                <Text style={{color:'red',paddingLeft:10}}>{errors.surname}</Text>
                            )}
                            <TextInput style={styles.textinput} onChangeText ={handleChange("age")} onBlur={handleBlur("age")} placeholder={"Please Enter Your Age"} value={values.age}  />
                            {errors.age && touched.age &&(
                                <Text style={{color:'red',paddingLeft:10}}>{errors.age}</Text>
                            )}
                            <TextInput style={styles.textinput} onChangeText ={handleChange("location")} onBlur={handleBlur("location")}  placeholder={"Please Enter Your Location"} value={values.location} />
                            {errors.location && touched.location &&(
                                <Text style={{color:'red',paddingLeft:10}}>{errors.location}</Text>
                            )}
                            <TextInput style={styles.textinput} onChangeText ={handleChange("gender")} onBlur={handleBlur("gender")} placeholder={"Please Enter Your Gender"} value={values.gender}  />
                            {errors.gender && touched.gender &&(
                                <Text style={{color:'red',paddingLeft:10}}>{errors.gender}</Text>
                            )}
                        </View>
                        <View style={styles.button}>
                        
                            <Button title={"Submit"} onPress={handleSubmit} disabled={!isValid} />
                        </View>
                       
                        </View>
                        </ScrollView>
                    )}


                </Formik>
             
            </SafeAreaView>
        </ScrollView>
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