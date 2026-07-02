import "dotenv/config";
import express from "express";
const app = express();

import { PrismaClient } from './generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter })

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
  //dont have a db yet, or a schema
  //const games = await prisma.game.findMany()
  res.json(await prisma.game.findMany());
});

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Hello World") 
})

app.post("/game", (req, res) => {
    const {roomCode, username, celebrity} = req.body;
    console.log(roomCode, username, celebrity);
    res.status(201).json({roomCode, username, celebrity});
})
