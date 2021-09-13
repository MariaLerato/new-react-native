import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {version} from 'react'
import Animated from 'react-native-reanimated'
import {Text,View,StyleSheet,FlatList,LayoutAnimation,TouchableOpacity} from 'react-native'
import Users from './users';
import { ListItem } from 'react-native-elements';
import DraggableFlatList,{RenderItemParams} from 'react-native-draggable-flatlist'

const NewData =({navigation})=>{
    const listsize=Users.users.length
    const NewItem = ({data,handleDelete}) =>{
        const rightSwipe = () =>{
            return(
                <TouchableOpacity onPress={handleDelete} activeOpacity={0.6}>
                    <View style={{backgroundColor:'red',justifyContent:'center',alignItems:'center',width:100,height:'100%'}}>
                    <Animated.Text>
                        Delete
                    </Animated.Text>
                    </View>
                </TouchableOpacity>
            );
        }
    return(
        <Swipeable renderRightActions={rightSwipe}>
            <TouchableOpacity onPress={()=>navigation.navigate("Users",{data})} some={1}>
                <View>
                    <Text>
                        {data.id +"." + data.name + data.surname}
                    </Text>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
    };
    const Full = () =>{
        return(
            <FlatList data={Users} renderItem={({item,index})=>{
                return <NewItem data={item} handleDelete={()=> deleteItem(index)} />
            }}
            ItemSeparatorComponent={()=>{
                return(
                    <View style={{
                        height:1,
                        width:Screen,
                        backgroundColor:'black'
                    }}
                    ></View>
                )
            }}
            />

        )
    }
    const deleteItem = (index)=>{
        const arr = [...Users];
        arr.splice(index,1)
    }
}


 const styles = StyleSheet.create({
     container:{
         flex:1,
     },
     row:{
         flexDirection:'row',
         flex:1,
         alignItems:'center',
         justifyContent:'center',
         padding:15,
     },
     text:{
         fontWeight:'bold',
         color:'white',
         fontSize:32,
     },
     underlayleft:{
         flex:1,
         backgroundColor:'tomato',
         justifyContent:'flex-end'
     },
     listView:{
        borderBottomColor :'gainsboro',
        borderBottomWidth: 0.5,
    },
 })
export default NewData