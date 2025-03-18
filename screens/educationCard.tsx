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
        university_name: "Model English School",
        passout_year: "2010",
        location: "Dombivali",
        completion_doc: "course_certification.pdf",
        doc_type: "pdf"
    },
    {
        id: 2,
        university_name: "Model English College",
        passout_year: "2013",
        location: "Dombivali",
        completion_doc: "high_school_course_certification.pdf",
        doc_type: "pdf"
    },
    {
        id: 3,
        university_name: "Pendarkar College",
        passout_year: "2016",
        location: "Dombivali",
        completion_doc: "course_certification.pdf",
        doc_type: "pdf"
    }
]
export const Education = () => {
    const defaultStyles = useGlobalStyles()
    return (
        <>
            {
                Data.map(function (eduData) {
                    return (
                        <View style={styles.card} key={eduData.id}>
                            <Text style={[styles.companyName, defaultStyles.poppinsMediumFont]}>{eduData.university_name}</Text>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 8 }} >
                                <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                                    <MaterialCommunityIcons name="certificate-outline" size={20} color="#868686" />
                                    <View style={{ paddingLeft: 8, alignItems: "center" }}>
                                        <Text style={[defaultStyles.poppinsRegularFont, styles.documentTitle]}>Pass out year : {eduData.passout_year}</Text>
                                    </View>
                                </View>
                                <View style={{ width: "50%", flexDirection: "row", alignItems: "center" }}>
                                    <AntDesign name="clockcircleo" size={18} color="#868686" />
                                    <View style={{ paddingLeft: 8, alignItems: "center" }}>
                                        <Text style={[defaultStyles.poppinsRegularFont, styles.documentTitle]}>{eduData.location}</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.certiTitle, defaultStyles.poppinsMediumFont]}>Marksheet</Text>
                                {
                                    eduData.doc_type === "image" ? (
                                        <DocumentListing icon="file-image" documentName={eduData.completion_doc} />
                                    ) : (
                                        <DocumentListing icon="file-pdf" documentName={eduData.completion_doc}/>
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