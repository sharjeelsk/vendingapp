import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'

const Success = (props) => {
    const nav=()=>{
        props.navigation.navigate("itemsscreen")
    }
    return (
        <View>
            <Text style={styles.heading}>Transaction Success</Text>
            <Text style={styles.description}>Your {props.route.params.item} is Dispensing</Text>
            <TouchableOpacity onPress={()=>nav()} ><Text style={styles.to}>Click to go to menu</Text></TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
heading:{
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center",
    color:"green",
    margin:10
},
description:{
    color:"#005",
    textAlign:"center",
},
to:{
    color:"blue",
    textAlign:'center'
}
})
export default Success;