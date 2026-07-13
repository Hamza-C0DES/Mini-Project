import { IonButton, IonInput } from '@ionic/react';
import { useForm } from "react-hook-form";
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react';


const GameForm =()=>{
  const [userName, setName] = useState('');
  const [roomCode, setRoom] = useState('');
  
  const { register, handleSubmit,reset, formState:{errors}, watch } = useForm({
    defaultValues:{
      roomcode:roomCode,
      username: userName,
      celebName: ""
    }
  });
  
  const onSubmit = async (data: any) =>{
      setName(data.username)
      setRoom(data.roomCode)
      console.log(roomCode)
      console.log(userName)
      reset({
        roomcode: roomCode,
        username: userName,
        celebName: ""
      })
      const res = await mutation.mutateAsync(data);
      console.log(res);
      return res;
  };
  
  const mutation = useMutation({
  mutationFn: async (data: any)=>{

      const res = await fetch("http://localhost:3000/answer",{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        'roomCode': data.roomCode,
        'username': data.username,
        'celebrity': data.celebName
      })
      });
      return res.json();
    },
  })

    return<>
    <form onSubmit={handleSubmit(onSubmit)}>
          <IonInput 
          label="Room Code:" 
          {...register("roomcode", {required: "Please enter a room code."})}
          fill='outline'
          />
          <p>{errors.roomcode?.message}</p>

          <IonInput 
          label="User:"
          {...register("username", {required: "Enter a user name."})}
          fill='outline'
          />
          <p>{errors.username?.message}</p>

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