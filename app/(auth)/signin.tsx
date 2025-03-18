import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import useGlobalStyles from "@/theme/globalStyle";
import Buttons from "@/components/Buttons";
import { Link, router } from "expo-router";
import InputBox from "@/components/InputBox";

const WelcomeImage = require('@/assets/images/welcome-img.png');

export default function SignIn() {
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
        <Text style={[defaultStyles.headerText,{textAlign: "center"}]}>Sign In</Text>
        <Text style={[defaultStyles.subtext,{textAlign: "center"}]}>Log into your account</Text>
      </View>
      <View style={{width: "100%"}}>
        <View>
            <InputBox placeholderText="Email / Mobile Number"/>
            <InputBox placeholderText="Password" passwordBox={true}/>
        </View>
        <Buttons onSelect={() => {router.push("/(tabs)/dashboard")}} buttonTheme="primary" label="Sign In"/>
        <Link href={"/(auth)/forgotPassword"} style={[defaultStyles.darkText,{textAlign: "right"}]}>Forgot Password ?</Link>
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
