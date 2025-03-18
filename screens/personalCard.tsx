import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import useGlobalStyles, { palette } from "@/theme/globalStyle";
import { DocumentListing } from "@/components/DocumentsListing";

export const PersonalCards = () => {
    const defaultStyles = useGlobalStyles();
    return (
        <View>
            <View style={styles.card}>
                <Text style={[defaultStyles.cardTitle]}>Information</Text>
                <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                    <View style={[defaultStyles.cardInsideAlignFullWidth]}>
                        <Feather name="user-check" size={20} color="#868686" />
                        <Text style={[defaultStyles.cardText]}>Sanket Dalvi</Text>
                    </View>
                    <View style={[defaultStyles.cardInsideAlignFullWidth]}>
                        <Fontisto name="email" size={20} color="#868686" />
                        <Text style={[defaultStyles.cardText]}>dolui.rahul@gmail.com</Text>
                    </View>
                    <View style={[defaultStyles.cardInsideAlign]}>
                        <Feather name="phone" size={20} color="#868686" />
                        <Text style={[defaultStyles.cardText]}>Not added yet</Text>
                    </View>
                    <View style={[defaultStyles.cardInsideAlign]}>
                        <AntDesign name="calendar" size={20} color="#868686" />
                        <Text style={[defaultStyles.cardText]}>Not added yet</Text>
                    </View>
                    <View style={[defaultStyles.cardInsideAlign]}>
                        <MaterialIcons name="network-cell" size={20} color="#868686" />
                        <Text style={[defaultStyles.cardText]}>Not added yet</Text>
                    </View>
                    <View style={[defaultStyles.cardInsideAlign]}>
                        <FontAwesome6 name="weight-scale" size={20} color="#868686" />
                        <Text style={[defaultStyles.cardText]}>Not added yet</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={[defaultStyles.cardTitle]}>Documents</Text>
                <DocumentListing icon="file-pdf" documentName="aadhaar.pdf" documentUploadDateTime="Uploaded on 10 Feb"/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: palette.lightGrey,
        padding: 20,
        width: "100%",
        marginBottom: 16,
        borderRadius: 10
    }
})