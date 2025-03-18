import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import useGlobalStyles, { palette } from "@/theme/globalStyle";
import Feather from '@expo/vector-icons/Feather';
import Foundation from '@expo/vector-icons/Foundation';

const Data = [
    {
        id: 1,
        company_name: "Mccann",
        designation: "Web Developer",
        duration_from: "Mar 2017",
        duration_till: "Present",
        company_descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus viverra mattis. Nam ultrices mauris vitae vehicula fringilla. Sed in volutpat mauris, a pulvinar velit. Morbi metus purus, pellentesque dapibus diam ut, pharetra maximus lorem. Integer ullamcorper varius odio, et blandit lorem auctor et",
        projects_undertaken: "Educational Technology Department",
        projects_url: "http://www.google.com"
    },
    {
        id: 2,
        company_name: "IIT Bombay",
        designation: "Web Developer",
        duration_from: "Mar 2015",
        duration_till: "Dec 2016",
        company_descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus viverra mattis. Nam ultrices mauris vitae vehicula fringilla. Sed in volutpat mauris, a pulvinar velit. Morbi metus purus, pellentesque dapibus diam ut, pharetra maximus lorem. Integer ullamcorper varius odio, et blandit lorem auctor et",
        projects_undertaken: "Educational Technology Department",
        projects_url: "http://www.google.com"
    },
    {
        id: 3,
        company_name: "Digitallatte",
        designation: "Web Developer",
        duration_from: "Mar 2014",
        duration_till: "Feb 2015",
        company_descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus viverra mattis. Nam ultrices mauris vitae vehicula fringilla. Sed in volutpat mauris, a pulvinar velit. Morbi metus purus, pellentesque dapibus diam ut, pharetra maximus lorem. Integer ullamcorper varius odio, et blandit lorem auctor et",
        projects_undertaken: "Educational Technology Department",
        projects_url: "http://www.google.com"
    }
]
export const Employment = () => {
    const defaultStyles = useGlobalStyles()
    return (
        <>
            {
                Data.map(function (employData) {
                    return (
                        <View style={styles.card} key={employData.id}>
                            <Text style={[styles.companyName, defaultStyles.poppinsMediumFont]}>{employData.company_name}</Text>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 8 }} >
                                <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                                    <Foundation name="shopping-bag" size={20} color="#868686" />
                                    <View style={{ paddingLeft: 8, alignItems: "center" }}>
                                        <Text style={[defaultStyles.poppinsRegularFont, styles.documentTitle]}>{employData.designation}</Text>
                                    </View>
                                </View>
                                <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                                    <AntDesign name="clockcircleo" size={18} color="#868686" />
                                    <View style={{ paddingLeft: 8, alignItems: "center" }}>
                                        <Text style={[defaultStyles.poppinsRegularFont, styles.documentTitle]}>{employData.duration_from} to {employData.duration_till}</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={[defaultStyles.poppinsLightFont, styles.description]}>
                                    {employData.company_descp}
                                </Text>
                            </View>
                            <Text style={[defaultStyles.poppinsSemiFont, styles.subtitle]}>Project Undertaken - <Text style={[defaultStyles.poppinsLightFont, styles.subpara]}>{employData.projects_undertaken}</Text></Text>
                            <Text style={[defaultStyles.poppinsSemiFont, styles.subtitle]}>Project URL's - <Text style={[defaultStyles.poppinsLightFont, styles.link]}>{employData.projects_url}</Text></Text>
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
        color: palette.grey,
        fontSize: 12,
    },
    documentFormat: {
        color: palette.grey,
        fontSize: 12
    },
    companyName:{
        fontSize: 20,
        color: palette.black
    },
    description:{
        fontSize: 12,
        color: palette.grey,
        marginTop: 8
    },
    subtitle:{
        fontSize: 12,
        color: palette.black,
        marginTop: 8
    },
    subpara:{
        fontSize: 12,
        color: palette.grey,
    },
    link:{
        fontSize: 12,
        color: palette.orange,
    }
});