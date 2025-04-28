import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LanguageScreen from '../screens/LanguageScreen';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();


const MainNavigation = () => {
    const selectedLanguage = useSelector((state) => state.language.language);

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Languages' component={LanguageScreen} />
        </Tab.Navigator>
    );
};

export default MainNavigation;