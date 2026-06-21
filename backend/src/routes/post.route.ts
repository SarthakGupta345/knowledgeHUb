import { Router } from "express";
import { createPost, deletePost, getAllPostsFromUser, upVotePost, downVotePost, deleteComment, createComment } from "../controller/post.controller";
import { loginMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/create", loginMiddleware, createPost);
router.get("/", loginMiddleware, getAllPostsFromUser);
router.delete("/:postId", loginMiddleware, deletePost);
router.post("/:postId/upvote", loginMiddleware, upVotePost);
router.post("/:postId/downvote", loginMiddleware, downVotePost);
router.post("/answer", loginMiddleware, createComment);
router.delete("/:postId/comment/:commentId", loginMiddleware, deleteComment);

export default router;