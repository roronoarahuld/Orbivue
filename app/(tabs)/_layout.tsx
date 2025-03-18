import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";
import { CardProvider } from "@/components/CardContext";

export default function TabLayout() {
    return (
        <CardProvider> 
            <Tabs tabBar={(props) => <TabBar {...props} />}>
                <Tabs.Screen name="dashboard" options={{ title: "Dashboard", headerShown: false }} />
                <Tabs.Screen name="hobbies" options={{ title: "Hobbies Details", headerShown: true }} />
                <Tabs.Screen name="personal" options={{ title: "Personal Details", headerShown: true }} />
                <Tabs.Screen name="employment" options={{ title: "Employment Details", headerShown: true }} />
                <Tabs.Screen name="education" options={{ title: "Education Details", headerShown: true }} />
            </Tabs>
        </CardProvider>
    );
}
