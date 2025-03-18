import React, { useContext, useEffect, useState } from "react";
import { Text, SafeAreaView, ScrollView, View, StyleSheet, useWindowDimensions } from "react-native";
import useGlobalStyles, { palette } from "@/theme/globalStyle";
import NotFound from "@/components/NotFound";
import TopTabBar, { cardId } from "@/components/TopTabBar";
import { PersonalCards } from "@/screens/personalCard";
import { CardContext } from '@/components/CardContext';
import { Hobbies } from "@/screens/hobbiesCard";
import { Social } from "@/screens/socialsCard";
import { Employment } from "@/screens/employmentCard";
import { Certification } from "@/screens/certificationCard";
import { Education } from "@/screens/educationCard";

const Dashboard = () => {
    const defaultStyles = useGlobalStyles()
    const { selectedId } = useContext(CardContext);
    useEffect(() => {
    }, [selectedId])
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "#262626" }}>
            <View style={defaultStyles.topContainer}>
                <Text style={defaultStyles.welcometext}>Welcome back,</Text>
                <Text style={defaultStyles.userName}>Sanket</Text>
            </View>
            <View style={defaultStyles.globalContainer}>
                <TopTabBar />
                <ScrollView contentContainerStyle={defaultStyles.scrollviewContainer}>
                    {
                        selectedId === "Personal Details" ? (
                            <PersonalCards />
                        ) : selectedId === "Hobbies" ? (
                            <Hobbies/>
                        ) : selectedId === "Social Media" ?(
                            <Social/>
                        ) : selectedId === "Employment" ?(
                            <Employment/>
                        ) : selectedId === "Certification" ?(
                            <Certification/>
                        ) : selectedId === "Education" ?(
                            <Education/>
                        ) : (
                            <NotFound header="Nothing added yet" subContent="No files or details have been uploaded yet. Please upload and come back later to check." />
                        )
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

})
export default Dashboard