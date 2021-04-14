import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View,Text,StyleSheet,TextInput } from 'react-native';
import { Button,ThemeProvider } from 'react-native-elements';


const LoginScreen = (props) => {
    const [state,setState] = React.useState({number:"",password:"",error:"",loading:false})
    const onSubmit=()=>{
        console.log(state)
let val = state.number 
let isnum =	/^((\+){1}91){1}[1-9]{1}[0-9]{9}$/.test(val);
if (isnum) {
    setState({...state,loading:true,error:""})
    props.navigation.navigate("machineconnect")

//sendrequest
}else{
    setState({...state,error:"Enter a valid mobile number"})
}
    }
    return (
        <ThemeProvider theme={theme}>
        <View  >
            <Text style={styles.home}>LogIn</Text>
            <View>
            <Text style={styles.label}>Enter Your Phone Number eg.(+919123456789)</Text>
            <TextInput onChangeText={(e)=>setState({...state,number:e,error:""})  } value={state.number} style={styles.input}></TextInput>
            {state.error!==""?<Text style={styles.error}>{state.error}</Text>:null}
            <Text style={styles.label}>Enter Your Password:</Text>
            <TextInput onChangeText={(e)=>setState({...state,password:e})} value={state.password} style={styles.input}></TextInput>
            <View  style={styles.button}>
                {
                    state.error!==""?<Button title="LogIn" backgroundColor="red" disabled onPress={()=>onSubmit()} />
                    :(state.loading===true?<Button loading title="LogIn" backgroundColor="red" onPress={()=>onSubmit()} />:<Button title="LogIn" backgroundColor="red" onPress={()=>onSubmit()} />)
                }
            
            </View>
            </View>
        </View>
        </ThemeProvider>
    );
}
const theme = {
    
  };
const styles=StyleSheet.create({
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

export default LoginScreen;