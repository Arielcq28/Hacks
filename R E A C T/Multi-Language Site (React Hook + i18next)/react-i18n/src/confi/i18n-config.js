import i18n from 'i18next'; //npm i i18next
import LanguageDetector from "i18next-browser-languagedetector"; //npm i i18next-browser-languagedetector
import BackendLanguage from "i18next-http-backend"; //npm i i18next-http-backend
import { initReactI18next } from 'react-i18next'; //npm i react-i18next

i18n
    .use(BackendLanguage)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    // lng: 'es', //Language that we want to implement //Not needed 'cause languagedetector plugin detect the language of the browser
    fallbackLng: 'es' //Language by default
})