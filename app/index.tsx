import { Text, View, StyleSheet, Pressable } from "react-native";
import { Image } from 'expo-image';
import useGlobalStyles from "@/theme/globalStyle";
import { Link, router } from "expo-router";
import Buttons  from "@/components/Buttons";

const WelcomeImage = require('@/assets/images/welcome-img.png');

export default function Index() {
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
        <Text style={[defaultStyles.headerText,{textAlign: "center"}]}>Welcome</Text>
        <Text style={[defaultStyles.subtext,{textAlign: "center"}]}>Your world, organised</Text>
      </View>
      <View style={{width: "100%"}}>
        <Buttons onSelect={() => {router.push("/(auth)/signin")}} buttonTheme="primary" label="Sign In" name="arrow-right-long" size={30} color="#fff"/>
        <Link href={"/(auth)/signup"} style={[defaultStyles.darkText]}>Don't have an account? Sign up</Link>
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
