import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import i18n from '../localization/i18n';
import { HUGGINGFACE_API_KEY } from '@env';

const HomeScreen = () => {
    const { t } = useTranslation();
    const targetLanguage = useSelector((state) => state.language.language);

    const [translatedText, setTranslatedText] = useState('');



    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('welcome')}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{t('text')}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 20,
        marginTop: 40,
    },
    textContainer: {
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        padding: 20,
        marginTop: 40,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default HomeScreen;
