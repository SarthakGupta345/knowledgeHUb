import { Response } from "express";
import Post from "../models/post.model";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import User from "../models/user.model";


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

export const createPost = async (
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
        const { title, content } = req.body;

        if (!title?.trim() || !content?.trim()) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required",
            });
        }

        const post = await Post.create({
            title: title.trim(),
            content: content.trim(),
            author: userId,
        });

        await User.findByIdAndUpdate(
            userId,
            {
                $push: {
                    posts: post._id,
                },
            }
        );

        return res.status(201).json({
            success: true,
            message: "Post created successfully",
            data: post,
        });
    } catch (error) {
        console.error("Create Post Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

export const deletePost = async (
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
        const { postId } = req.params;
        if (!postId) {
            return res.status(400).json({
                success: false,
                message: "Post ID is required",
            });
        }
        const post = await Post.findByIdAndDelete(postId);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        await User.findByIdAndUpdate(
            userId,
            {
                $pull: {
                    posts: postId,
                },
            }
        );
        return res.status(200).json({
            success: true,
            message: "Post deleted successfully",
            data: post,
        });
    } catch (error) {
        console.error("Delete Post Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

export const upVotePost = async (
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
        const { postId } = req.params;
        if (!postId) {
            return res.status(400).json({
                success: false,
                message: "Post ID is required",
            });
        }
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        if (post.upvotes.includes(userId)) {
            return res.status(400).json({
                success: false,
                message: "Post already upvoted",
            });
        }
        post.upvotes.push(userId);
        await post.save();
        return res.status(200).json({
            success: true,
            message: "Post upvoted successfully",
            data: post,
        });
    } catch (error) {
        console.error("Upvote Post Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

export const downVotePost = async (
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
        const { postId } = req.params;
        if (!postId) {
            return res.status(400).json({
                success: false,
                message: "Post ID is required",
            });
        }
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        if (post.downvotes.includes(userId)) {
            return res.status(400).json({
                success: false,
                message: "Post already downvoted",
            });
        }
        post.downvotes.push(userId);
        await post.save();
        return res.status(200).json({
            success: true,
            message: "Post downvoted successfully",
            data: post,
        });
    } catch (error) {
        console.error("Downvote Post Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

export const updatePost = async (
    req: AuthenticatedRequest,
    res: Response
) => {
    try {
        const userId = req.user._id;
        const { title, content } = req.body;

        if (!title?.trim() || !content?.trim()) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required",
            });
        }
        const { postId } = req.params;
        if (!postId) {
            return res.status(400).json({
                success: false,
                message: "Post ID is required",
            });
        }
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }
        if (post.author.toString() !== userId.toString()) {
            return res.status(403).json({
                success: false,
                message: "Unauthorized",
            });
        }
        post.title = title.trim();
        post.content = content.trim();
        await post.save();
        return res.status(200).json({
            success: true,
            message: "Post updated successfully",
            data: post,
        });
    } catch (error) {
        console.error("Update Post Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

export const createComment = async (
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
        const { postId } = req.params;
        if (!postId) {
            return res.status(400).json({
                success: false,
                message: "Post ID is required",
            });
        }
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }
        const comment = await Comment.create({
            content: req.body.content,
            author: userId,
            post: postId,
        });
        post.comments.push(comment._id);
        await post.save();
        return res.status(200).json({
            success: true,
            message: "Comment created successfully",
            data: comment,
        });
    } catch (error) {
        console.error("Create Comment Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

export const deleteComment = async (
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
        const { commentId } = req.params;
        if (!commentId) {
            return res.status(400).json({
                success: false,
                message: "Comment ID is required",
            });
        }
        const comment = await Comment.findByIdAndDelete(commentId);
        if (!comment) {
            return res.status(404).json({
                success: false,
                message: "Comment not found",
            });
        }
        await Post.findByIdAndUpdate(
            comment.post,
            {
                $pull: {
                    comments: commentId,
                },
            }
        );
        return res.status(200).json({
            success: true,
            message: "Comment deleted successfully",
            data: comment,
        });
    } catch (error) {
        console.error("Delete Comment Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

export const getPostIndetails = async (
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
        const { postId } = req.params;
        if (!postId) {
            return res.status(400).json({
                success: false,
                message: "Post ID is required",
            });
        }
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Post fetched successfully",
            data: post,
        });
    } catch (error) {
        console.error("Get Post In Details Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};