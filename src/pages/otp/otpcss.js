import react from "react";
import { StyleSheet } from "react-native";

export const HomeCss = StyleSheet.create({

    HomeContainerBox: {
        padding: 20
    },


    labeltext: {
        fontSize: 30,
        color: "black"
    },

    labelBox: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    logostyle: {
        marginBottom: 80,
        marginTop: 80,
        paddingBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        gap: 12
    },

    submitbutton: {
        borderRadius: 5,
        padding:10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#066DE3"
    },

    inputstyle: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width:40
    },
    inputbox: {
        flexDirection: "row",
        gap: 10,
        padding: 30,
        alignItems: "center",
        justifyContent: "center"
    }


})