import { useState, useEffect } from 'react';
import { signInWithPopup, createUserWithEmailAndPassword, signInAnonymously, signInWithCredential } from "firebase/auth";
import { auth, googleAuthProvider } from '../firebase';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonGrid, IonRow, IonCol } from '@ionic/react';
import Header from '../components/Header';

export const LoginForm: React.FC = () => {
    // const [user, setUser] = useState(auth.currentUser);

    // useEffect(() => {
    //     const unsub = auth.onAuthStateChanged((storeUser) => {
    //         if (storeUser != null) {
    //             return setUser(storeUser);
    //         }
    //         signInWithPopup(auth, googleAuthProvider)
    //             .then(credentials => {
    //                 setUser(credentials.user)
    //             }
    //             )
    //             .catch(e => console.error(e));
    //     });

    //     return unsub;
    // }, [auth]);

    return <IonPage>
        <IonContent fullscreen>
            <Header/>
            <IonGrid>
                <IonRow>
                    <IonCol sizeMd='4' offsetMd="4" sizeSm='12'>
                        <IonList>
                            <IonItem>
                                <IonInput label="Email" type="email" placeholder="email@domain.com"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonInput label="Password" type="password"></IonInput>
                            </IonItem>
                        </IonList>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
        ;

}