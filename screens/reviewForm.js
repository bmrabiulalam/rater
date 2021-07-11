import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global.js';

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    addReview(values);
                    // actions.resetForm();
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />

                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={handleChange('body')}
                            onBlur={handleBlur('body')}
                            value={values.body}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1 -5)'
                            onChangeText={handleChange('rating')}
                            onBlur={handleBlur('rating')}
                            value={values.rating}
                            keyboardType='numeric'
                        />

                        <Button onPress={handleSubmit} color='#247f66' title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    )
}