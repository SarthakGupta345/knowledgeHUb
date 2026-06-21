import mongoose, { Schema, Document, Types } from "mongoose";

export interface IComment extends Document {
    content: string;
    author: Types.ObjectId;
    post: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const commentSchema = new Schema<IComment>(
    {
        content: {
            type: String,
            required: [true, "Comment content is required"],
            trim: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model<IComment>("Comment", commentSchema);

export default Comment;
