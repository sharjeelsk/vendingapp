import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Button } from 'react-native'
import RazorpayCheckout from 'react-native-razorpay';

// availability: 10
// base64: "iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgAQAAAABVr4M4AAAEGUlEQVR42u2dMXbjMAxE4beFSx1BR9HRnKPpKDqCShd+wYoEBoScZJvdZoVhpcj8qvBIzBBERP9iCGHChAn/C3gTG4u/OR52fzXbqw+Z97t+ijx0m57+20S4EjzZjA5/yvFgM1RXkfvrZp/rcGOev/r0jXAtuE89GLEwWme1Gavgu8fU9pXH2uD2lYVwWbjP6AvT6WGddzmY43Ptu4QJt3Hvm1YbPrW/6YNwTRhrjUQYtUWn715tPTpC7RgvT3p+2OgIXxtG1rv1fcgSmj88fJ8yE740HKNlLSI9nnpg9XiSm0sj/PSD+CZ8aRhBMxYdz2Nsr9KU7D7yZMKFYFWTPao9jLoiespJCIkgIW7+yy3tVYSLwLvnuHM3WXqOK0NR6zBZWoqzt68QrgaPLcpEcpshWI9cLPl3H5BGj1UI14OPrMVkszv4NnaYLGpZr8CbE8LFYEjilL70ZcgDy6ba6qNIfzfClWDsVYs9uLfidptJo8VNlseKKFwIl4K3kD0CkWzpL9KXUNTNpLPT5VN4Eq4AK6YOu1YhpO3NMPenYeASrgNrZLRZI+EIGTsT7FoxabQmu5ZwAXhHsqupBsXy4AnJrr2BI/O+0RG+POyMq+UkjVaza30qxNJYqgiXgdsP3ZOdoZZNGsXqYwmNW/kO5/NnwteHYeUjwjSnv2IL02zenPgxYQpPwoXgGL5p9fXITweH3Y/xIFwMNrstnLhRXrD4NvYxTgdtzcoJDeEKsIvkjwW+7TrDm0tq+ekls1My9wlXg/sWhUsXcUPD85hNogTBwnElXAs2JwVM5DE+TCypnvazLI0IV4DDk3VF1JYhr7nHd0ft43BkCFeCc2G0GSj70EjwbVMefEpoCBeBkfVayaO8KyKvsPeYQxEt4WLw24WueZwcq18k9sOh1atSTuVOhK8PQ/asI7C89nHNLQm8GGXS+C7hOrApoqh99DzmS4QB9ho4wqXgOB0M3xZZ77L56aC/8d4WerrMQbgGHJeE0QFHQyPZFS/0PRklCAvhUrDpZ0tk4bb4HVFUHnidQRTIjoMfwjXgcVtYTxeJ3UnRU+MbfSuQJVwEtqt9UQWb6mKt8Y0nNDevYfLyJsLV4CSbR10sEhr7CSbdTxeJCV8btr9RloTmFGG7pNaN3hxn3BElXAOG/omsF1NTfZKkixlenkK4EpwkcZTDpl5aKIcdighzCNeBR6dgL4fV6FIR5z1+62/020rnz4QrwOdOr9H71RsnfXpf6Vcku6cII1wEjv6eElO9OUU0KZDT7pXL2gjXgmPRibte0/cF1rkDDuFaMNoBx1qT2yS9UPGmX8udCF8fHv+9IJqpvdABJ/pWiJx6ab0nNISvDUenYGxIfh8DW1Q4uZocmS9thglfGeZ/kSJMmPB/C/8GNPxYGtxzDhUAAAAASUVORK5CYII="
// discount: 10
// gst: 18
// itemId: 11
// itemName: "Dairy milk"
// price: 10
// springName: "A1"
// sprintSno: 1
// totalSlots: 20

const ItemDetail = (props) => {
    const [state,setState] = React.useState([])
    React.useEffect(()=>{
        setState({...props.route.params,availability:props.route.params.availability-1,trackquant:1})
    },[])

    const BuyItem=()=>{
        var options = {
            description:`buying ${state.itemName}`,
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_mkB46Dd6RvaSmv',
            amount: (state.price*state.trackquant)*100,
            name: state.itemName,
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software'
            },
            theme: {color: '#006'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
           alert(`Success: ${data.razorpay_payment_id}`);
           props.navigation.navigate("success",{item:state.itemName,data})
          }).catch((error) => {
            // handle failure
           alert(`Error: ${error.code} | ${error.description}`);
           props.navigation.navigate("fail",{item:state.itemName,error})
          });
    }
    return (
        <View >
            <View style={styles.container}>
            <Text style={styles.heading}>
                {state.itemName}
            </Text>
            <View style={styles.row}>
                <Text style={styles.PaddingRight}>Available :</Text>
                <Text>{state.availability}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.PaddingRight}>ItemId :</Text>
                <Text>{state.itemId}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.PaddingRight}>Price :</Text>
                <Text>{state.price}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.PaddingRight}>Discount :</Text>
                <Text>{state.discount}</Text>
            </View>
            <Text style={styles.quant}>Quantity:</Text>
            {console.log(state.length)}
            {state?<View style={styles.row}>
                <TouchableOpacity onPress={()=>{
                    if(state.availability===0){
                        return;
                    }else{
                        //console.log(state)
                        setState({...state,trackquant:state.trackquant+1,availability:state.availability-1})
                    }
                }} ><Text style={styles.touchtext}>+</Text></TouchableOpacity>
                <Text>{state.trackquant}</Text>
                <TouchableOpacity onPress={()=>{
                    if(state.trackquant<2){
                        return;
                    }else{
                        //console.log(state)
                        setState({...state,trackquant:state.trackquant-1,availability:state.availability+1})
                    }
                }} ><Text style={styles.touchtext}>-</Text></TouchableOpacity>
            </View>:null}
            <Text style={styles.quant}>Total Price:{state.price*state.trackquant}</Text>
            <Button title="Buy Now" onPress={()=>BuyItem()} color="#005"></Button>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    touchtext:{
        fontSize:30,
        marginRight:10,
        marginLeft:10
    },
    quant:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:10
    },
    PaddingRight:{
        fontSize:18,
        paddingRight:6},
    row:{
        flexDirection: "row",
        justifyContent:'center',
        alignItems:'center',
        margin:5,
    },
    container:{
        borderWidth:2,
        borderColor:"#ccc",
        marginTop:150
    },
    heading:{
       fontSize:30,
       fontWeight:"bold" ,
       textAlign:"center",
       color:"#009",
       marginTop:5
       
    }
})

export default ItemDetail;