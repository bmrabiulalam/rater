import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#eee',
                },
                headerTintColor: '#444'
            }}
        >
            <Stack.Screen
                name="About"
                component={About}
                options={({ navigation }) => ({
                    title: 'About Rater',
                    headerTitleContainerStyle: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },
                    headerTitle: () => <Header title='About Rater' navigation={navigation} />
                })}
            />
        </Stack.Navigator>
    );
}