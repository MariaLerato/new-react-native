import React from 'react';
import SwipeableItem from 'react-native-swipeable-item'
import Animated from 'react-native-reanimated'
import {Text,View,StyleSheet,FlatList,LayoutAnimation,TouchableOpacity,Platform,UIManager} from 'react-native'
import Users from './users';
import { ListItem } from 'react-native-elements';
import DraggableFlatList,{RenderItemParams} from 'react-native-draggable-flatlist'

const {multiply,sub,route} = Animated;
const initialData =
Users.users.map(action =>
    <ListItem key = {action.id}  >
        
        <ListItem.Content>
            <ListItem.Title>
                {action.name} {action.surname}
            </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron onPress={()=> navigation.navigate('About',{
            itemId :action.id
        })} />
    </ListItem>
);
// const {item:Item} = route.params
class NewHome extends React.Component {
    state = {
        data: initialData,
    };
    itemRefs = new Map();
    deleteItem = (item) =>{
        const updatedData = this.state.data.filter((d)=> d !== item);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({ updatedData})
    };
    renderUnderlayLeft = ({item, percentOpen} = UnderlayParams(Item) )=>(
        <Animated.View style={[styles.row, styles.underlayleft,{opacity:percentOpen}]}>
            <TouchableOpacity onPressOut={()=>this.deleteItem(item)} >
                <Text styles={styles.text}>{`[x]`}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
    render() { 
        return <div>
            <View>
                <DraggableFlatList keyExtractor = {(item)=> item.key} data={this.state.data} renderItem={this.renderItem} onDragEnd={({data})=> this.setState({data})} activationDistance={10} />
            {
                Users.users.map(action=>{
                    action.name
                })
            }
            </View>
        </div>;
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
export default NewHome;