import React from 'react';
import { View,Text,Button,StyleSheet,TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';


const Welcome = (props) => {
    return (
        <View style={styles.container}>
            
            <Text  style={styles.home}>Welcome to Vending app</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("signup")} ><Text>Click dive in!</Text></TouchableOpacity>
            <StatusBar style="auto" />

        </View>
    );
}

const styles=StyleSheet.create({
home:{
    fontSize:20,
    fontWeight:'bold',
    color:"#00f9"
    
},
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Welcome;