import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import useGlobalStyles, { palette } from "@/theme/globalStyle";
import InputBox from "@/components/InputBox";
import Buttons from "@/components/Buttons";
import AddMore from "@/components/AddMore";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    AddButton: number
}

const HobbiesList = ({ AddButton }: Props) => {
    const defaultStyles = useGlobalStyles();
    const deleteHandler = (buttonId) => {
        console.log("remove",buttonId)
    }
    if (AddButton >= 1) {
        return (
            <>
                <View>
                    <TouchableOpacity onPress={()=> {deleteHandler(AddButton)}} style={{ position: "absolute", top: 16, right: 0, zIndex: 9999, flexDirection: "row", justifyContent: "flex-end" }}>
                        <AntDesign name="delete" size={20} color="#D60000" />
                        <Text style={[defaultStyles.poppinsRegularFont, { color: palette.red, paddingLeft: 4 }]}>Delete</Text>
                    </TouchableOpacity>
                    <InputBox label="What is your hobby ?" placeholderText="Eg - Cricket" passwordBox={false} primary={true} />
                </View>
                <View>
                    <InputBox label="Playing since ?" placeholderText="Eg - Childhood / 2010" passwordBox={false} primary={true} />
                </View>
            </>
        )
    } else {
        return (
            <>
                <View>
                    <InputBox label="What is your hobby ?" placeholderText="Eg - Cricket" passwordBox={false} primary={true} />
                </View>
                <View>
                    <InputBox label="Playing since ?" placeholderText="Eg - Childhood / 2010" passwordBox={false} primary={true} />
                </View>
            </>
        )
    }
}

const Hobbies = () => {
    const defaultStyles = useGlobalStyles();
    const [hobbies, setHobbies] = useState([<HobbiesList key={0} />])
    const duplicateElement = () => {
        setHobbies([...hobbies, <HobbiesList AddButton={hobbies.length} key={hobbies.length} />])
        if (hobbies.length === 1) {
            console.log("more than 1")
        }
    }
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: palette.white }}>
            <ScrollView contentContainerStyle={defaultStyles.scrollviewContainer}>
                <AddMore onClick={duplicateElement} label="Add More" />
                {hobbies}
                <Buttons label="Submit" />
            </ScrollView>
        </SafeAreaView>
    )
}
export default Hobbies