import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from "./src/config/db.js";
import dotenv from 'dotenv';
import userRoute from './src/routes/userRoute.js';

dotenv.config();

const PORT = process.env.PORT || 3001;

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/user', userRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});