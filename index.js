import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './backend/configs/database.js';

const app = express();
dotenv.config();
connectDB();;

const PORT = process.env.PORT;

app.get('/',(req,res) => {
    res.send('Hello Palku!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});