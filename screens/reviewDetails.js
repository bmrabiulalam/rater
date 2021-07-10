import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Card from '../shared/card.js';
import { globalStyles, images } from '../styles/global.js';

export default function ReviewDetail({ route }) {
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>Rating: </Text>
                    <Image
                        style={{ width: 70, height: 15 }}
                        resizeMode='contain'
                        source={images.ratings[rating]}
                    />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})