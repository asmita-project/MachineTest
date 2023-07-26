import react from "react";
import { StyleSheet } from "react-native";

export const HomeAfter = StyleSheet.create({

    HomeContainerBox: {
        padding: 10,
        position:"relative",
        height:"100%"
    },

profileboxmain:{
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
},
profilenamebox:{
    alignItems: "center",
    gap: 10,
    flexDirection: "row"
},
searchbox:{
    elevation: 30,
    shadowColor: '#52006A',
    backgroundColor:"white",
    marginTop:30,
    marginBottom:30,
    padding:5,
    borderWidth:1,
    borderColor:"grey",
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity:0.1,
    shadowRadius:10,
},
addbutton:{
    position:"absolute",
    top: "92%",
    right: "0",
    left: "85%"
}
})