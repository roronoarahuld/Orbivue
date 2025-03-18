import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import useGlobalStyles, { palette } from "@/theme/globalStyle";
import Buttons from "@/components/Buttons";

const Data = [
    {
        id: 1,
        title: "Cricket",
        comments: "Playing since childhood"
    },
    {
        id: 2,
        title: "Football",
        comments: "Started playing"
    },
    {
        id: 3,
        title: "Volleyball",
        comments: "Started Playing"
    }
]
export const Hobbies = () => {
    const defaultStyles = useGlobalStyles()
    return (
        <>
            {
                Data.map(function (hobbiesData) {
                    return (
                        <View style={styles.card} key={hobbiesData.id}>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between' }} >
                                <View style={{ width: "70%", flexDirection: "row", alignItems: "center" }}>
                                    <MaterialCommunityIcons name="card-multiple" size={28} color="#868686" />
                                    <View style={{ paddingLeft: 8 }}>
                                        <Text style={[defaultStyles.poppinsMediumFont, styles.documentTitle]}>{hobbiesData.title}</Text>
                                        <Text style={[defaultStyles.poppinsRegularFont, styles.documentFormat]}>{hobbiesData.comments}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
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