import mongoose from "mongoose";

// where to define your model
const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},   
    image: {type:String, required:true},
    category: {type:String, required:true},
    ratings: [{ 
        userId: { type: String, required: true },
        comment: { type: String, required: true },
        rating: { type: Number, required: true }
    }]
})

// create model/ use exist model
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModel;
