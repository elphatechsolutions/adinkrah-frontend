import { useState } from "react";
import { FaUser, FaHeart, FaRegHeart, FaReply } from "react-icons/fa";

interface Comment {
  id: number;
  author: string;
  avatar?: string;
  content: string;
  date: string;
  likes: number;
  isLiked: boolean;
  replies?: Comment[];
}

const BlogComment = () => {
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Sarah J.",
      content:
        "This brought me so much peace. It's comforting to know that it's okay to take my time to heal.",
      date: "2 days ago",
      likes: 12,
      isLiked: false,
    },
    {
      id: 2,
      author: "Michael T.",
      content:
        "I come back to this post every time I feel overwhelmed. It helps me breathe again.",
      date: "1 week ago",
      likes: 8,
      isLiked: true,
      replies: [
        {
          id: 3,
          author: "Admin",
          content: "We're so glad this post has been helpful for you, Michael!",
          date: "6 days ago",
          likes: 3,
          isLiked: false,
        },
      ],
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const toggleLike = (commentId: number) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked,
          };
        }
        return comment;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (replyingTo) {
      if (!replyContent.trim()) return;

      const newReply: Comment = {
        id: Date.now(),
        author: "You",
        content: replyContent,
        date: "Just now",
        likes: 0,
        isLiked: false,
      };

      const addReply = (comments: Comment[], parentId: number): Comment[] => {
        return comments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), newReply],
            };
          }
          if (comment.replies) {
            return {
              ...comment,
              replies: addReply(comment.replies, parentId),
            };
          }
          return comment;
        });
      };

      setComments(addReply(comments, replyingTo));
      setReplyContent("");
      setReplyingTo(null);
    } else {
      if (!newComment.trim()) return;

      const newCommentObj: Comment = {
        id: Date.now(),
        author: "You",
        content: newComment,
        date: "Just now",
        likes: 0,
        isLiked: false,
      };

      setComments([newCommentObj, ...comments]);
      setNewComment("");
    }
  };

  const renderComment = (comment: Comment, isReply = false) => (
    <div
      key={comment.id}
      className={`mb-6 ${
        isReply ? "ml-8 mt-4 pl-4 border-l-2 border-gray-200" : ""
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <FaUser className="text-gray-500" />
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-800">
                  {comment.author}
                </h4>
                <span className="text-xs text-gray-500">{comment.date}</span>
              </div>
              <button
                onClick={() => toggleLike(comment.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                {comment.isLiked ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
                <span className="ml-1 text-xs">{comment.likes}</span>
              </button>
            </div>
            <p className="mt-2 text-gray-700">{comment.content}</p>
            <div className="mt-3 flex space-x-4 text-sm text-gray-500">
              <button
                className="flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setReplyingTo(comment.id)}
              >
                <FaReply className="mr-1" />
                Reply
              </button>
            </div>
          </div>

          {comment.replies?.map((reply) => renderComment(reply, true))}
          {replyingTo === comment.id && (
            <div className="mt-4 ml-8 pl-4 border-l-2 border-gray-200">
              <form onSubmit={handleSubmit} className="mt-2">
                <textarea
                  className="w-full px-3 resize-none py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Write your reply..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  required
                />
                <div className="flex gap-2 mt-2">
                  <button
                    type="submit"
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Post Reply
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    onClick={() => {
                      setReplyingTo(null);
                      setReplyContent("");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Comments ({comments.length})
      </h3>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Leave a Comment
          </label>
          <textarea
            id="comment"
            rows={4}
            className="w-full px-4 py-3 resize-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          Your email address will not be published. Required fields are marked*
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Post Comment
        </button>
      </form>
      <div className="space-y-6 text-sm">
        {comments.map((comment) => renderComment(comment, false))}
      </div>{" "}
    </div>
  );
};

export default BlogComment;
