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
          <IonTitle>Celebrity Name Chain</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>test</h1>
      </IonContent>
    </IonPage>
    );
    
};

export default Create;