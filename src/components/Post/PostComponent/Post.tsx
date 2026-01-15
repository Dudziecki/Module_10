import React, { useReducer, useState } from "react";
import { IAuthor, IComment } from "../types";
import { PostHeader } from "../PostHeader/PostHeader";
import { LikeButton } from "../LikeButton/LikeButton";
import { PostContent } from "../PostContent/PostContent";
import "./Post.css";
import { MessageIcon } from "../../../assets/icons/MessageIcon";
import { ShowCommentIcon } from "../../../assets/icons/ShowCommentIcon";
import { CommentItem } from "../CommentItem/CommentItem";
import { CommentForm } from "../CommentForm/CommentForm";
import {
  addCommentAC,
  commentsReducer,
  deleteCommentAC,
} from "../../../store/comments-reducer";

type PostPropsType = {
  author: IAuthor;
  createdAt: string;
  description: string;
  image?: string;
  likesCount: number;
  comments: IComment[];
  isLoggedIn: boolean;
};

export const Post = ({
  description,
  image,
  isLoggedIn,
  createdAt,
  likesCount,
  author,
  ...props
}: PostPropsType) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [comments, dispatch] = useReducer(commentsReducer, props.comments);

  function handleAddComment(text: string) {
    dispatch(addCommentAC(text));
  }

  function handleRemoveComment(id: number) {
    dispatch(deleteCommentAC(id));
  }

  function handleCommentsOpen() {
    setIsCommentsOpen(!isCommentsOpen);
  }

  return (
    <article className="post">
      <PostHeader author={author} createdAt={createdAt} />

      <PostContent image={image} description={description} />

      <div className="post-actions-section">
        <div className="post-actions">
          <LikeButton count={likesCount} />

          <button
            onClick={handleCommentsOpen}
            className="comments-toggle"
            aria-expanded={isCommentsOpen}
            aria-label={`${isCommentsOpen ? "Close" : "Open"} comments`}
          >
            <span className="comments-count">
              <MessageIcon /> {comments.length}{" "}
              {isLoggedIn
                ? "comments"
                : "You have to login to see the comments"}
            </span>
            <span className="toggle-icon">
              {isLoggedIn && (
                <ShowCommentIcon shouldShowComments={isCommentsOpen} />
              )}
            </span>
          </button>
        </div>

        <section>
          {isCommentsOpen &&
            (isLoggedIn ? (
              <ul className="post-list">
                {comments.map((comment) => (
                  <CommentItem
                    key={comment.id}
                    comment={comment}
                    onDelete={handleRemoveComment}
                  />
                ))}
              </ul>
            ) : (
              <></>
            ))}

          <CommentForm onAdd={handleAddComment} />
        </section>
      </div>
    </article>
  );
};
