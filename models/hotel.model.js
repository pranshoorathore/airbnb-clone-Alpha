import Property from "./hotel.mongo.js";

const createHotel = async (data) => {
    try {
        return await Property.create(data);
    } catch (error) {
        console.log(error);
    }
}

export { createHotel }