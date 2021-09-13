import React, { useEffect, useState } from 'react';
import { SafeAreaView, View , Text, StyleSheet} from 'react-native';
import { Avatar, Button, Header, ListItem } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import Users from './users';

const About = ({ route, navigation }) =>{
    const {itemId} = route.params
    const id = parseInt(itemId)
    const [userInfo, setInfo] = useState([])
    let item = () =>{
        return Users.users.filter(action =>{
            return action.id === id
        })
    }

    useEffect(() =>{
        setInfo(item())
    },[])
    console.log((item()))
    const UpdateUser = ()=>{

    }
    return(
        <>
        <SafeAreaView>
            <View>
               {
                   userInfo.map(data =>
                    <View key={data.id}>
                        <View style={styles.headCover}>
                            <Text style={{color:'black',fontSize:25,fontWeight:'600'}}>
                                About User
                            </Text>
                        </View>
                        <View style={styles.headCover} >
                            <TextInput  style={styles.textinput} defaultValue={data.name} />
                          
                            <TextInput defaultValue={data.surname} style={styles.textinput}/>

                           <TextInput defaultValue={data.age} style={styles.textinput}/>
                            <TextInput defaultValue={data.location} style={styles.textinput} />
                            <TextInput defaultValue={data.gender} style={styles.textinput} />
                        </View>
                        <View style={styles.headCover}>
                            <Button title={'Update'} onPress={UpdateUser} />
                        </View>

                    </View>
                    )
               }
            </View>
        </SafeAreaView>
        </>
    )
}
const styles = new StyleSheet.create({
    headCover :{
        textAlign: 'center',
        padding : 10,
        textTransform:'uppercase',
        fontWeight:'bolder',
        fontSize:20,
        alignItems:'center',
        color:'white',
        backgroundColor:'#71697a',
        resizeMode:'cover',
        // height:500
        
    },
    textinput :{
            height:50,
            padding:11,
            margin:4,
            borderRadius:10,
            backgroundColor:'gainsboro',
            width:500
            
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
export default About