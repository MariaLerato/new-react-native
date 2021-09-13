<SwipeListView
data={listViewData}
renderItem={ (data, rowMap) => (
    <View style={{padding: 10,color:'green'}}>
        <Text>I am  in a SwipeListView</Text>
    </View>
)}
renderHiddenItem={ (data, rowMap) => (
    <View style={{color:'purple',width:20}}>
        <Text>Left</Text>
        <Text>Right</Text>
    </View>
)}
leftOpenValue={75}
rightOpenValue={-75}
/>