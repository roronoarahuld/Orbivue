import React from "react";
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import InputBox from "@/components/InputBox";
import Buttons from "@/components/Buttons";
import useGlobalStyles, { palette } from "@/theme/globalStyle";
import Feather from '@expo/vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';
import AntDesign from '@expo/vector-icons/AntDesign';

const Education = () => {
    const defaultStyles = useGlobalStyles();
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: palette.white }}>
            <View style={{ height: "90%" }}>
                <ScrollView contentContainerStyle={[defaultStyles.scrollviewContainer, { paddingBottom: 100, }]}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
                        <Text style={[styles.title, defaultStyles.poppinsMediumFont]}>School / College Details</Text>
                        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "flex-end", paddingTop: 16 }}>
                            <AntDesign name="plus" size={16} color="black" />
                            <Text style={[{ paddingLeft: 8, fontSize: 14 }, defaultStyles.poppinsLightFont]}>Add More</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <InputBox label="Name of the School/College" placeholderText="Enter your Name" passwordBox={false} primary={true} />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text>Select passout year -</Text>
                        <View style={[defaultStyles.selectInput]}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                placeholder={{ label: "Passout year", color: "#868686" }}
                                items={[
                                    { label: 'Football', value: 'football' },
                                    { label: 'Baseball', value: 'baseball' },
                                    { label: 'Hockey', value: 'hockey' },
                                ]}
                            />
                        </View>
                    </View>
                    <View>
                        <InputBox label="Location" placeholderText="Enter the location" passwordBox={false} primary={true} />
                    </View>
                    <View>
                        <Text style={[defaultStyles.poppinsRegularFont, { marginTop: 16 }]}>Marksheet ? (Optional)</Text>
                        <TouchableOpacity style={{ borderColor: palette.lightGrey2, borderStyle: "dashed", borderWidth: 2, borderRadius: 8, padding: 16, flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                            <Feather name="upload-cloud" size={20} color="#868686" />
                            <Text style={[{ marginLeft: 8 }]}>Upload PDF / JPG / PNG upto 5MB</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Certification */}
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
                            <Text style={[styles.title, defaultStyles.poppinsMediumFont]}>Certification Details</Text>
                            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "flex-end", paddingTop: 16 }}>
                                <AntDesign name="plus" size={16} color="black" />
                                <Text style={[{ paddingLeft: 8, fontSize: 14 }, defaultStyles.poppinsLightFont]}>Add More</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <InputBox label="Course" placeholderText="Enter your course name" passwordBox={false} primary={true} />
                        </View>
                        <View>
                            <InputBox label="Course done from" placeholderText="Done from where" passwordBox={false} primary={true} />
                        </View>
                        <View style={{ marginTop: 16 }}>
                            <Text>Duration</Text>
                            <View style={[defaultStyles.selectInput]}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{ label: "Course duration", color: "#868686" }}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: 'Baseball', value: 'baseball' },
                                        { label: 'Hockey', value: 'hockey' },
                                    ]}
                                />
                            </View>
                        </View>
                        <View>
                            <InputBox label="Course Description" placeholderText="Mention about the course" passwordBox={false} primary={true} />
                        </View>
                        <View>
                            <Text style={[defaultStyles.poppinsRegularFont, { marginTop: 16 }]}>Certificate ? (Optional)</Text>
                            <TouchableOpacity style={{ borderColor: palette.lightGrey2, borderStyle: "dashed", borderWidth: 2, borderRadius: 8, padding: 16, flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                                <Feather name="upload-cloud" size={20} color="#868686" />
                                <Text style={[{ marginLeft: 8 }]}>Upload PDF / JPG / PNG upto 5MB</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Buttons label="Submit" />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default Education

const styles = StyleSheet.create({
    title: {
        width: "50%",
        fontSize: 16,
        color: palette.black
    }
})