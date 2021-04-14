import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View,Text,StyleSheet,TextInput,SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Button,ThemeProvider } from 'react-native-elements';
import axios from 'axios'

//validation is remaining --->is num for all fields

const SignupScreen = (props) => {
    const [state,setState] = React.useState({number:"",password:"",error:"",loading:false,firstname:"",lastname:"",gender:"",age:"",country:"",email:"",captcha:"",Mainerror:""})
    const onSubmit=()=>{
let val = state.number 
let isnum =	/^((\+){1}91){1}[1-9]{1}[0-9]{9}$/.test(val);
if (isnum) {
    setState({...state,loading:true,error:""})
    axios({
       method:"post",
       url:"http://vmdemo.hfsgroup.in:8080/hfs_vm/consumer/registration",
       headers: {'hfsKey': 'POS_102'},
        data:{
            firstname:state.firstname
        }
    }).then(res=>{
        console.log(res);
        if(res.data.mesg==="Registration success" || res.status===200){
     props.navigation.navigate("machineconnect")

    }else{
        setState({...state,Mainerror:"Invalid cred"}) //instead of this put res.data.message for the error
    }

})
    .catch(err=>console.log(err))

//sendrequest
}else{
    setState({...state,error:"Enter a valid mobile number"})
}
    }
    return (
        <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ThemeProvider theme={theme}>
        <View  >
            <Text style={styles.home}>SignUp</Text>
            <View>
            <Text style={styles.label}>Enter Your First Name</Text>
            <TextInput onChangeText={e=>setState({...state,firstname:e,error:""})} value={state.firstname} style={styles.input}></TextInput>
            {state.error!==""?<Text style={styles.error}>{state.error}</Text>:null}
            
            <Text style={styles.label}>Enter Your Last Name</Text>
            <TextInput onChangeText={e=>setState({...state,lastname:e,error:""})} value={state.lastname} style={styles.input}></TextInput>
            {state.error!==""?<Text style={styles.error}>{state.error}</Text>:null}

            <Text style={styles.label}>Enter Your Gender</Text>
            <TextInput onChangeText={e=>setState({...state,gender:e,error:""})} value={state.gender} style={styles.input}></TextInput>
            {state.error!==""?<Text style={styles.error}>{state.error}</Text>:null}

            <Text style={styles.label}>Enter Your Age</Text>
            <TextInput onChangeText={e=>setState({...state,age:e,error:""})} value={state.age} style={styles.input}></TextInput>
            {state.error!==""?<Text style={styles.error}>{state.error}</Text>:null}

            <Text style={styles.label}>Enter Your Country</Text>
            <TextInput onChangeText={e=>setState({...state,country:e,error:""})} value={state.country} style={styles.input}></TextInput>
            {state.error!==""?<Text style={styles.error}>{state.error}</Text>:null}
            
            <Text style={styles.label}>Enter Your Phone Number eg.(+919123456789)</Text>
            <TextInput onChangeText={(e)=>setState({...state,number:e,error:""})  } value={state.number} style={styles.input}></TextInput>
            {state.error!==""?<Text style={styles.error}>{state.error}</Text>:null}

            <Text style={styles.label}>Enter Your Email</Text>
            <TextInput onChangeText={e=>setState({...state,email:e,error:""})} value={state.email} style={styles.input}></TextInput>
            {state.error!==""?<Text style={styles.error}>{state.error}</Text>:null}
            
            <Text style={styles.label}>Enter Your Password:</Text>
            <TextInput onChangeText={(e)=>setState({...state,password:e})} value={state.password} style={styles.input}></TextInput>

            <Text style={styles.label}>Enter Captcha which you see</Text>
            <TextInput onChangeText={e=>setState({...state,captcha:e,error:""})} value={state.captcha} style={styles.input}></TextInput>
            {state.error!==""?<Text style={styles.error}>{state.error}</Text>:null}
            
            
            <View  style={styles.button}>
                {
                    state.error!==""?<Button title="LogIn" backgroundColor="red" disabled onPress={()=>onSubmit()} />
                    :(state.loading===true?<Button loading title="LogIn" backgroundColor="red" onPress={()=>onSubmit()} />:<Button title="LogIn" backgroundColor="red" onPress={()=>onSubmit()} />)
                }
            
            </View>
            </View>
            {state.Mainerror!==""?<Text>{state.Mainerror}</Text>:null}
            <TouchableOpacity  onPress={()=>props.navigation.navigate("login")} ><Text style={styles.op}>Already a user, login</Text></TouchableOpacity>
        </View>
        </ThemeProvider>
        </ScrollView>
    </SafeAreaView>
    );
}
const theme = {
    
  };
const styles=StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        marginHorizontal: 20,
      },
    op:{
        color:"blue",
        textAlign:"center",
        paddingBottom:50
    },
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

export default SignupScreen;