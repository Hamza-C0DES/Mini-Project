import { IonButton, IonInput } from '@ionic/react';
import { useForm } from "react-hook-form";
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react';

const NewGame = ()=>{
  const [roomCode, setRoom] = useState('');

  const { register, handleSubmit, formState:{errors} } = useForm({
    defaultValues:{
      celeb: ""
    }
  });

  const mutation = useMutation({
  mutationFn: async (data: any)=>{
      const newRoom = makeid(6)
      setRoom(newRoom);

      const res = await fetch("http://localhost:3000/game",{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        'roomcode': newRoom,  
        'celebrity': data.celeb
      })
      });
      return res.json();
    },
  })
  const makeid = (length:number) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  const onSubmit = async (data: any) =>{
    setRoom(roomCode)
    const res = await mutation.mutateAsync(data);
    console.log(res);
    return res;
  }

  return<>
  <form onSubmit={handleSubmit(onSubmit)}>
  <IonInput
  label='Enter Celebrity:'
  {...register("celeb", {required: "Enter a celebrity to start the game"})}
  fill='outline'
  />
  <p>{errors.celeb?.message}</p>

  <p id='roomCode' > Room Code: {roomCode}</p>

  <IonButton type='submit'>Create!</IonButton>
  </form>
  </>;
}

export default NewGame;