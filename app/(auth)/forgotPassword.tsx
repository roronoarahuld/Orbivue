import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import { Image } from 'expo-image';
import useGlobalStyles from "@/theme/globalStyle";
import Buttons from "@/components/Buttons";
import { Link, router } from "expo-router";
import InputBox from "@/components/InputBox";

const WelcomeImage = require('@/assets/images/welcome-img.png');

export default function ResetPassword() {
  const defaultStyles = useGlobalStyles()
  return (
    <View
      style={[defaultStyles.container,{
        justifyContent: "center",
        alignItems: "center",
      }]}
    >
      <Image
      style={styles.image}
      source={WelcomeImage}
      contentFit="contain"
      transition={1000}
      />
      <View>
        <Text style={[defaultStyles.headerText,{textAlign: "center"}]}>Reset Password</Text>
        <Text style={[defaultStyles.subtext,{textAlign: "center"}]}>Reset your password</Text>
      </View>
      <View style={{width: "100%"}}>
        <View>
            <InputBox placeholderText="Enter new password" passwordBox={true}/>
            <InputBox placeholderText="Re-enter new password" passwordBox={true}/>
        </View>
        <Buttons onSelect={() => {router.push("/(auth)/signin")}} buttonTheme="primary" label="Reset Password"/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image:{
    flex: 1/2,
    width: "70%",
  }
})
