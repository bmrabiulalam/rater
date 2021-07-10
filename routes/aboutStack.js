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
                    height: 60
                },
                headerTintColor: '#444',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen
                name="About"
                component={About}
                options={({ navigation }) => ({
                    title: 'About Rater',
                    headerTitle: () => <Header title='About Rater' navigation={navigation} />
                })}
            />
        </Stack.Navigator>
    );
}