import React, { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import "./CommentForm.css";
import { PencilIcon } from "../../../assets/icons/PencilIcon";
import { Button } from "../../common/Button/Button";

export type CommentFormProps = {
  onAdd: (text: string) => void;
};

export const CommentForm = ({ onAdd }: CommentFormProps) => {
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!text.trim() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      onAdd(text);
      setText("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleKeyDown(e:KeyboardEvent) {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit(e);
    }
  }

  function handleCommentKeyDown(e:ChangeEvent<HTMLTextAreaElement>){
    setText(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="comment-form-header">
        <PencilIcon />
        <span className="comment-form-label"> Add a comment</span>
      </div>

      <textarea
        value={text}
        onChange={handleCommentKeyDown}
        onKeyDown={handleKeyDown}
        placeholder="Write your comment here..."
        className="comment-form-textarea"
        rows={3}
        disabled={isSubmitting}
        aria-label="Comment text"
      />

      <div className="comment-form-footer">
        <Button
          type="submit"
          className="comment-form-submit-btn"
          disabled={!text.trim() || isSubmitting}
          aria-label="Submit comment"
        >
          {" "}
          {isSubmitting ? "Adding..." : "Add a comment"}
        </Button>
      </div>
    </form>
  );
};
