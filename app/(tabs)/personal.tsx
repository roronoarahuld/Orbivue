import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import useGlobalStyles, { palette } from "@/theme/globalStyle";
import InputBox from "@/components/InputBox";
import Feather from '@expo/vector-icons/Feather';
import Buttons from "@/components/Buttons";
import RNPickerSelect from 'react-native-picker-select';

const Personal = () => {
    const defaultStyles = useGlobalStyles();
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: palette.white }}>
            <View style={{ height: "90%" }}>
                <ScrollView contentContainerStyle={[defaultStyles.scrollviewContainer, { paddingBottom: 100, }]}>
                    <View>
                        <InputBox label="Full Name" placeholderText="Enter your Name" passwordBox={false} primary={true} />
                    </View>
                    <View>
                        <InputBox label="Email Address" placeholderText="Enter your email id" passwordBox={false} primary={true} />
                    </View>
                    <View>
                        <InputBox label="Mobile Number" placeholderText="Enter your number" passwordBox={false} primary={true} />
                    </View>
                    <View>
                        <InputBox label="Date of birth" placeholderText="Enter DOB" passwordBox={false} primary={true} />
                    </View>
                    <View>
                        <InputBox label="Weight" placeholderText="Weight in (kg)" passwordBox={false} primary={true} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={{ width: "58%" }}>
                            <InputBox label="Social Media Link" placeholderText="Enter URL" passwordBox={false} primary={true} />
                        </View>
                        <View style={{ width: "38%", marginTop: 16  }}>
                            <Text>Social media</Text>
                            <View style={[defaultStyles.selectInput]}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{ label: "Select", color: "#868686" }}
                                    items={[
                                        { label: 'Facebook', value: 'facebook' },
                                        { label: 'Instagram', value: 'instagram' },
                                        { label: 'LinkedIn', value: 'linkedin' },
                                    ]}
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[defaultStyles.poppinsRegularFont, { marginTop: 16 }]}>Documents ? (Optional)</Text>
                        <TouchableOpacity style={{ borderColor: palette.lightGrey2, borderStyle: "dashed", borderWidth: 2, borderRadius: 8, padding: 16, flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                            <Feather name="upload-cloud" size={20} color="#868686" />
                            <Text style={[{ marginLeft: 8 }]}>Upload PDF / JPG / PNG upto 5MB</Text>
                        </TouchableOpacity>
                    </View>
                    <Buttons label="Submit" />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default Personal