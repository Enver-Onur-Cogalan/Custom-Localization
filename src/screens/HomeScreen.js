import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import i18n, { setI18nConfig } from '../localization/i18n';

const HomeScreen = () => {
    useEffect(() => {
        setI18nConfig();
    }, []);

    return (
        <View style={styles.container}>
            <Text>{i18n.t('welcome')}</Text>
            <Text>{i18n.t('input_placeholder')}</Text>
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
