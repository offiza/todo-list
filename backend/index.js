import express from 'express';
import mongoose from 'mongoose';
import Task from './DbSchema/TaskSchema.js';
import router from './Task/TaskRouter.js';

const PORT = 5000;
const DB_URL = `mongodb+srv://offiza:root@cluster0.yswtl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express();

app.use(express.json());
app.use('/api', router)

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    app.listen(PORT, () => console.log('Server running on PORT ' + PORT));
  } catch (e) {
    console.log(e)
  }
}

startApp();