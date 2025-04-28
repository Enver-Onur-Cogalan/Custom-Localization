import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../redux/languageSlice';
import i18n from '../localization/i18n';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const languages = [
    { code: 'tr', name: 'Türkçe', flag: require('../assets/images/turkeyFlag.png') },
    { code: 'en', name: 'English', flag: require('../assets/images/englishFlag.png') },
    { code: 'fr', name: 'Français', flag: require('../assets/images/frFlag.png') },
    { code: 'es', name: 'Español', flag: require('../assets/images/esFlag.png') },
    { code: 'de', name: 'Deutsch', flag: require('../assets/images/deFlag.png') },
    { code: 'jp', name: '日本語', flag: require('../assets/images/japaneseFlag.png') },
]

const LanguageScreen = () => {
    const dispatch = useDispatch();

    const handleLanguageSelect = (code) => {
        dispatch(setLanguage(code));
        i18n.changeLanguage(code);
    };

    const renderItem = ({ item, index }) => (
        <Animatable.View
            animation='bounceInDown'
            delay={index * 100}
            useNativeDriver
            style={styles.cardContainer}
        >
            <TouchableOpacity onPress={() => handleLanguageSelect(item.code)} style={styles.card}>
                <Image source={item.flag} style={styles.flag} resizeMode='contain' />
                <Text style={styles.languageName}>{item.name}</Text>
            </TouchableOpacity>
        </Animatable.View>
    );


    return (
        <View style={styles.container}>
            <View style={styles.lottieContainer}>
                <LottieView
                    source={require('../assets/animations/animation.json')}
                    autoPlay
                    loop
                    style={styles.lottie}
                />
            </View>

            <FlatList
                data={languages}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                numColumns={2}
                contentContainerStyle={styles.grid}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    lottieContainer: {
        alignItems: 'center',
        marginTop: 90,
        marginBottom: 50,
    },
    lottie: {
        width: 150,
        height: 150,
    },
    grid: {
        alignItems: 'center',
    },
    cardContainer: {
        width: width / 2.5,
        margin: 10,
        alignItems: 'center',
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    flag: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    languageName: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
});


export default LanguageScreen;