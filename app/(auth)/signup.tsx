import { Text, View, StyleSheet, ScrollView, SafeAreaView, Platform } from "react-native";
import { Image } from 'expo-image';
import useGlobalStyles, { palette } from "@/theme/globalStyle";
import Buttons from "@/components/Buttons";
import { Link, router } from "expo-router";
import InputBox from "@/components/InputBox";

const WelcomeImage = require('@/assets/images/welcome-img.png');

export default function SignUp() {
    const defaultStyles = useGlobalStyles()
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: palette.white }}>
            <ScrollView contentContainerStyle={styles.globalContainer}>
                <View style={{alignItems: "center"}}>
                    <Image
                        style={styles.image}
                        source={WelcomeImage}
                        contentFit="contain"
                        transition={1000}
                    />
                </View>
                <View>
                    <Text style={[defaultStyles.headerText, { textAlign: "center" }]}>Sign Up</Text>
                    <Text style={[defaultStyles.subtext, { textAlign: "center" }]}>Create your account</Text>
                </View>
                <View style={{ width: "100%" }}>
                    <View>
                        <InputBox placeholderText="First Name" />
                        <InputBox placeholderText="Last Name" />
                        <InputBox placeholderText="Email Address" />
                        <InputBox placeholderText="Mobile Number" />
                        <InputBox placeholderText="Create your password" passwordBox={true}/>
                        <InputBox placeholderText="Re-enter your password" passwordBox={true}/>
                    </View>
                    <Buttons onSelect={() => { router.push("/(tabs)/dashboard") }} buttonTheme="primary" label="Sign Up" />
                    <Link href={"/(auth)/signin"} style={[defaultStyles.darkText, { textAlign: "right" }]}>Already have an account ?</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    globalContainer: {
        width: "100%",
        paddingTop: Platform.OS === "ios" ? 40 : 0,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: palette.white,
    },
    image: {
        width: 300,
        height: 300
    }
})
