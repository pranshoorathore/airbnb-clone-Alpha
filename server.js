import express from 'express';
import connectDB from './config/connectDB.js';
import hotelRouter from './routers/hotel.router.js'
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

connectDB();

app.use('/hotel', hotelRouter);

app.listen(port, ()=>{
    console.log(`Server Started at port ${port}`);
});