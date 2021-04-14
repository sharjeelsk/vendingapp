import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View,Text,StyleSheet,TextInput } from 'react-native';
import { Button,ThemeProvider } from 'react-native-elements';
import axios from 'axios'

const MachineConnect = (props) => {
    const [state,setState] = React.useState({number:"",machineId:"",error:"",loading:false})
    const onSubmit=()=>{
        console.log(state)
    setState({...state,loading:false,error:""})

let val = state.number 
let isnum =	/^((\+){1}91){1}[1-9]{1}[0-9]{9}$/.test(val);
if (isnum) {
//     axios({
//         method:"get",
//         url:"http://vmdemo.hfsgroup.in:8080/hfs_vm/consumer/connect",
//         headers: {'hfsKey': 'POS_102'},//,"Accept":"*/*","Accept-Encoding":"gzip,deflate,br","Connection":"keep-alive"
//          data:{
            
//          }
//      })
//    // axios.get("http://vmdemo.hfsgroup.in:8080/hfs_vm/consumer/connect",{headers:{'hfsKey':'POS_102'}})
//      .then(res=>{
//          console.log(res)
//         // props.navigation.navigate("itemsscreen",res.data)
//         setState({...state,loading:false,error:""})
//      }).catch(err=>{setState({...state,loading:false,error:""});console.log(err)})
props.navigation.navigate("itemsscreen")
//sendrequest
}else{
    setState({...state,error:"Enter a valid mobile number"})
}
    }
    return (
        <View >
            <Text style={styles.home}>Connect To Machine</Text>
            <Text style={styles.label}>Enter Your Phone Number eg.(+919123456789)</Text>
            <TextInput onChangeText={(e)=>setState({...state,number:e,error:""})  } value={state.number} style={styles.input}></TextInput>
            {state.error!==""?<Text style={styles.error}>{state.error}</Text>:null}
            <Text style={styles.label}>Enter Machine Id:</Text>
            <TextInput onChangeText={(e)=>setState({...state,machineId:e})} value={state.machineId} style={styles.input}></TextInput>
            <View  style={styles.button}>
                {
                    state.error!==""?<Button title="connect" backgroundColor="red" disabled onPress={()=>onSubmit()} />
                    :(state.loading===true?<Button loading title="connect" backgroundColor="red" onPress={()=>onSubmit()} />:<Button title="connect" backgroundColor="red" onPress={()=>onSubmit()} />)
                }
            
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    home:{
        fontSize:20,
        fontWeight:'bold',
        color:"#00f9",
        marginTop:100,
        marginBottom:50,
        textAlign:'center',
        fontSize:40
        
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input:{
          padding:7,
          borderWidth:1,
          borderColor:"#0006",
          borderRadius:3,
          marginLeft:30,
          marginRight:30,
      },
      label:{
        marginLeft:30,
        marginBottom:5,
        marginTop:20
      },
    error:{
color:'red',
marginLeft:30,
marginTop:5
    },
    button:{
        marginHorizontal:30,
        marginVertical:20
    }
})

export default MachineConnect;