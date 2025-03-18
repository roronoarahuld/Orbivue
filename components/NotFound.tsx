import { View, Text, StyleSheet } from "react-native";
import useGlobalStyles,{palette} from "@/theme/globalStyle";
import { Image } from "expo-image";

type Props = {
    header :string;
    subContent :string;
}
const emptyImage = require("../assets/images/empty-img.png")
export default function NotFound({header, subContent}: Props) {
    const defaultStyles = useGlobalStyles()
    return (
        <View style={{ alignItems: "center", height: 500 }}>
            <Image
                style={styles.image}
                source={emptyImage}
                contentFit="contain"
                transition={1000}
            />
            <Text style={[styles.headerText , defaultStyles.poppinsMediumFont]}>{header}</Text>
            <Text style={[styles.paratext, defaultStyles.poppinsLightFont]}>{subContent}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerText:{
        fontSize: 16,
        marginTop: 24
    },
    paratext:{
        fontSize: 12,
        marginTop: 4,
        textAlign: "center",
        paddingHorizontal: 30,
        color: palette.grey
    },
    image: {
        width: 250,
        height: 250,
        marginTop: 50,
    },
    
})