import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLanguage } from '../redux/languageSlice';
import i18n from '../localization/i18n'; 

const AppInitializer = () => {
    const dispatch = useDispatch();

    const loadLanguage = useCallback(async () => {
        try {
            const storedLanguage = await AsyncStorage.getItem('language');
            if (storedLanguage) {
                dispatch(setLanguage(storedLanguage));
                i18n.changeLanguage(storedLanguage);
            }
        } catch (error) {
            console.error('Error loading language from AsyncStorage:', error);
        }
    }, [dispatch]);

    useEffect(() => {
        loadLanguage();
    }, [loadLanguage]);

    return null;
};

export default AppInitializer;


