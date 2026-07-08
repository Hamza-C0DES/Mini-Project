import "dotenv/config";
import express from "express";
import cors from "cors"
const app = express();

import { PrismaClient } from './generated/prisma/client.js'; // Having Issues Here* //
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter })

app.use(cors())
app.use(express.json());

const PORT = process.env.PORT ?? 3000;

// Health check — confirms the server is running.
app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

// TODO: implement the game routes (see the project spec):
//   POST /games          { roomCode, celebrity }          -> start a game
//   GET  /games/:roomCode                                 -> most recent celebrity name
//   POST /answers        { roomCode, username, answer }   -> submit an answer
//
// To talk to the database, run `yarn prisma:migrate` first (generates the
// client into src/generated/prisma), then wire it up with the pg adapter.
// See this API's README ("Using Prisma in code") for the exact db.ts snippet.

app.listen(PORT, () => {
  console.log("Server Live!")
  console.log(`API listening on http://localhost:${PORT}`);
});

app.get("/games", async (req, res)=>{
  // const games = await prisma.game.findMany() //
  res.json(await prisma.game.findMany());
});

app.get("/games/:roomCode", async (req, res)=>{})

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Hello World") 
})



app.post("/game", async (req, res) => {
    const {roomcode, username, celebrity} = req.body;
    console.log(roomcode, username, celebrity);

    //use prisma to insert into the db
    if(!roomcode || !celebrity){
      return res.status(400).json({error: "Missing required fields, make sure to provide a room code, username, and celebrity name."});
    }

    try{
      //query prisma in here to insert into the db
      const argument: any = {data: {
        roomcode: roomcode,
        celebrity: celebrity

      }};
      const game = await prisma.game.create(argument)
    } catch (error:any) {
      console.error(error);

      if (error.code === "P2002") {
      return res.status(409).json({ error: "Room code already exists" });
      }
      res.status(500).json({ error: "Could not create game" });
    }
    res.status(201).json({roomcode, username, celebrity});
})

app.post("/answer", async (req, res) => {
    const {roomcode, username, celebrity} = req.body;
    console.log(roomcode, username, celebrity);

    //use prisma to insert into the db
    if(!roomcode || !username || !celebrity){
      return res.status(400).json({error: "Missing required fields, make sure to provide a room code, username, and celebrity name."});
    }

    try{
      //query prisma in here to insert into the db
      const argument: any = {data: {
        roomcode: roomcode,
        username: username,
        celebrity: celebrity

      }};
      const game = await prisma.game.create(argument)
    } catch (error:any) {
      console.error(error);

      if (error.code === "P2002") {
      return res.status(409).json({ error: "Room code already exists" });
      }
      res.status(500).json({ error: "Could not create game" });
    }
    res.status(201).json({roomcode, username, celebrity});
})


app.post("/submit", async (req, res) => { // async allows us to use await for non-blocking database or network operations inside this route //
    const {roomCode, username, celebrity} = req.body; // extracting values from the request body and assigning them to new local variables //
    console.log(roomCode, username, celebrity); // essentially running a smoke test to see what information we receive //
    // res.status(201).json({roomCode, username, celebrity}); // will return a status code & roomCode, username, celebrity //
    // grabbing the latest entry //
    if (!roomCode || !username || !celebrity) // we are checking to see if the client has submitted all requirements //
      {console.log("Client Has Not Satisfied Requirement/s"); // smoke test //
      return res.status(400).json({error: "Unsatisfied Requirements"});} // returning the status and memo addressing the issue to the client/frontend //
/*
    const lastEntry = await prisma.entry.findFirst({ 
      // lastEntry - we are creating a new variable to store the latest-Entry //
      // await - we simply wait for a response from the database //
      // prisma - allows us to interact with our database via ts/js code which it then translates into sql syntax //
      where: { roomCode }, // essentially selecting where the roomCode matches //
      orderBy: { createdAt: 'desc' }, // order will be going from latest to oldest //
    }); 
    */
})
