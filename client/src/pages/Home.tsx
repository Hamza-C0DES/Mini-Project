import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonInput,
  IonButton } from '@ionic/react';

import { useForm } from "react-hook-form";
//import GameForm from './components/GameForm';

const Home: React.FC = () => {
  const { register, handleSubmit, reset} = useForm();
  const onSubmit = (data: any) =>{
    console.log(data)

  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Celebrity Name Chain</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonInput 
          label="Room Code" 
          {...register("roomCode", {required: true})}
          type='number'
          fill='outline'
          />
          <IonInput 
          label="User"
          {...register("userName", {required: true})}
          fill='outline'
          />
          <IonInput 
          label="Celebrity Name" 
          {...register("celebName", {required: true})}
          fill='outline'
          />
          <IonButton type="submit">Submit!</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Home;
