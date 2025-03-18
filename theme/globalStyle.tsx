import { useMemo } from "react";
import { StyleSheet, Platform } from "react-native"; 
import { useFonts as KaushanFonts, KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script';
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  } from '@expo-google-fonts/poppins';


function useGlobalStyles() {
    let [poppins_fonts] = useFonts({Poppins_300Light,Poppins_400Regular,Poppins_500Medium,Poppins_600SemiBold,Poppins_700Bold});
    let [kaushan_fonts] = KaushanFonts({KaushanScript_400Regular});
    return useMemo(() => globalStyles(), []);
}


export const palette ={
    white: "#fff",
    black: "#262626",
    orange: "#cc672e",
    darkOrange: "#793006",
    lightGrey: "#fbfbfb",
    lightGrey2: "#c7c7c7",
    grey: "#868686",
    red: "#D60000"
}

const globalStyles = () => StyleSheet.create({
    kaushanFont:{
        fontFamily: 'KaushanScript_400Regular'
    },
    poppinsLightFont:{
        fontFamily: "Poppins_300Light"
    },
    poppinsRegularFont:{
        fontFamily: "Poppins_400Regular"
    },
    poppinsMediumFont:{
        fontFamily: "Poppins_500Medium"
    },
    poppinsSemiFont:{
        fontFamily: "Poppins_600SemiBold"
    },
    poppinsBoldFont:{
        fontFamily: "Poppins_700Bold"
    },
    container:{
        flex: 1,
        paddingVertical: Platform.OS === 'ios' ? 55 : 15,
        paddingLeft: 20,
        paddingRight: 20,
        overflow: 'visible',
        backgroundColor: "#fff",
    },
    headerText:{
        fontSize: 40,
        color: palette.orange,
        fontFamily: 'KaushanScript_400Regular'
    },
    subtext:{
        fontSize: 16,
        color: palette.black,
        fontFamily: 'Poppins_400Regular',
        marginTop: 4
    },
    darkText:{
        fontSize: 16,
        color: palette.darkOrange,
        fontFamily: 'Poppins_400Regular',
        marginTop: 8,
        textAlign: 'center'
    },
    primaryButton:{
        backgroundColor: palette.orange,
        borderRadius: 50,
        width: "100%",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        marginTop: 30

    },
    secondaryButton:{
        backgroundColor: palette.black,
        borderRadius: 50,
        width: "100%",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        marginTop: 30
    },
    buttonText:{
        color: palette.white,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        paddingRight: 10,
    },
    signupInput:{
        borderRadius: 8,
        borderColor: palette.orange,
        borderWidth: 1,
        height: 55,
        width: "100%",
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        alignItems: "center",
        paddingLeft: 16,
        marginTop: 16
    },
    primaryLabel:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        marginTop: 16,
        color: palette.black
    },
    primaryInput:{
        borderRadius: 5,
        borderColor: palette.lightGrey,
        backgroundColor: palette.lightGrey,
        borderWidth: 1,
        height: 55,
        width: "100%",
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        alignItems: "center",
        paddingLeft: 16,
        marginTop: 8
    },
    selectInput:{
        borderRadius: 5,
        borderColor: palette.lightGrey,
        backgroundColor: palette.lightGrey,
        borderWidth: 1,
        height: 55,
        marginTop: 12
    },
    welcometext:{
        color: palette.white,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
    },
    userName:{
        color: palette.white,
        fontSize: 42,
        fontFamily: 'Poppins_600SemiBold'
    },
    scrollviewContainer:{
        width: "100%",
        paddingHorizontal: 20
    },
    globalContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: palette.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingBottom: 300,
    },
    topContainer: {
        height: "25%",
        paddingHorizontal: 20,
        paddingTop: Platform.OS === "ios" ? 50 : 30
    },
    cardTitle:{
        fontSize: 18,
        fontFamily: "Poppins_500Medium",
        color: palette.black,
        marginBottom: 8
    },
    cardInsideAlign:{
        flexDirection: "row",
        width: "50%"
    },
    cardInsideAlignFullWidth:{
        flexDirection: "row",
        width: "100%"
    },
    cardText:{
        fontSize: 16,
        fontFamily: "Poppins_500Medium",
        color: palette.grey,
        marginBottom: 16,
        marginLeft: 8
    }
})

export default useGlobalStyles;