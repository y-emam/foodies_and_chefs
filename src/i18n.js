import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
    en: {
        translation: {
            welcome: "Welcome to",
            description: "description in English",
        },
    },
    ar: {
        translation: {
            welcome: "مرحبًا",
            description: "هذا وصف باللغة العربية.",
        },
    },
};

i18n
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next) // Pass i18n instance to react-i18next
    .init({
        resources,
        fallbackLng: 'en', // Default language
        interpolation: {
            escapeValue: false, // React already escapes strings
        },
    });

export default i18n;
