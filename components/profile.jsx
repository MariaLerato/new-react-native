import React from 'react';
import { StyleSheet,View,Text,SafeAreaView,Image,ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const MyProfile = () =>{

    return(
        <ScrollView>
        <View style={{marginTop:-1}}>
            <View style={{marginTop:-2,alignItems:'center'}}>
             <Image
                style={styles.image}  source={require('../assets/mew.jpg')} 
                >
            </Image>
            <Text style={{marginTop:-5,fontWeight:'bold',fontSize:25}}>
                Maria Fenyane
            </Text>
            <Text style={{marginTop:3,fontFamily:'cursive'}}>
                Software Developer
            </Text>

            </View>
            <View style={styles.container}>
            <View style={styles.leftColumn}>
                <Text>
                <MaterialCommunityIcons name={"account"} color={'black'} size={35} />  Contact Details
                </Text>
                <Text>
                    <MaterialCommunityIcons name={"mail"} color={'red'}  size={20}/> fenyane02@gmail.com
                </Text>
                <Text>
                    <MaterialCommunityIcons name={"phone"} color={'black'} size={20} /> 0793879978 
                </Text>
                <Text>
                    <MaterialCommunityIcons name={"facebook"} color={'blue'} size={20} /> Maria_Lerato
                </Text>
                <Text>
                    <MaterialCommunityIcons name={"linkedin"} color={'lightblue'} size={20} /> Maria Lerato
                </Text>
            </View>
            <View style={styles.rightColumn}>

    
              <View>
                <Text style={{fontWeight:'bold'}}>
                    <MaterialCommunityIcons name={"card"} color={'grey'} size={35} /> About Me
                </Text>
                <Text style={{padding:2}}>
                    I am a Software Developer, proficient in HTML5,CSS3 and JavaScript. Able to create applications using a JavaScript library Reactjs. Have knowledge in VB.net and Python programming.
                    <br />Trained Software Development at mlab south africa in Codetribe academy
                </Text>
              </View>
                <View>
                    <Text>
                        <MaterialCommunityIcons name={"book"} color={'lightblue'} size={35} /> Work Experience
                    </Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{padding:2,fontWeight:'bold'}}>
                        June 2021 - Nov 2021
                    </Text>
                    <Text style={{padding:4}}>
                        Software Development Trainee
                       <br /> Codetribe mlab South Africa
                       <br /> Created websites and web applications using Reactjs. Learnt Scrum and Soft-skills
                    </Text>
                    </View>
                    <Text>
                        <MaterialCommunityIcons name={"book-open"} color={'tomato'} size={35} /> Education
                    </Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>
                        2013 - 2017 
                      <br />  2018 - 2020
                    </Text>
                    <Text style={{padding:4}} >
                        Derek Kobe Senior Secondary School
                        Grade 12
                    <br />Capricorn Tvet college
                        NC(V) Level 4 in ITC
                    </Text>
                </View>
                 
                </View>
                <View>
                    <Text style={{marginTop:-3}}>
                        <MaterialCommunityIcons name={"account"} color={'black'} size={35} /> References
                    </Text>
                    <Text>
                        Tyson Moyahabo Motlhabeng
                       <br/> CodeTribe Facilitator Mlab Limpopo
                        <br />tyson@mlab.co.za
                  <br />   <br />   PC Mothata
                       <br /> System Analysis And Design 
                       <br />Lecturer Capricorn Tvet college
                       <br /> 0714262900
                    </Text>
                </View>
                <View>
                    <Text>
                        <MaterialCommunityIcons name={"circle"} color={'blue'} size={35} /> Skills
                    </Text>
                    <Text>
                       HTML5
                    </Text>
                    <Text>
                       CSS3
                    </Text>
                    <Text>
                     JavaScript
                    </Text>
                    <Text>
                    Ms Word
                    </Text>
                </View>
            </View>
           </View>
           </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    leftColumn:{
        padding: 10
    },
    image:{
        width:150,
        height:300,
        resizeMode:'center',
        borderRadius:50
    },
    rightColumn:{

    },
    container:{
        flexDirection:'row',
        overflow:'visible',height:1000,
        margin:0,
        padding:0,
        width:500
    },
    headline:{

    }
})
export default MyProfile