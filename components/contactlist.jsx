import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Header } from 'react-native-elements';
import { SafeAreaView,View,Text, StyleSheet ,ScrollView} from 'react-native';

const Contact = () =>{
    return(
        <>
        <SafeAreaView>
            <ScrollView style={{padding:15}}>
                <View>
                    <Header>
                        <Text style={{color:'white',padding:2,fontWeight:'bold',fontSize:30}}>

                        Contact
                        </Text>
                    </Header>
                </View>
                <View style={styles.container}> 
                    <View>
                        <Text style={styles.textinput}>
                            <MaterialCommunityIcons name={"account"} color={"black"} size={75} /> My Contact Details
                        </Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold'}}>
                            <MaterialCommunityIcons name={"mail"} color={"tomato"} size={35} /> fenyane02@gmail.com
                        </Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold'}}>
                            <MaterialCommunityIcons name={"phone"}  color={"grey"} size={35} /> 0793879978
                        </Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold'}}>
                            <MaterialCommunityIcons name={"facebook"} color={"blue"} size={35} /> Maria_Lerato
                        </Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold'}}>
                            <MaterialCommunityIcons name={"linkedin"} color={"lightblue"} size={35} /> Maria Lerato
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    textinput:{
        fontWeight:'bold',fontSize:25,color:'white',borderRadius:45
    },
    container:{alignItems:'center',textAlign:'center',backgroundColor:'gainsboro',borderBottomColor:'grey',marginTop:15,padding:10,height:1000}
})
export default Contact