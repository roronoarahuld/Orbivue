import { Pressable , Text } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import useGlobalStyles from "@/theme/globalStyle";

type Props = {
    onSelect: () => void;
    buttonTheme: "primary";
    label: string;
    name: string;
    size: number;
    color: string;
}
export default function Buttons({buttonTheme, name, size, color, onSelect, label}: Props){
    const defaultStyles = useGlobalStyles()
    if(buttonTheme === "primary")
    {
        return(
            <Pressable onPress={onSelect} style={[defaultStyles.primaryButton]}>
                <Text style={[defaultStyles.buttonText]}>{label}</Text>
                <FontAwesome6 name={name} size={size} color={color} />
            </Pressable>
        )
    }
    return(
        <Pressable onPress={onSelect} style={[defaultStyles.secondaryButton]}>
            <Text style={[defaultStyles.buttonText]}>{label}</Text>
            <FontAwesome6 name={name} size={size} color={color} />
        </Pressable>
    )
}