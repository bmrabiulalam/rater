import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                placeholderTextColor='#DCF8C6'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} color='#075E54' title="Add Todo" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        color: '#DCF8C6',
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#DCF8C6'
    }
});
