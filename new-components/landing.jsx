import React from 'react';
import { SafeAreaView, View, Text,StyleSheet, ImageBackground}from 'react-native';
import { Button, Header, ListItem } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import InitialUser from './users';

const HomePage = ({navigation}) =>{
 const image = {uri:'https://images.pexels.com/photos/1376766/nature-milky-way-galaxy-space-1376766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'};
    return(
        
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
            <View style={{color:'green'}}>
                
                <Header style={styles.back}>
                <Text>
                    Registered Users
                </Text>
                    <Button title={"Register"} onPress={()=>navigation.navigate('FormAdd')} />
                </Header>
                    <View>               
                    {
                        InitialUser.users.map(action =>
                            <ListItem key={action.id}>
                            <Avatar  rounded size='small' source={{uri:action.img}}>
                              <ListItem.Content>
                                 
                                 <ListItem.Title>
                                    {action.name}  {action.surname}  
                                 </ListItem.Title>
                                 
                              </ListItem.Content>
                              </Avatar>
                              <ListItem.Chevron  onPress={()=>navigation.navigate("Profile",{
                                  itemId:action.id
                              })}/>
                            </ListItem>   
                        )
                    }
                    </View>
                
                 
                
            
            </View>
            </ImageBackground>
        </SafeAreaView>
       
    )
}
const styles = StyleSheet.create({
        backgroundImage:{
           flex:1,
           width:'100%',
           height:'100%',

           justifyContent:'center'
        },
        back:{
            backgroundColor:'green',
            color:'black'
        },
        container:{
            justifyContent:'center',
            padding:10,
            marginTop:20,
            backgroundColor:'grey'
        }
        
    
})
export default HomePage