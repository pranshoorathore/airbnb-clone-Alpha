import { Schema, model } from "mongoose";

const propertySchema = new Schema({
    title: {
        type: String,
        required: [true , 'Property title is required']
    },
    brief: {
        type: String,
        required: [true , 'Property title is required']
    },
    guests: {
        type: Number,
        required: [true , 'Property title is required']
    },
    bedrooms: {
        type: Number,
        required: [true , 'Property title is required']
    },
    
    bathrooms: {
        type: Number,
        required: [true , 'Property title is required']
    },
    images: [{
        type: String,
        required: true
    }],
    description:{
        type: String,
        required:[true, 'property description is required']
    },
    features: [{
        title: String,
        brief: String
         
    }],
    amenities:[{
        type: String,
        required:[true, 'property description is required']
    }
    ],
    location:[{
        longitude:{
            type:String,
            required:[true,'longitude is required']
        },
        latitude:{
            type:String,
            required:[true,'latitude is required']
        },
        city:{
            type:String,
            required:[true,'city is required']
        },
        state:{
            type:String,
            required:[true,'state is required']
        },
        country:{
            type:String,
            required:[true,'country is required']
        },
        description:String
    }],
    rules:[String],
    safetyproperty:[string],
    cancellationpolicy:{
        type:string,
        required:[true,'cancellation policy is required']
    }
});





const Property = new model('Property', propertySchema);

export default Property;

