import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar
} from '@ionic/react';

const Create: React.FC = ()=>{
    return(
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Make a New Game!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
      </IonContent>
    </IonPage>
    );
};

export default Create;