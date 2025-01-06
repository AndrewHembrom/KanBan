import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './database/db'
import cors from 'cors'

dotenv.config();

const app = express();

app.use(express.json(), cors());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDB();
});