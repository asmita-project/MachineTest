import react from "react";

import { Text, View, Image } from "react-native";
import { HomeAfter } from "./homecss";
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default function Home() {
    return (

        <View style={HomeAfter.HomeContainerBox}>
            <View style={HomeAfter.profileboxmain}>
                <View style={HomeAfter.profilenamebox}>
                    <View style={{ width: 40, height: 40 }}>
                        <Image source={require("../../../assets/profile.png",)} style={{ width: "100%", height: "100%" }} alt="image" />
                    </View>
                    <View>
                        <Text style={{ fontSize: 21, fontWeight: "600", color: "black" }}>Hello,
                            <Text style={{ fontSize: 21, fontWeight: "400", color: "black" }}> Viewer!</Text>
                        </Text>
                    </View>
                </View>
                <View>
                    <Fontisto name="bell" size={20} color={"blue"} />
                </View>
            </View>
            <View style={HomeAfter.searchbox}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "end", 
                }}>
                    <Fontisto style={{backgroundColor: "#066DE3",padding:7,borderRadius:50,textAlign:"center"}} name="search" size={12} color={"white"} />
                </View>
            </View>
            <View style={{backgroundColor:"#D9D9D9",width:"100%",height:265,borderRadius:10}}>
            </View>
            <View style={HomeAfter.addbutton}>
                <View style={{backgroundColor: "#95A5A6",padding:10,borderRadius:100,width:40,height:40,justifyContent:"center",alignItems:"center"}}>
                <AntDesign style={{fontWeight:"700"}}  name="plus" size={17} color={"white"} />

                </View>

            </View>
        </View>
    )
}