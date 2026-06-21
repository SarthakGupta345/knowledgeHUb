import { Response } from "express";
import Post from "../models/post.model";
import { AuthenticatedRequest } from "../middleware/auth.middleware";

export const getAllPostsFromUser = async (
    req: AuthenticatedRequest,
    res: Response
) => {
    try {
        const userId = req.user._id;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const posts = await Post.find({
            author: userId,
        })
            .populate("author", "name profilePicture")
            .populate("comments")
            .sort({ createdAt: -1 })
            .lean();

        return res.status(200).json({
            success: true,
            count: posts.length,
            data: posts,
        });
    } catch (error) {
        console.error("Get User Posts Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};