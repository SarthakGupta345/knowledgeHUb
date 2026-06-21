import mongoose, { Document, Types } from "mongoose";

export interface IPost extends Document {
    title: string;
    content: string;

    author: Types.ObjectId;

    comments: Types.ObjectId[];
    upvotes: Types.ObjectId[];
    downvotes: Types.ObjectId[];

    createdAt: Date;
    updatedAt: Date;
}

const postSchema = new mongoose.Schema<IPost>(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            minlength: 3,
            maxlength: 200,
        },

        content: {
            type: String,
            required: [true, "Content is required"],
            trim: true,
            minlength: 10,
        },

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],

        upvotes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],

        downvotes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    }
);

postSchema.index({ author: 1, createdAt: -1 });
postSchema.index({ createdAt: -1 });

postSchema.virtual("upvoteCount").get(function () {
    return this.upvotes.length;
});

postSchema.virtual("downvoteCount").get(function () {
    return this.downvotes.length;
});

postSchema.virtual("commentCount").get(function () {
    return this.comments.length;
});

const Post = mongoose.model<IPost>("Post", postSchema);

export default Post;