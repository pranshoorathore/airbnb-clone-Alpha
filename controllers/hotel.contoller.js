import { createHotel } from '../models/hotel.model.js';

const getAllHotels = async (req, res) => {
    try {
        console.log('Hotels');
    } catch (error) {
        console.log(error);
    }
}

const addHotel = async (req, res) => {
    try {
        createHotel(req.body);
        res.send("Data Added Successfully!")
    } catch (error) {
        console.log(error);
    }
}

export { getAllHotels, addHotel };