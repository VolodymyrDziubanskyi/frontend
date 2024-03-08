import {
    IonIcon,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonButton
} from '@ionic/react';
import LanguageSwitcher from '../LanguageSwitcher';
import { personCircle } from 'ionicons/icons';

import { useTranslation } from 'react-i18next';

const Header = () => {

    const { t, i18n } = useTranslation();

    return <IonHeader>
        <IonToolbar>
            <IonTitle>{t('label')}</IonTitle>
            <IonButtons slot='secondary'>
                <IonButton>
                    <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
                </IonButton>
                <LanguageSwitcher
                    currentLanguage={i18n.resolvedLanguage}
                    onChangeLanguage={i18n.changeLanguage}
                />
            </IonButtons>
        </IonToolbar>
    </IonHeader>
}

export default Header