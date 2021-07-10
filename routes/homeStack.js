import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Rater"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#eee',
                },
                headerTintColor: '#444'
            }}
        >
            <Stack.Screen
                name="Rater"
                component={Home}
                options={({ navigation }) => ({
                    title: 'Rater',
                    headerTitleContainerStyle: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },
                    headerTitle: () => <Header title='Rater' navigation={navigation} />
                })}
            />
            <Stack.Screen name="Review Details" component={ReviewDetails} />
        </Stack.Navigator>
    );
}