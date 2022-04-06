import express from 'express';
import mongoose from 'mongoose';
import taskRouter from './Task/TaskRouter.js';
import authRouter from './Auth/AuthRouter.js';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(cors())
app.use(express.json());
app.use('/api', taskRouter);
app.use('/auth', authRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    app.listen(PORT, () => console.log('Server running on PORT ' + PORT));
  } catch (e) {
    console.log(e)
  }
}

startApp();