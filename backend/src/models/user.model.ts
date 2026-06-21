import mongoose, { Document } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    followers:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
        }
    ],
    about:{
        type : String,
        trim : true
    },
    location:{
        type : String,
        trim : true
    },
    college:{
        type : String,
        trim : true
    },
    branch:{
        type : String,
        trim : true
    },
    year:{
        type : String,
        trim : true
    },
    
    following:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
        }
    ],
    bio: {
        type: String,
        trim: true
    },
    profilePicture: {
        type: String,
        trim: true
    },
    coverPicture: {
        type: String,
        trim: true
    },
    questions:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Question",
        }
    ],
    answers:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Answer",
        }
    ],
    posts:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
    },
}, {
    timestamps: true
});

const User = mongoose.model<Document>("User", userSchema);

