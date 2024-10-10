import { Schema, model } from "mongoose";

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    rent: {
        type: Number,
        required: true
    },
    images: [{
        type: String,
        required: true
    }]
});

const Hotel = new model('Hotel', hotelSchema);

export default Hotel;

