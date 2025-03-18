import { Stack } from "expo-router";
import SignUp from "./signup";

export default function Authlayout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="signup"/>
            <Stack.Screen name="signin"/> 
        </Stack>
    );
}
