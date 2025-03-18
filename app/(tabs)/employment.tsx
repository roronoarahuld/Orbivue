import React from "react";
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Platform } from "react-native";
import useGlobalStyles, { palette } from "@/theme/globalStyle";
import InputBox from "@/components/InputBox";
import Feather from '@expo/vector-icons/Feather';
import Buttons from "@/components/Buttons";
import RNPickerSelect from 'react-native-picker-select';
import AntDesign from '@expo/vector-icons/AntDesign';

const Employment = () => {
    const defaultStyles = useGlobalStyles()
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: palette.white }}>
            <View style={{ height: "90%" }}>
                <ScrollView contentContainerStyle={[defaultStyles.scrollviewContainer, { paddingBottom: 100, }]}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "flex-end", paddingTop: 16 }}>
                        <AntDesign name="plus" size={16} color="black" />
                        <Text style={[{ paddingLeft: 8, fontSize: 14 }, defaultStyles.poppinsLightFont]}>Add More</Text>
                    </TouchableOpacity>
                    <View>
                        <InputBox label="Company Name" placeholderText="Enter the comapny name" passwordBox={false} primary={true} />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 16 }}>
                        <View style={{ width: "50%" }}>
                            <Text>Duration From -</Text>
                            <View style={[defaultStyles.selectInput]}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{ label: "Select year", color: "#868686" }}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: 'Baseball', value: 'baseball' },
                                        { label: 'Hockey', value: 'hockey' },
                                    ]}
                                />
                            </View>
                        </View>
                        <View style={{ width: "50%" }}>
                            <Text>Duration Till -</Text>
                            <View style={[defaultStyles.selectInput]}>
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{ label: "Select year", color: "#868686" }}
                                    items={[
                                        { label: 'Football', value: 'football' },
                                        { label: 'Baseball', value: 'baseball' },
                                        { label: 'Hockey', value: 'hockey' },
                                    ]}
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <InputBox label="Designation" placeholderText="Enter your designation" passwordBox={false} primary={true} />
                    </View>
                    <View>
                        <InputBox label="Role Description" placeholderText="Define your role" passwordBox={false} primary={true} />
                    </View>
                    <View>
                        <InputBox label="Projects Undertaken" placeholderText="List of projects you've done" passwordBox={false} primary={true} />
                    </View>
                    <View>
                        <InputBox label="Project URL's" placeholderText="Add URL of the project" passwordBox={false} primary={true} />
                    </View>
                    <Buttons label="Submit" />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default Employment