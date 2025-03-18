import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import useGlobalStyles, { palette } from "@/theme/globalStyle";

type DocumentProps = {
    documentName: string,
    documentUploadDateTime: string,
    icon: string
}

export const DocumentListing = ({documentName, documentUploadDateTime, icon}: DocumentProps) => {
    const defaultStyles = useGlobalStyles()
    return (
        <View style={{flexDirection: "row"}}>
            <FontAwesome6 name={icon} size={26} color="#868686" />
            <View style={{width: "70%", paddingLeft: 8}}>
                <Text style={[defaultStyles.poppinsMediumFont, styles.documentTitle]}>{documentName}</Text>
                <Text style={[defaultStyles.poppinsRegularFont, styles.documentFormat]}>{documentUploadDateTime}</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity style={{paddingHorizontal: 8, paddingVertical: 4}}>
                    <AntDesign name="eyeo" size={20} color="#262626" />
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal: 8, paddingVertical: 4}}>
                    <AntDesign name="download" size={20} color="#D60000" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    documentTitle:{
        color: palette.black,
        fontSize: 14
    },
    documentFormat:{
        color: palette.grey,
        fontSize: 10
    }
});