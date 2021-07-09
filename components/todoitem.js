import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Text style={styles.text}>{item.text}</Text>
                <MaterialIcons name='delete' size={18} color='#bf0000' />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 16,
        borderColor: '#075E54',
        borderWidth: 1,
        color: '#075E54',
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: '#DCF8C6'
    },
    text: {
        // marginLeft: 10
    }
});
