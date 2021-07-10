import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global.js';

export default function ReviewDetail({ route, navigation }) {
    const { title, body, rating } = route.params;

    const pressHandler = () => {
        // navigation.navigate('Home');
        navigation.goBack('Review Details');
    }

    return (
        <View style={globalStyles.container}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
            <Button title='back to home' onPress={pressHandler} />
        </View>
    );
}