import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>TODO</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#075E54',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        color: '#DCF8C6',
        fontSize: 25,
        fontWeight: 'bold'
    }
});
