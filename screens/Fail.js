import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'


const Fail = (props) => {
    console.log(props)
    return (
        <View>
            <Text style={styles.heading}>Transaction Failed</Text>
            <Text style={styles.description}>of item {props.route.params.item}</Text>
            <TouchableOpacity onPress={()=>props.navigatation.navigate("itemsscreen")} ><Text  style={styles.to}>Click to go to menu</Text></TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center",
        color:"red",
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
export default Fail;