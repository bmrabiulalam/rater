import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home Stack">
                <Drawer.Screen
                    name="Home Stack"
                    component={HomeStack}
                    options={{ drawerLabel: 'Home' }}
                />
                <Drawer.Screen
                    name="About Stack"
                    component={AboutStack}
                    options={{ drawerLabel: 'About' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}