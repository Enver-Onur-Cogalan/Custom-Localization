# Localization App

**Localization App** is a mobile application demonstrating dynamic language switching and persistence using React Native, Redux, i18next, and AsyncStorage.

---

## 📋 Features

- Dynamic language switching between multiple languages (English, Turkish, German, Spanish, French, Japanese)
- Language selection saved locally with AsyncStorage
- Selected language is preserved even after app restart
- Clean and minimalistic UI with animated transitions
- Full offline functionality (no external translation APIs)

---

## 🛠️ Technologies Used

- React Native
- Redux Toolkit
- react-i18next
- AsyncStorage
- React Navigation (Bottom Tabs)
- Lottie Animations
- react-native-animatable

---

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/Enver-Onur-Cogalan/Custom-Localization.git
```

2. Install dependencies:

```bash
yarn install
```

3. Run the project:

```bash
yarn ios
```
or

```bash
yarn android
```

---

## 📂 Folder Structure

```
/assets          
  /images       → Flag images for language selection
  /animations   → Lottie animations
/localization    
  en.json, tr.json, de.json, es.json, fr.json, jp.json → Language files
/redux           
  /languageSlice.js → Global language management
/screens         
  HomeScreen.js → Home page showing localized text
  LanguageScreen.js → Language selection screen
/navigation     
  MainNavigation.js → Bottom tabs setup
```

---

## 🌍 Supported Languages

- English (`en`)
- Turkish (`tr`)
- German (`de`)
- Spanish (`es`)
- French (`fr`)
- Japanese (`jp`)

Each language displays a localized success message upon selection.

---

## 🧠 Architecture Overview

| Layer | Purpose |
|:--|:--|
| Redux Toolkit | Global language state management |
| AsyncStorage | Persistence of selected language |
| i18next + react-i18next | Handling dynamic translations |
| React Navigation | Screen navigation with Bottom Tabs |
| Animations | Smooth user experience with Lottie and Animatable |

---

## ⚙️ How Language Persistence Works

1. When a user selects a language:
   - It is saved into AsyncStorage (`language` key).
   - Redux state is updated.
   - i18next dynamically changes the language.
   
2. When the app restarts:
   - AppInitializer component loads the saved language from AsyncStorage.
   - Redux state and i18n configuration are automatically updated.

---

## 🧑‍💻 Developed by

**Enver Onur Cogalan**

Dynamic localization made simple and elegant! 🎯

---
