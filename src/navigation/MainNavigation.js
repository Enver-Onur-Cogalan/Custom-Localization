import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LanguageScreen from '../screens/LanguageScreen';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import AppInitializer from './AppInitializer';



const Tab = createBottomTabNavigator();


const MainNavigation = () => {
    const selectedLanguage = useSelector((state) => state.language.language);
    const { t } = useTranslation();

    return (
        <>
            <AppInitializer />
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ tabBarLabel: t('home_title') }}
                />
                <Tab.Screen
                    name='Languages'
                    component={LanguageScreen}
                    options={{ tabBarLabel: t('language_title') }}
                />
            </Tab.Navigator>
        </>
    );
};

export default MainNavigation;