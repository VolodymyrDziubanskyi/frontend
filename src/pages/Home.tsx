import React from 'react';
import {
  IonPage,
  IonContent,
  IonCol, IonGrid, IonRow,
  IonTitle, IonButtons, IonButton, IonCardTitle
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

import './Home.css';

const Home = () => {

  const { t } = useTranslation();

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        <IonGrid>
          <IonRow className='home-block'>
            <IonCol size="6" className="ion-text-center" offset='3'>
              <IonCardTitle>{t('home.game.name')}</IonCardTitle>
            </IonCol>
          </IonRow>
          <IonRow className='home-block'>
            <IonCol size="9" className="ion-text-center" offset='1'>
              <IonCardTitle >{t('home.game.description')}</IonCardTitle>
            </IonCol>
          </IonRow>
          <IonRow className='home-block'>
            <IonCol size="9" className="ion-text-center" offset='3'>
              <IonCardTitle >{t('home.gift.description')}</IonCardTitle>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonRow className='home-block'>
          <IonCol sizeSm="6" sizeMd='4' offsetSm='3' offsetMd='4'>
            <IonButton routerLink="/quiz" color="light" expand="block" >{t('home.play.btn.name')}</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  )
}

export default Home
