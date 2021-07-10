import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global.js';

export default function Home({ navigation }) {
    const pressHandler = () => {
        // navigation.navigate('Review Details');
        navigation.push('Review Details');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='goto review details' onPress={pressHandler} />
        </View>
    );
}

// const styles = StyleSheet.create({
// });
