import React, { useState } from "react"
import { TouchableOpacity, Text } from "react-native"
import useGlobalStyles from "@/theme/globalStyle"
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    onClick: () => void
    label: string
}

export default function AddMore({ onClick, label }: Props) {
    const defaultStyles = useGlobalStyles()
    return (
        <TouchableOpacity onPress={onClick} style={{ flexDirection: "row", justifyContent: "flex-end", paddingTop: 16 }}>
            <AntDesign name="plus" size={16} color="black" />
            <Text style={[{ paddingLeft: 8, fontSize: 14 }, defaultStyles.poppinsLightFont]}>{label}</Text>
        </TouchableOpacity>
    )
}