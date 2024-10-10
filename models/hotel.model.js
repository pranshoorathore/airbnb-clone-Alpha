import Hotel from "./hotel.mongo.js";

const createHotel = async (data) => {
    try {
        return await Hotel.create(data);
    } catch (error) {
        console.log(error);
    }
}

export { createHotel }