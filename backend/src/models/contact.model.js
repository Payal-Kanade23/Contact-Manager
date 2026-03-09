import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        minLength:10,
        maxLength:10,
    },
    },
    {
        timestamps:true,
    }
);

export const Contact = mongoose.model("Contact",contactSchema);