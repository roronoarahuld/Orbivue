import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import useGlobalStyles, { palette } from "@/theme/globalStyle";
import Feather from '@expo/vector-icons/Feather';

const Data = [
    {
        id: 1,
        title: "Facebook",
        icon: "facebook",
        link: "http://www.facebook.com"
    },
    {
        id: 2,
        title: "Instagram",
        icon: "instagram",
        link: "http://www.instagram.com"
    },
    {
        id: 3,
        title: "LinkedIn",
        icon: "linkedin",
        link: "http://www.linkedin.com"
    }
]
export const Social = () => {
    const defaultStyles = useGlobalStyles()
    return (
        <>
            {
                Data.map(function (socialData) {
                    return (
                        <View style={styles.card} key={socialData.id}>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between' }} >
                                <View style={{ width: "70%", flexDirection: "row", alignItems: "center" }}>
                                    <Feather name={socialData.icon} size={24} color="#262626" />
                                    <View style={{ paddingLeft: 8, alignItems: "center" }}>
                                        <Text style={[defaultStyles.poppinsMediumFont, styles.documentTitle]}>{socialData.title}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
                                        <Feather name="copy" size={20} color="#868686" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ paddingHorizontal: 8, paddingVertical: 4 }}>
                                        <AntDesign name="delete" size={20} color="#D60000" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: palette.lightGrey,
        padding: 20,
        width: "100%",
        marginBottom: 16,
        borderRadius: 10
    },
    documentTitle: {
        color: palette.black,
        fontSize: 16
    },
    documentFormat: {
        color: palette.grey,
        fontSize: 12
    }
});