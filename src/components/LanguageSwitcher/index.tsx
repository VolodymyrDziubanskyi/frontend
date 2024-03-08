import React from 'react';

import { IonSelect, IonSelectOption } from '@ionic/react';
import './style.css';

type Language = {
    nativeName: string;
}

type Languages = {
    [key: string]: Language;
}

type LanguageSwitcherProps = {
    currentLanguage: string | undefined;
    onChangeLanguage: (lng: string) => void

}

const lngs: Languages = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' }
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, onChangeLanguage }) => {

    const handleChange = (e: any) => {
        onChangeLanguage(e.detail.value);
    };

    return (
        <IonSelect
            onIonChange={handleChange}
            value={currentLanguage}
            interface="popover">
            {
                Object.keys(lngs).map(lng => (
                    <IonSelectOption
                        key={lng}
                        disabled={lng === currentLanguage}
                        value={lng}>{lngs[lng].nativeName}</IonSelectOption>
                ))
            }
        </IonSelect>
    );
}
export default LanguageSwitcher;