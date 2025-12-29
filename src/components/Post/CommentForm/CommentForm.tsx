import React, { useState } from "react";
import "./CommentForm.css";
import { PencilIcon } from "../../../assets/icons/PencilIcon";
import { Button } from "../../common/Button/Button";

export const CommentForm: React.FC<{ onAdd: (text: string) => void }> = ({
  onAdd,
}) => {
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="comment-form-header">
        <PencilIcon />
        <span className="comment-form-label"> Add a comment</span>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
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
