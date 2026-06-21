import mongoose, { Document, Types } from "mongoose";

interface IQuestion extends Document {
    title: string;
    content: string;
    author: Types.ObjectId;
    comments: Types.ObjectId[];
    upvotes: Types.ObjectId[];
    downvotes: Types.ObjectId[];
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

const Question = mongoose.model<IQuestion>("Question", questionSchema);

export default Question;