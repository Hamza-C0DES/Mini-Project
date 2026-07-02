import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar
} from '@ionic/react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import GameForm from '../components/GameForm';

const queryClient = new QueryClient()

const Home: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Celebrity Name Chain</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <GameForm/>
      </IonContent>
    </IonPage>
    </QueryClientProvider>
  );
};

export default Home;
