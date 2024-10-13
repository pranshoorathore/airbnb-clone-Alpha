import { Schema, model } from "mongoose";

const propertySchema = new Schema({
    title:{ type: String , 
         required:[ true , 'property title is required']
    },
    brief:{ type: String , 
        required:[ true , 'property brief is required']
    },
    guests:{ type: Number , 
        required:[ true , 'Guest capacity is required']
    },
    bedrooms:{ type: Number , 
        required:[ true , 'bedroom count is required']
    },
    bathrooms:{ type: Number , 
        required:[ true , 'bathroom count is required']
    },
    images:{ type: String , 
        required:[ true , 'property images is required']
    },
    description:{ type: String , 
    required:[ true , 'property Description is required']
    },
    features:{ type: String , 
        brief:String
    },
    amenities:{ type: String , 
    required:[ true , 'property amenities is required']
    },
    location:[{
        longitude:{
            type:String,
            required:[ true , 'property longitute is required']
        },
        latitude:{
            type:String,
            required:[ true , 'property latitude is required']
        },
        city :{
            type:String,
            required:[ true , 'property city is required']
        },
        state:{
            type:String,
            required:[ true , 'property state is required']
        },
        country:{
            type:String,
            required:[ true , 'property country is required']
        },
        description:{
            type:String
        },

    }],

    rules:{
        type:String
    },
    safetyProperty:{
        type:String
    },
    cancellationPolicy:{
        type:String,
        required:[true,'policy']    
    }
});

const Property = new model('Property', propertySchema);
export default Property;

