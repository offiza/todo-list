import express from 'express';
import mongoose from 'mongoose';

const PORT = 5000;
const DB_URL = `mongodb+srv://offiza:root@cluster0.yswtl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json('Server working!')
})

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    app.listen(PORT, () => console.log('Server running on PORT ' + PORT));
  } catch (e) {
    console.log(e)
  }
}

startApp();