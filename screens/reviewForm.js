import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global.js';
import * as yup from 'yup';

let reviewSchema = yub.object().shape({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) > 0 && parseInt(val) < 6;
    })
});

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
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