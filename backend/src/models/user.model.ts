import mongoose, { Document, Types } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;

    followers: Types.ObjectId[];
    following: Types.ObjectId[];

    about?: string;
    location?: string;
    college?: string;
    branch?: string;
    year?: string;
    bio?: string;

    profilePicture?: string;
    coverPicture?: string;

    questions: Types.ObjectId[];
    answers: Types.ObjectId[];
    posts: Types.ObjectId[];
}

const userSchema = new mongoose.Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            select: false,
        },

        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        about: String,
        location: String,
        college: String,
        branch: String,
        year: String,
        bio: String,

        profilePicture: String,
        coverPicture: String,

        questions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Question",
            },
        ],

        answers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Answer",
            },
        ],

        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;

