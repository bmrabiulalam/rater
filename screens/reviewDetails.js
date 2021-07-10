import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global.js';

export default function ReviewDetail({ navigation }) {
    const pressHandler = () => {
        // navigation.navigate('Home');
        navigation.goBack('Review Details');
    }

    return (
        <View style={globalStyles.container}>
            <Text>Review Details Screen</Text>
            <Button title='back to home' onPress={pressHandler} />
        </View>
    );
}