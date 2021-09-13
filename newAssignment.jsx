import React from 'react';
import { ListItem } from 'react-native-elements';
import { SafeAreaView,StyleSheet,View,Text,StatusBar,FlatList } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const SwipeGesture = ({onRemove,Id}) =>{
    
    const todoList = [{id:1,name:'Maria',surname:'Fenyane'},
                    {id:2,name:'Katlego',surname:'Fenyane'},
                {id:3,name:'Lerato',surname:'Khumalo'},{
                    id:4,name:'Nhlanhla',surname:'Mahlomber'
                }]
    const Separator = () => <View style={{padding:2,backgroundColor:'green'}}/>
   const LeftSwipeActions = () =>{
       return(
           <View style={{flex:1,backgroundColor:'#ccffbd',justifyContent:'center'}}
            >
                <Text style={{color:'#40394a',paddingHorizontal:10, fontWeight:'600',paddingHorizontal:30,paddingVertical:20}}>
                Delete
                </Text>
            </View>
           )
   }
   const rightSwipeActions = () =>{
       return(
           <View style={{backgroundColor:'#ff8303',justifyContent:'center',alignItems:'flex-end'}}>
               <Text style={{color:'#1b1a17',paddingHorizontal:30,paddingVertical:20,fontWeight:'600'}} onPress={()=>{onRemove(Id)}}>
    
               </Text>
               
           </View>
       )
   }
   const swipeFromLeftOpen = ()=>{
       alert('Swipe from left')
   }
   const swipeFromRightOpen = () =>{
       alert('Swipe from right')
   }
   const ListItem = ({text}) =>(
       <Swipeable
       renderLeftActions={LeftSwipeActions}
       renderRightActions ={rightSwipeActions}
       swipeFromLeftOpen={swipeFromLeftOpen}
       swipeFromRightOpen={swipeFromRightOpen}
       >
          <View style={{paddingHorizontal:30,paddingVertical:20,backgroundColor:'white',}}>
            <Text style={{fontSize:24}} style={{fontSize:20}} >
                {text}    
            </Text>    
          </View> 
       </Swipeable>
   ) 
    return(
        <>
        <StatusBar />
        <SafeAreaView>
            <Text style={{textAlign:'center',marginVertical:20}}>
                Swipe right or left
            </Text>
        <FlatList
            data={todoList}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=>
            <ListItem {...item} />}
            ItemSeparatorComponent={()=><Separator />}
        />
        </SafeAreaView>
     
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    itemSeparator:{
        flex:1,
        height:1,
        backgroundColor:'#444'
    }
})
export default SwipeGesture