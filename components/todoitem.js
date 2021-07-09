import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 16,
        marginTop: 16,
        borderColor: '#666',
        borderWidth: 1,
        color: '#555',
        borderStyle: 'dashed',
        borderRadius: 10,
        backgroundColor: '#DCF8C6'
    }
});
