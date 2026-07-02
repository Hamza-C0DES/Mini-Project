import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonInput,
  IonButton 
} from '@ionic/react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { useForm } from "react-hook-form";
//import GameForm from './components/GameForm';

//object for recording user input
// let user ={
//   username: "",
//   celebAnswer: "",
//   roomCode:""
// }

const Home: React.FC = () => {
  //   const mutation = useMutation({
  //   mutationFn: (newTodo) => {
  //     return fetch("/games")
  //     //return axios.post('/todos', newTodo)
  //   },
  // })


  const { register, handleSubmit,reset, formState:{errors} } = useForm({
    defaultValues:{
      roomCode:'1',
      userName: "johndoe",
      celebName: "johndoe"
    }
  }
  );
  const onSubmit = (data: any) =>{
    console.log(data);
    reset({

    });
    return(data);
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
          {...register("roomCode", {required: "Please enter a room code."})}
          type='number'
          fill='outline'
          />
          <p>{errors.roomCode?.message}</p>

          <IonInput 
          label="User"
          {...register("userName", {required: "Enter a user name."})}
          fill='outline'
          />
          <p>{errors.userName?.message}</p>

          <IonInput 
          label="Celebrity Name" 
          {...register("celebName", {required: "Please enter celebrity"})}
          fill='outline'
          />
          <p>{errors.celebName?.message}</p>
          <IonButton type="submit">Submit!</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Home;
