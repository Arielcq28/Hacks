import React from "react";
import logo from '../logo.svg';
import '../App.css';
import { useTranslation } from 'react-i18next';

export default function Welcome(){

    const { t, i18n } = useTranslation(['welcome']);

    function changaLanguage(){

        if(i18n.language === 'es'){
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('es');
        }

        
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p dangerouslySetInnerHTML={{__html: t('title', { name: 'Ariel' })}} />
                {/* Interpolar variables */}       
                {/* dangerouslySetInnerHTML to implement tag into string */}
                <p> {t('actual')}: {i18n.language} </p>
                <button onClick={() => changaLanguage()}> {t('changeLanguageBtn')} </button>
            </header>
        </div>    
    );


}