import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import useGlobalStyles, { palette } from "@/theme/globalStyle";
import Feather from '@expo/vector-icons/Feather';
import Foundation from '@expo/vector-icons/Foundation';
import { DocumentListing } from "@/components/DocumentsListing";

const Data = [
    {
        id: 1,
        course_name: "Python Developer",
        done_from: "Udemy Course Online",
        duration: "3 Months",
        course_descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus viverra mattis. Nam ultrices mauris vitae vehicula fringilla. Sed in volutpat mauris, a pulvinar velit. Morbi metus purus, pellentesque dapibus diam ut, pharetra maximus lorem. Integer ullamcorper varius odio, et blandit lorem auctor et",
        certification_doc: "course_certification.pdf",
        doc_type: "pdf"
    },
    {
        id: 2,
        course_name: "Web Developer",
        done_from: "Coursera Course Online",
        duration: "12 Months",
        course_descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus viverra mattis. Nam ultrices mauris vitae vehicula fringilla. Sed in volutpat mauris, a pulvinar velit. Morbi metus purus, pellentesque dapibus diam ut, pharetra maximus lorem. Integer ullamcorper varius odio, et blandit lorem auctor et",
        certification_doc: "course_certification.jpg",
        doc_type: "image"
    },
    {
        id: 3,
        course_name: "Flutter Developer",
        done_from: "Udemy Course Online",
        duration: "3 Months",
        course_descp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus viverra mattis. Nam ultrices mauris vitae vehicula fringilla. Sed in volutpat mauris, a pulvinar velit. Morbi metus purus, pellentesque dapibus diam ut, pharetra maximus lorem. Integer ullamcorper varius odio, et blandit lorem auctor et",
        certification_doc: "course_certification.png",
        doc_type: "image"
    }
]
export const Certification = () => {
    const defaultStyles = useGlobalStyles()
    return (
        <>
            {
                Data.map(function (certiData) {
                    return (
                        <View style={styles.card} key={certiData.id}>
                            <Text style={[styles.companyName, defaultStyles.poppinsMediumFont]}>{certiData.course_name}</Text>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 8 }} >
                                <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                                    <MaterialCommunityIcons name="certificate-outline" size={20} color="#868686" />
                                    <View style={{ paddingLeft: 8, alignItems: "center" }}>
                                        <Text style={[defaultStyles.poppinsRegularFont, styles.documentTitle]}>{certiData.done_from}</Text>
                                    </View>
                                </View>
                                <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                                    <AntDesign name="clockcircleo" size={18} color="#868686" />
                                    <View style={{ paddingLeft: 8, alignItems: "center" }}>
                                        <Text style={[defaultStyles.poppinsRegularFont, styles.documentTitle]}>{certiData.duration}</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={[defaultStyles.poppinsLightFont, styles.description]}>
                                    {certiData.course_descp}
                                </Text>
                            </View>
                            <View>
                                <Text style={[styles.certiTitle, defaultStyles.poppinsMediumFont]}>Course Completion Certificate</Text>
                                {
                                    certiData.doc_type === "image" ? (
                                        <DocumentListing icon="file-image" documentName={certiData.certification_doc} />
                                    ) : (
                                        <DocumentListing icon="file-pdf" documentName={certiData.certification_doc}/>
                                    )
                                }
                                
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
    certiTitle:{
        fontSize: 16,
        color: palette.black,
        marginVertical: 8
    },
});