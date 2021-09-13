import React, { useState } from 'react';
import { ListItem ,Avatar, Header, Button} from 'react-native-elements';
import { SafeAreaView, View, StyleSheet,ScrollView, LayoutAnimation } from 'react-native';
import Users from './users';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Landing = ({navigation}) =>{
 const [setUsers] = useState([])
  const handleRemove=(e,id)=>{
  e.target.id
}
const deleteItem = (index)=>{
    const arr = [...Users.users];
    arr.splice(index)
}

    return(
        <ScrollView>
        <SafeAreaView >
            <View style={styles.container}>
            <Header>
                <Button title={"+ Add"} onPress={()=> navigation.navigate('AddUser')}></Button>
            </Header>
            <View style={styles.viewCover}>
               {
                   Users.users.map(action =>
                    <ListItem key = {action.id} style={styles.listView} >
                        
                        <ListItem.Content>
                            <ListItem.Title>
                                {action.name} {action.surname}
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron onPress={()=> navigation.navigate('About',{
                            itemId :action.id
                        })} />
                        <Button title={"delete"} onPress={deleteItem} />
                    </ListItem>
                    )
               }
            </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create( {
    listView :{
        borderBottomColor :'gainsboro',
        borderBottomWidth: 0.5,
    },
    viewCover:{
        padding :2,
       
    },
    container:{
        backgroundColor:'#a9c2b9'
    }

})
export default Landing