import { IonButton, IonInput } from '@ionic/react';
import { useForm } from "react-hook-form";
import {
  useMutation,
  useQueryClient
} from '@tanstack/react-query'

const GameForm =()=>{
    const queryClient = useQueryClient();
  
  const { register, handleSubmit,reset, formState:{errors} } = useForm({
    defaultValues:{
      roomCode:'1',
      userName: "johndoe",
      celebName: "johndoe"
    }
    });

    const onSubmit = (data: any) =>{
        const res = mutation.mutate(data);
        console.log(res);
        return res;
    };

    const mutation = useMutation({
    mutationFn: async (data)=>{
        return await fetch("http://localhost:3000/game",{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }
        
        );
    },

    })
    

    // const [userName, setName] = useState('');
    // const [roomCode, setRoom] = useState('');
    return<>
    <form onSubmit={handleSubmit(onSubmit)}>
          <IonInput 
          label="Room Code:" 
          {...register("roomCode", {required: "Please enter a room code."})}
          type='number'
          fill='outline'
          />
          <p>{errors.roomCode?.message}</p>

          <IonInput 
          label="User:"
          {...register("userName", {required: "Enter a user name."})}
          fill='outline'
          />
          <p>{errors.userName?.message}</p>

          <IonInput 
          label="Celebrity Name:" 
          {...register("celebName", {required: "Please enter celebrity"})}
          fill='outline'
          />
          <p>{errors.celebName?.message}</p>
          <IonButton type="submit">Submit!</IonButton>
        </form>
    </>;
}

export default GameForm;