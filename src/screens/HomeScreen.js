import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../localization/i18n';

const HomeScreen = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text>{t('welcome')}</Text>
            <Text>{t('input_placeholder')}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
