import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global.js';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';

let reviewSchema = yup.object().shape({
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
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        <Text style={globalStyles.errorText}> {touched.title && errors.title} </Text>

                        <TextInput
                            multiline minHeight={150}
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={handleChange('body')}
                            onBlur={handleBlur('body')}
                            value={values.body}
                        />
                        <Text style={globalStyles.errorText}> {touched.body && errors.body} </Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1 -5)'
                            onChangeText={handleChange('rating')}
                            onBlur={handleBlur('rating')}
                            value={values.rating}
                            keyboardType='numeric'
                        />
                        <Text style={globalStyles.errorText}> {touched.rating && errors.rating} </Text>

                        <FlatButton onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    )
}