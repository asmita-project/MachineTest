import react, { useEffect, useState } from "react";

import { Text, View,Image,ScrollView ,TextInput, TouchableOpacity} from "react-native";
import { HomeCss } from "./otpcss";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Feather from 'react-native-vector-icons/Feather'

export default function Otp(props) {

    
console.log(props)
    
    return (
      <ScrollView>
  <View style={HomeCss.HomeContainerBox}>
           
            {/* *****************Home page********************* */}
            <View >
                <View style={HomeCss.logostyle}>
                <View style={{width:50,height:50}}>
                <Image source={require("../../../assets/Group.png")} style={{width:"100%",height:"100%"}} alt="image" />
              </View>
              <View>
                <Text style={{fontSize:17,fontWeight:"600",color:"blue"}}>Click <Text style={{color:"orange"}}>Bubble</Text> </Text>
              </View>
                </View>
                <View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:17,fontWeight:"600",color:"black"}}>Password</Text>
                        <Text style={{fontSize:13,fontWeight:"600",color:"grey"}}>You have enter you key</Text>
                    </View>
                    <View style={HomeCss.inputbox}>
                        <TextInput style={HomeCss.inputstyle} keyboardType="decimal-pad"/>
                        <TextInput style={HomeCss.inputstyle} keyboardType="decimal-pad"/>
                        <TextInput style={HomeCss.inputstyle} keyboardType="decimal-pad"/>
                        <TextInput style={HomeCss.inputstyle} keyboardType="decimal-pad"/>
                        <TextInput style={HomeCss.inputstyle} keyboardType="decimal-pad"/>
                        <TextInput style={HomeCss.inputstyle} keyboardType="decimal-pad"/>
                        <View style={[{borderWidth:1,borderColor:"grey",borderRadius:5},HomeCss.inputstyle]}>
                            <View style={{padding:5,textAlign:"center"}}>
                            <Feather name="eye-off" size={15} color={"grey"}/>
                            </View>
                           
                        </View>

                    </View>
                </View>
                <View style={{marginTop:20}}>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('home')}} style={HomeCss.submitbutton}>
                        <Text style={{fontSize:13,fontWeight:"600",color:"white"}}>Submit</Text>
                    </TouchableOpacity>
                </View>
             
            </View>
        </View>
      </ScrollView>
      
    )
}