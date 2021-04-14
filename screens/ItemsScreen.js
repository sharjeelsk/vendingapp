import React from 'react'

import { View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native'
import Response from '../assets/response.json'
const ItemsScreen = (props) => {
    let {items} = Response;
    let itemsarray = []
    for(i=0;i<items.length-1;i++){
        let j=i+1
        if(items[i].springName[0]===items[j].springName[0]){
            itemsarray.push(items[i])
        }else{
            itemsarray.push("break")
        }
    }
        
    return (
        <View>
            <Text style={styles.heading}>Items</Text>

        <ScrollView horizontal>
        <View >
            {
                itemsarray.map((item,index)=>(
                item==="break"?<View key={index+"1"} style={styles.break}></View>:
                <TouchableOpacity onPress={()=>props.navigation.navigate("itemdetail",item)} ><View style={styles.headdiv}>
               <View  style={styles.viewparent} key={item.sprintSno}>
                <Text style={styles.indexcolor}>{item.springName}:-</Text>
                <Text style={styles.itemcolor}>{item.itemName}</Text>
                </View>
                </View>
                </TouchableOpacity>

                ))
            }
        </View>
        </ScrollView>
        </View>
    );
}

const styles=StyleSheet.create({
    headdiv:{
        borderWidth:5,
        borderColor:"#ccc",
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:20,
        paddingRight:20,
        margin:5
    },
    viewparent:{
        flexDirection:'row',

    },
    itemsview:{
        flex:1,
        padding:30,
        alignItems:'center',
        justifyContent:'center',
    },
    scrollView:{
        marginHorizontal:50
    },
    heading:{
        fontSize:35,
        textAlign:'center',
        marginTop:30,
        fontWeight:"bold",
        color:"#008"
    },
    break:{
        margin:15,
        flexDirection:'column',
    },
    indexcolor:{
        color:"#206a5d",
    },
    itemcolor:{
        color:"#81b214"
    }
})


export default ItemsScreen;