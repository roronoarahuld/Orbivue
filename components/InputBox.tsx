import React from "react";
import useGlobalStyles from "@/theme/globalStyle";
import { TextInput, Text } from "react-native";

type Props = {
    placeholderText: string;
    passwordBox: boolean;
    primary: boolean;
    label: string;
}
export default function InputBox({placeholderText, passwordBox, label, primary}: Props){
    const defaultStyles = useGlobalStyles();
    if(primary===true){
        return(
            <>
                <Text style={[defaultStyles.primaryLabel]}>{label}</Text>
                <TextInput style={[defaultStyles.primaryInput]} placeholder={placeholderText} secureTextEntry={passwordBox}></TextInput>
            </>
        )
    }else{
        return(
            <TextInput style={[defaultStyles.signupInput]} placeholder={placeholderText} secureTextEntry={passwordBox}></TextInput>
        )
    }
}