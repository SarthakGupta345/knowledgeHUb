import mongoose, { Document } from "mongoose";

interface IQuestion extends Document {
    title: string;
    content: string;
    author: mongoose.Schema.Types.ObjectId;
    comments: mongoose.Schema.Types.ObjectId[];
    upvotes: mongoose.Schema.Types.ObjectId[];
    downvotes: mongoose.Schema.Types.ObjectId[];
}


const questionSchema = new mongoose.Schema<IQuestion>({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        }
    ],
    upvotes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    downvotes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
}, {
    timestamps: true
});

const Question = mongoose.model<Document>("Question");

export default Question;