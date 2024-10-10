import { Router } from 'express';
import { getAllHotels, addHotel } from '../controllers/hotel.contoller.js';

const hotelRouter = Router();

hotelRouter.route('/').get(getAllHotels).post(addHotel);

export default hotelRouter;