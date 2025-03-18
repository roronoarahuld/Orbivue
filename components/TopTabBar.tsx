import React, { useState, createContext, useEffect, useContext } from 'react';
import {
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import useGlobalStyles from '@/theme/globalStyle';
import Dashboard from '@/app/(tabs)/dashboard';
import { CardContext } from '@/components/CardContext';

type ItemData = {
    id: string;
    title: string;
};

const DATA: ItemData[] = [
    {
        id: '1',
        title: 'Personal Details',
    },
    {
        id: '2',
        title: 'Hobbies',
    },
    {
        id: '3',
        title: 'Social Media',
    },
    {
        id: '4',
        title: 'Employment',
    },
    {
        id: '5',
        title: 'Certification',
    },
    {
        id: '6',
        title: 'Education',
    },
];

type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

export const cardId = createContext<string | null>(null);

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => {
    const defaultStyles = useGlobalStyles()
    return (
        <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
            <Text style={[styles.title, defaultStyles.poppinsRegularFont, { color: textColor }]}>{item.title}</Text>
        </TouchableOpacity>
    );
}

const TopTabBar = () => {
    const {selectedId, setSelectedId} = useContext(CardContext);
    const renderItem = ({ item }: { item: ItemData }) => {
        const backgroundColor = item.title === selectedId ? '#cc672e' : '#262626';
        const color = item.title === selectedId ? '#fff' : '#fff';
        return (
            <>
                <Item
                    item={item}
                    onPress={() => setSelectedId(item.title) }
                    backgroundColor={backgroundColor}
                    textColor={color}
                />
            </>

        );
    };


    return (
        <>
            <SafeAreaView style={styles.container}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                    horizontal
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 16,
        paddingLeft: 20,
    },
    item: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginHorizontal: 4,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 14,
    },
});

export default TopTabBar;